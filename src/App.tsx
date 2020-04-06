import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { fArgReturn } from './types/Functions';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';
import { setCurrentUser } from './redux/user/user.actions';
import { AppState } from './redux/_root-reducer';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import SignInAndSignUp from './components/sign-in-and-sign-up/sign-in-and-sign-up.component';

import './App.css';
import { Dispatch, AnyAction } from 'redux';

const mapStateToProps = (state : AppState) => ({
  currentUser: state.user.currentUser
});

const mapDispatchToProps = (dispatch: Dispatch<AnyAction>) => ({
  setCurrentUser: (user: any) => dispatch(setCurrentUser(user))
});



class App extends React.Component<ReturnType<typeof mapDispatchToProps> & ReturnType<typeof mapStateToProps>, {} > {
  
  unsubscribeFromAuth : fArgReturn = () => false; //auth.onAuthStateChanged returns a bool

  componentDidMount() {

    const setCurrentUser : fArgReturn = this.props.setCurrentUser;

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {


      if (userAuth) {

        const userRef : any = await createUserProfileDocument(userAuth);

        userRef.get().then((snapShot : any) => {

          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data()
          });
        });

      } else {
        setCurrentUser(null);
      }
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {

    return (
      <div>
        <Header />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={ShopPage} />
          <Route exact path='/signin' render={() => this.props.currentUser ? <Redirect to='/' /> : <SignInAndSignUp />} />
        </Switch>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);

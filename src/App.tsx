import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import { fArgReturn } from './types/Functions';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';
import { setCurrentUser } from './redux/user/user.actions';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import SignInAndSignUp from './components/sign-in-and-sign-up/sign-in-and-sign-up.component';

import './App.css';
import { Dispatch, AnyAction } from 'redux';

const mapDispatchToProps = (dispatch: Dispatch<AnyAction>) => ({
  setCurrentUser: (user: any) => dispatch(setCurrentUser(user))
});



class App extends React.Component<ReturnType<typeof mapDispatchToProps>, {}> {
  
  unsubscribeFromAuth : fArgReturn = () => false; //auth.onAuthStateChanged returns a bool

  componentDidMount() {

    const setCurrentUser : fArgReturn = this.props.setCurrentUser;

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {

      console.log('onAuthStateChanged called');

      if (userAuth) {

        const userRef : any = await createUserProfileDocument(userAuth);

        userRef.get().then((snapShot : any) => {

          console.log('sign in user object is : ', {
            currentUser: snapShot.id,
            ...snapShot.data()
          })

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
          <Route path='/signin' component={SignInAndSignUp} />
        </Switch>
      </div>
    );
  }
}

export default connect(null, mapDispatchToProps)(App);

import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { fArgReturn } from './types/FunctionTypes';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';
import { setCurrentUser } from './redux/user/user.actions';
import { AppState } from './redux/_root-reducer';
import { selectCurrentUser } from './redux/user/user.selectors';
import { createStructuredSelector } from 'reselect';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import CheckoutPage from './pages/checkout/checkout.component';
import SignInAndSignUp from './components/sign-in-and-sign-up/sign-in-and-sign-up.component';
import Header from './components/header/header.component';

import './App.css';
import { Dispatch, AnyAction } from 'redux';

interface IStateProps {
  currentUser: any
}

interface IDispatchProps {
  setCurrentUser: fArgReturn
}

type AppComponentProps = IStateProps & IDispatchProps; 

class App extends React.Component<AppComponentProps, {} > {
  
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
          <Route exact path='/checkout' component={CheckoutPage} />
          <Route 
            exact 
            path='/signin' 
            render={() => this.props.currentUser ? <Redirect to='/' /> : <SignInAndSignUp />} 
          />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector<AppState, IStateProps>({
  currentUser: selectCurrentUser
});

const mapDispatchToProps = (dispatch: Dispatch<AnyAction>) => ({
  setCurrentUser: (user: any) => dispatch(setCurrentUser(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);

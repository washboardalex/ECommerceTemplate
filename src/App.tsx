import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import { fEmptyVoid, fEmptyReturn, fArgVoid, fArgReturn } from './types/Functions';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import SignInAndSignUp from './components/sign-in-and-sign-up/sign-in-and-sign-up.component';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';

const HatsPage = () => (
  <div>
    <h1>Hats!</h1>
  </div>
)

interface IAppState {
  currentUser?: any //potentially replace any type with IUserFirebase model on a real app
}

class App extends React.Component {
  
  state : IAppState = {
    currentUser: null
  }

  unsubscribeFromAuth : fArgReturn = () => false; //auth.onAuthStateChanged returns a bool

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {

      if (userAuth) {
        
        const userRef : any = await createUserProfileDocument(userAuth);

        userRef.get().then((snapShot : any) => {
          this.setState({
            currentUser: snapShot.id,
            ...snapShot.data()
          })
        });

      } else {
        this.setState({currentUser: userAuth })
      }
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header currentUser={ this.state.currentUser } />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={ShopPage} />
          <Route path='/signin' component={SignInAndSignUp} />
        </Switch>
      </div>
    );
  }
}

export default App;

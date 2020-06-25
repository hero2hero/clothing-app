import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";

import "./App.css";

import ShopPage from "./pages/shop/shop.compon";
import HomePage from "./pages/homepage/homepage.compon";
import Header from "./components/header/header.compon";
import SignInSignUp from './pages/signin-signup/signin-signup.compon';
import { auth } from './firebase/firebase.util'

class App extends Component {
  state = {
    currentUser: null
  }
  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({ currentUser: user })
    })
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  

  render() {
    return (
      <div>
      <Header currentUser={this.state.currentUser}/>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/shop" component={ShopPage} />
        <Route exact path="/signin" component={SignInSignUp} />
      </Switch>
      </div>
    );
  }
}

export default App;



import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import { connect } from 'react-redux'
import "./App.css";

import ShopPage from "./pages/shop/shop.compon";
import HomePage from "./pages/homepage/homepage.compon";
import Header from "./components/header/header.compon";
import SignInSignUp from "./pages/signin-signup/signin-signup.compon";
import { auth, createUserProfileDocument } from "./firebase/firebase.util";
import {setCurrentUser} from './redux/user/user.actions';

class App extends Component {
  unsubscribeFromAuth = null;

  componentDidMount() {
    const { setCurrentUser } = this.props;
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot((snapShot) => {
          setCurrentUser({
              id: snapShot.id,
              ...snapShot.data(),
            });
        });
      } else {
        setCurrentUser(userAuth);
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
          <Route exact path="/" component={HomePage} />
          <Route exact path="/shop" component={ShopPage} />
          <Route exact path="/signin" component={SignInSignUp} />
        </Switch>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(null, mapDispatchToProps) (App);

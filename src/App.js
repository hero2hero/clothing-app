import React from "react";
import { Switch, Route } from "react-router-dom";

import "./App.css";

import ShopPage from "./pages/shop/shop.compon";
import HomePage from "./pages/homepage/homepage.compon";
import Header from "./components/header/header.compon";

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/shop" component={ShopPage} />
      </Switch>
    </div>
  );
}

export default App;

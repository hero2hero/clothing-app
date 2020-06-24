import React from "react";
import { Switch, Route } from "react-router-dom";

import "./App.css";

import ShopPage from './pages/shop/shop.compon';
import HomePage from "./pages/homepage/homepage.compon";

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/shop" component={ShopPage} />
      </Switch>
    </div>
  );
}

export default App;

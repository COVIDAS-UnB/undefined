import { Switch, Route } from "react-router-dom";
import React from "react";
import SignIn from "../pages/SignIn";
import SingUp from "../pages/SingUp";
import Dashboard from "../pages/Dashboard";
import Details from "../pages/Details";
import Home from "../pages/Home";
import RegisterProduct from "../pages/RegisterProduct";
export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/login" component={SignIn} />
      <Route path="/register" component={SingUp} />
      <Route path="/dashboard" component={Dashboard} />

      <Route path="/details" component={Details} isPrivate />
      <Route path="/registerproduct" component={RegisterProduct} isPrivate />
    </Switch>
  );
}

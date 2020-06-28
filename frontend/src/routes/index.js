import React from "react";
import { Switch } from "react-router-dom";
import Route from "./Route";
import SignIn from "../pages/SignIn";
import SignUp from "../pages/SignUp";
import Dashboard from "../pages/Dashboard";

import RegisterProduct from "../pages/RegisterProduct";
import Home from "../pages/Home";
import Details from "../pages/Details";
export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/login" component={SignIn} />
      <Route path="/register" component={SignUp} />
      <Route path="/dashboard" component={Dashboard} />

      <Route path="/registerproduct" component={RegisterProduct} isPrivate />
      <Route path="/details" component={Details} isPrivate />
    </Switch>
  );
}

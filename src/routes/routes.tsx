import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import LoginView from "../views/auth/login";

export default function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={LoginView} />
      </Switch>
    </BrowserRouter>
  );
}

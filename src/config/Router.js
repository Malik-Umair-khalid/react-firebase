import React from "react";
import { Login, Profile, SignUp } from "../containers";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function MyRouter() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/signup" component={SignUp} />
        <Route exact path="/profile" component={Profile} />
      </Switch>
    </Router>
  );
}
export default MyRouter;

import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { Main } from "./Pages/Main/Main";
import { Login } from "./Pages/Login/Login";
import { SignUp } from "./Pages/SignUp/SignUp";
import Details from "./Pages/Details/Details";
import { Lists } from "./Pages/Lists/Lists";
import Nav from "./Components/Nav/Nav";
import Footer from "./Pages/Main/Components/Footer/Footer";

class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Nav />
        <Switch>
          <Route exact path="/" component={Main} />
          <Route exact path="/Login" component={Login} />
          <Route exact path="/SignUp" component={SignUp} />
          <Route exact path="/Details/:id" component={Details} />
          <Route exact path="/Lists" component={Lists} />
        </Switch>
        <Footer />
      </Router>
    );
  }
}
export default Routes;

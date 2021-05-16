import React from "react";
import Navbar from "../Components/NavBar/";
import Homepage from "../Pages/Homepage";
import Members from "../Pages/Members";
import Profil from "../Pages/Profil";
import Trending from "../Pages/Trending";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";

function Routes() {
  return (
    <div>
      <Router>
        <div className="App">
          <Navbar />

          <Switch>
            <Route exact path="/">
              <Homepage />
            </Route>

            <Route path="/members">
              <Members />
            </Route>

            <Route path="/profil">
              <Profil />
            </Route>

            <Route path="/trending">
              <Trending />
            </Route>

            <Redirect to="/" />
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default Routes;

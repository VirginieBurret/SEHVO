import React, { useState } from "react";
import Navbar from "../Components/NavBar/";
import Homepage from "../Pages/Homepage";
import Members from "../Pages/Members";
import Profil from "../Pages/Profil";
import Trending from "../Pages/Trending";
import MembersNavBar from "../Components/MembersNavBar";
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
          <Switch>
            <Route exact path="/">
              <Navbar />
              <Homepage />
            </Route>

            <Route path="/members">
              <MembersNavBar />
              <Members />
            </Route>

            <Route path="/profil">
              <MembersNavBar />
              <Profil />
            </Route>

            <Route path="/trending">
              <MembersNavBar />
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

import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Topics from "./components/Topics";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink
} from "react-router-dom";

function App() {
  return (
    <Router>
      <nav className="navbar">
        <ul>
          <li>
            <NavLink
              activeClassName="nav-link-active"
              className="nav-link"
              exact
              to="/"
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              activeClassName="nav-link-active"
              className="nav-link"
              exact
              to="/about"
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              activeClassName="nav-link-active"
              className="nav-link"
              exact
              to="/contact"
            >
              Contact
            </NavLink>
          </li>
          <li>
            <NavLink
              activeClassName="nav-link-active"
              className="nav-link"
              exact
              to="/topics"
            >
              Topics
            </NavLink>
          </li>
        </ul>
      </nav>

      <Switch>
        <Route path="/topics">
          <Topics />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;

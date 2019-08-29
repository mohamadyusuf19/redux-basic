import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "../container/Home";
import About from "../container/About";
import Profile from "../container/Profile";
import Navbar from "../components/Navbar";

export default function Routes() {
  return (
    <Router>
      <Navbar />
      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/profile" component={Profile} />
    </Router>
  );
}

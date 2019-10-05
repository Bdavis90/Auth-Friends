import React from "react";
import { Route } from "react-router-dom";
import "./App.css";

import Login from "./components/Login";
import NavBar from "./components/NavBar";
import FriendsList from "./components/FriendsList";
import PrivateRoute from "./components/PrivateRoute";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Route exact path="/login" component={Login} />
      <PrivateRoute path="/friends" component={FriendsList} />
    </div>
  );
}

export default App;

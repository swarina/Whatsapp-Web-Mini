import React, { useState } from "react";

//CSS
import "./App.css";

import Sidebar from "./Sidebar";
import Chat from "./Chat";
import Login from "./Login";

//React-Router
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { useStateValue } from "./StateProvider";

//BEM Naming Convention

function App() {
  const [{ user }, dispatch] = useStateValue();

  return (
    <div className="app">
      {!user ? (
        <Login />
      ) : (
        <div className="app__body">
          <Router>
            <Sidebar />
            <Switch>
              <Route path="/rooms/:roomId">
                <Chat />
              </Route>

              <Route path="/">
                <Chat />
              </Route>
            </Switch>
          </Router>
        </div>
      )}
    </div>
  );
}

export default App;

import React from "react";

//CSS
import "./App.css";

import Sidebar from "./Sidebar";
import Chat from "./Chat";

//React-Router
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

//BEM Naming Convention

function App() {
  return (
    <div className="app">
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
    </div>
  );
}

export default App;

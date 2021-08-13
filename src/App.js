import React from "react";
import "./App.css";
import Sidebar from "./Sidebar";

//BEM Naming Convention

function App() {
  return (
    <div className="app">
      <div className="app__body">
        <Sidebar />
        {/* CHAT */}
      </div>
    </div>
  );
}

export default App;

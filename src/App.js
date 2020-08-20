import React, { Component } from "react";
import Board from "./Board";
import Cell from "./Cell";
import "./App.css";

/** Funny app that shows the LightsOut game. */

class App extends Component {
  render() {
    return (
      <div className='App'>
        <Board />
      </div>
    );
  }
}

export default App;

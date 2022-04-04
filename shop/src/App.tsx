import React from 'react';
import './App.scss';
import {Counter} from "./components/Counter/Counter";
import logo from "./logo.svg"

function App() {
  return (
    <div className="App">
      <Counter/>
        <img src={logo} alt="alt"/>
    </div>
  );
}

export default App;

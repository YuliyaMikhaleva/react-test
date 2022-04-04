import React from 'react';
import './App.scss';
import './variables.scss'
import {Counter} from "./components/Counter/Counter";
import logo from "./logo.svg"
import "./assets/styles.scss"


function App() {
  return (
    <div className="App">
      <Counter/>
        <img src={logo} alt="alt"/>
    </div>
  );
}

export default App;

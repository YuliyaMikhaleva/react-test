import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Header} from "./components/Header/Header";

function App() {
  return (
    <div className="App">
      <Header message='1'/>
      <img src={logo} className="App-logo" alt="logo" />

    </div>
  );
}

export default App;

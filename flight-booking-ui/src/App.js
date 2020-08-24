import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';

import Header from './Components/header'
import Login from './Components/login'
import SignUp from './Components/signup'
import Home from './Components/home'

class App extends Component {


  render() {
    return (
      <div className="App">
        <Header />

      </div>
    );
  }
}
export default App;

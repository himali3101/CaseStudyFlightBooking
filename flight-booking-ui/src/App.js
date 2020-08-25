import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import { Router } from 'react-router-dom';
import Header from './Components/header'

import Route from 'react-router-dom/Route'
import AdminPage from './Components/adminPage'

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

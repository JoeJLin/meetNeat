import React, { Component } from 'react';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";

import Facebook from './components/Facebook';
import AppNavBar from './components/AppNavBar';

class App extends Component {
  render() {
    return (
      <div className="App">
        <AppNavBar />
        <Facebook />
      </div>
    );
  }
}

export default App;

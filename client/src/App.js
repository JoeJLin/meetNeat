import React, { Component } from 'react';
import AppNavBar from "./component/AppNavBar"
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <AppNavBar/>
        hello
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Switch, Route, BrowserRouter } from "react-router-dom";
import './App.css';

import Facebook from './components/Facebook';
import AppNavBar from './components/AppNavBar';
import Create from './components/Create';

class App extends Component {
  state = {
    name: "",
    picture: "",
    isLoggedIn: false
  };

  render() {
      return <div className="App">
          <AppNavBar username={this.state.name} img={this.state.picture} />
          <Switch>
            <Route exact path="/" render={() => <Facebook updateTarget={response => {
                    this.setState({
                      name: response.name,
                      picture: response.picture.data.url,
                      isLoggedIn: true
                    });
                  }} />} />
            <Route exact path="/create" render={() => <Create /> }></Route>
          </Switch>
        </div>;
  }
}

export default App;

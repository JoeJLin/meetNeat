import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import Facebook from './components/Facebook';
import AppNavBar from './components/AppNavBar';

class App extends Component {
  state = {
    name: "",
    picture: "",
    isLoggedIn: false
  };

  render() {
      return (
        <div className="App">
          <AppNavBar username={this.state.name} img={this.state.picture} />
          <Facebook
            updateTarget={response => {
              console.log(response);
              this.setState({
                name: response.name,
                picture: response.picture.data.url,
                isLoggedIn: true
              });
            }}
          />
        </div>
      );
  }
}

export default App;

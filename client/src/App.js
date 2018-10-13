import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import Facebook from './components/Facebook';
import AppNavBar from './components/AppNavBar';

class App extends Component {
  state = {
    name: '',
    picture: ''
  }

  // componentDidMount(
  
  // )

  render() {
    return (
      <div className="App">
        <AppNavBar username={this.state.name} img={this.state.picture}/>
        <Facebook updateTarget={response => {
            console.log(response.picture.data.url)
            this.setState({
              name: response.name,
              picture: response.picture.data.url
            });
          }}/>
      </div>
    );
  }
}

export default App;

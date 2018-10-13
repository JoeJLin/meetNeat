import React, { Component } from 'react';
import FacebookLogin from 'react-facebook-login';

export default class Facebook extends Component {
  state = {
    isLoggedIn: false,
    userID: '',
    name: '',
    email: '',
    picture: ''
  }

  componentClicked = () => {
    console.log("Clicked")
  }

  responseFacebook = response => {
    console.log(response);

    this.setState({
      isLoggedIn: true,
      userID: response.id,
      name: response.name,
      email: response.email,
      picture: response.picture.data.url
    })
  }


  render() {
    let fbContent;

    if(this.state.isLoggedIn) {
      fbContent = (
        <div style={{
          width: '400px',
          margin: 'auto',
          background: '#f4f4f4',
          padding: '20px'
        }}>
          <img src={this.state.picture} alt={this.state.name} />
          <h2>Welcome {this.state.name}</h2>

        </div>
      );
    } else {
        fbContent = (
           <FacebookLogin
            appId = {process.env.REACT_APP_FB_ID}
            autoLoad={true}
            fields="name,email,picture"
            onClick={this.componentClicked}
            callback={this.responseFacebook} />
        )
    }

    return (
      <div>
        {fbContent}
      </div>
    )
  }
}

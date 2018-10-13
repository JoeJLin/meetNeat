import React, { Component } from 'react';
import FacebookLogin from 'react-facebook-login';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

export default class Facebook extends Component {
  state = {
    isLoggedIn: false,
    userID: '',
    name: '',
    email: '',
    picture: '',
    modal: true
  }
  toggle() {
    this.setState({
      modal: !this.state.modal
    });
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
          margin: '0 auto',
          background: '#f4f4f4',
          padding: '20px'
        }}>
          <img src={this.state.picture} alt={this.state.name} />
          <h2>Welcome {this.state.name}</h2>

        </div>
      );
    } else {
        fbContent = (
          <Modal isOpen = {this.state.modal} className={this.props.className}>
            <ModalBody>
              <FacebookLogin
                appId = {process.env.REACT_APP_FB_ID}
                autoLoad={true}
                fields="name,email,picture"
                onClick={this.componentClicked}
                callback={this.responseFacebook} />
            </ModalBody>
          </Modal>
        )
    }

    return (
      <div>
            {fbContent}
      </div>
    )
  }
}

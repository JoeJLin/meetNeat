import React, { Component } from 'react';
import FacebookLogin from 'react-facebook-login';
import {
  Container,
  Row,
  Col,
  Card,
  CardBody,
} from "reactstrap";

export default class Facebook extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoggedIn: false,
      userID: '',
      name: '',
      email: '',
      picture: '',
      modal: true
    }
  }
  

  componentClicked = () => {
    console.log("Clicked")
  }

  responseFacebook = response => {
    console.log(response);
    this.props.updateTarget(response);
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
        <div >
          <h1>Welcome {this.state.name}!!</h1>
        </div>
      );
    } else {
        fbContent = (
          <Card>
              <h1 style={{margin:"10px"}}>Welcome!!</h1>
              <h5 style={{margin:"10px"}}>Please Sign In!!</h5>
              <CardBody>
                <FacebookLogin
                appId = {process.env.REACT_APP_FB_ID}
                autoLoad={true}
                fields="name,email,picture"
                onClick={this.componentClicked}
                callback={this.responseFacebook} />
              </CardBody>
          </Card>
        )
    }

    return (
      <div>
      <Container>
        <Row>
          <Col sm="5" m="5" l="4" className="center">
            {fbContent}
          </Col>
        </Row>
      </Container>
            
      </div>
    )
  }
}

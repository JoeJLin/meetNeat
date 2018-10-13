import React, { Component } from 'react'
// import { Link, Route, BrowserRouter } from "react-router-dom";
import GMap from "./GMap";
import SearchBar from "./SearchBar";
import axios from "axios";
import SearchResults from './SearchResults';

import {
  Container,
  Row,
  Col
} from "reactstrap";

export default class Create extends Component {
  state = {
    term: 'Sushi',
    city: 'New York, NY',
    results: []
  }

  componentDidMount() {
    
    axios
      .post('http://localhost:5000/api/items', this.state.term)
      .then(response => {
        console.log(response);
        return response.data
      })
      .then(data => {
        this.setState({
          results: data
        }, () => console.log(this.state))
      })

  }

  // fetchAPI = () => {
  //   axios
  //     .post('/api/items', this.state.term, this.state.city)
  //     .then(res => {
  //       return res.json()
  //     })
  //     .then(data => {
  //       this.setState({
  //         results: data
  //       })
  //     })
  // }

  render() {
    return <div>
        <Row>
          <Col sm="6" m="6" l="6">
            <GMap />
          </Col>
          <Col sm="6" m="6" l="6">
            <SearchBar />
          </Col>
        </Row>
        <Row>
          
            {this.state.results.map((restaurant, key) => {
              return (
                <SearchResults restaurant={restaurant} key={key}/>
              );   
            })}
          
        </Row>
      </div>;
  }
}

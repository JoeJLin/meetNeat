import React, { Component } from 'react'
import { Link, Route, BrowserRouter } from "react-router-dom";
import GMap from "./GMap";
import SearchBar from "./SearchBar";

import {
  Container,
  Row,
  Col,
} from "reactstrap";

export default class Create extends Component {
  render() {
    return (
      <div>
      <Row>
        <Col sm="6" m="6" l="6">
          <GMap />
        </Col>
        <Col sm="6" m="6" l="6">
          <SearchBar />
        </Col>
      </Row>
      </div>
    )
  }
}

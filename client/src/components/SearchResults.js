import React, { Component } from 'react'
import {
  Col,
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button
} from "reactstrap";

const SearchResults = ({restaurant}) => {
  return (
    <Col sm="3" m="3" l="3" key={restaurant.id}>
      <Card>
        <CardImg top width="100%" height="auto" src={restaurant.image_url} alt={restaurant.name} />
        <CardBody>
          <CardTitle>{restaurant.name}</CardTitle>
          <CardSubtitle>
            {restaurant.location.display_address}
          </CardSubtitle>
          <CardText>
            Restaurant website: <a href={restaurant.url} />
          </CardText>
          <Button>Create</Button>
        </CardBody>
      </Card>
    </Col>
  )
}

export default SearchResults;;
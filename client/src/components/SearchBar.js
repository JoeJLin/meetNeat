import React, { Component } from 'react';
import {Button} from 'reactstrap';

function Food(props) {
  return (
    <div>
      <h1>{props.name}</h1>
      {/* <ul>
        <li>{props.latitude}</li>
        <l1>{props.longitude}</l1>
      </ul> */}
    </div>
  )
}
  

function FoodSearchField(props) {
  return (
    <form>
      <label>
        <input name="term" type="text" onChange={props.handleChange} placeholder="search..."  />
        <Button bsStyle="primary">Submit</Button>
      </label>
    </form>
  )
}





class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
  }

  FoodChange(event) {
      'use strict';

      const yelp = require('yelp-fusion');
      
      const client = yelp.client(process.env.REACT_APP_YELP);

      client.business(event.target.value)
      .then(response => {
        this.setState({data: response.jsonBody.businesses});
        console.log(response.jsonBody.businesses);
      }).catch(e => {
        console.log(e);
      });
  }

  render() {
    let items = [];
    for(let i = 0; i < this.state.data.length; i++) {
      let item = this.state.data[i];
      items.push(
        <Food Food={item.name} />
      );
    }

    return (
      <div className="App">
        <div className="Search-header">
          <h1>Food Search</h1>
        </div>
          <FoodSearchField handleChange={(e) => this.FoodChange(e)}/>
        <div>
          {items}
        </div>
      </div>
    );
  }
}

export default SearchBar;

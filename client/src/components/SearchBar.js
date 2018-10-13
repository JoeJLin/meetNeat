import React from 'react';
import {Button} from 'reactstrap';

const SearchBar = (props) => {
  return (
    <form onSubmit={props.enterTerm}>
      <label>
        <input name="term" type="text" onChange={props.updateTarget} placeholder="search..."  />
        <Button>Submit</Button>
      </label>
    </form>
  )
}

export default SearchBar;

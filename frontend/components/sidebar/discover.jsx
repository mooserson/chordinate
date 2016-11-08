import React from 'react';
import LogoutButtonContainer from './logout_button_container';
import { hashHistory } from 'react-router';
// import SongItem from './song_item';

class Discover extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
    <div className="discover">
      <h1>Discover</h1>
      <LogoutButtonContainer />
    </div>);
  }
}

export default Discover;

// <SongItem user="bob" name="The Rock" />

import React from 'react';
import LogoutButtonContainer from './logout_button_container';
import { hashHistory } from 'react-router';
import NewListContainer from './song_lists/new_list_container';

class Discover extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
    <div className="discover">
      <h1>Discover</h1>
      <div className="user-nav">
        <LogoutButtonContainer />
      </div>
      <div className='lists-container'>
        <h3>New Songs</h3>
        <NewListContainer />
      </div>
    </div>);
  }
}

export default Discover;

// <SongItem user="bob" name="The Rock" />

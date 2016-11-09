import React from 'react';
import LogoutButtonContainer from './logout_button_container';
import { hashHistory } from 'react-router';
import NewListContainer from './song_lists/new_list_container';
import PopularListContainer from  './song_lists/popular_list_container';
import PlayedListContainer from './song_lists/played_list_container';

class Discover extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
    <div className="discover">
      <div className="user-nav">
        <LogoutButtonContainer />
      </div>
      <div className='lists-container'>
        <h2>New Songs</h2>
        <NewListContainer />
        <h2>Popular Songs</h2>
        <PopularListContainer />
        <h2>Most Played Songs</h2>
        <PlayedListContainer />
      </div>
    </div>);
  }
}

export default Discover;

// <SongItem user="bob" name="The Rock" />

import React from 'react';
import { hashHistory } from 'react-router';
import UserButton from './user_button';
import SearchFormContainer from './search_form_container';

import NewListContainer from './song_lists/new_list_container';
import PopularListContainer from  './song_lists/popular_list_container';
import PlayedListContainer from './song_lists/played_list_container';
import SearchListContainer from './song_lists/search_list_container';
import UserListContainer from './song_lists/user_list_container';

class Discover extends React.Component {
  constructor(props) {
    super(props);
  }

  currentLists () {
    if (this.props.isSearching) {
      return (
        <div className='lists-container' >
          <h2>Song Results</h2>
          <SearchListContainer />
        </div>
      );
    } else if (this.props.username) {
      return (
        <div className='lists-container' >
          <h2>
            {`${this.props.username} `}
            <span className="search-clear" onClick={this.props.clearUser.bind(this)}>
              <i className="fa fa-times" aria-hidden="true" />
            </span>
          </h2>
          <UserListContainer />
        </div>
      );
    } else if (this.props.errors) {
      return(
        <div className='lists-container' >
          <h2>
            {`${this.props.currentUsername} `}
            <span className="search-clear" onClick={this.props.clearErrors.bind(this)}>
              <i className="fa fa-times" aria-hidden="true" />
            </span>
          </h2>
          <UserListContainer />
        </div>
      );
    } else {
      return (
        <div className='lists-container'>
          <h2>New Songs</h2>
          <NewListContainer />
          <h2>Popular Songs</h2>
          <PopularListContainer />
          <h2>Most Played Songs</h2>
          <PlayedListContainer />
        </div>
      );
    }
  }

  render() {
    return (
    <div className="discover">
      <div className="user-nav">
        <SearchFormContainer />
        <UserButton
          requestUserSongs={this.props.requestUserSongs}
          username={this.props.currentUsername}/>
      </div>
        {this.currentLists()}
    </div>);
  }
}

export default Discover;

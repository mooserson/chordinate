import React from 'react';
import {connect} from 'react-redux';
import Discover from './discover';
import {
  receiveUserSongs,
  requestUserSongs} from '../../actions/lists_actions';

  const mapStateToProps = state => {
    let user = "";
    if (state.lists.userSongs.length > 0) {
      user = state.lists.userSongs[0].user;
    }

    return({
      isSearching: !!state.lists.searchedSongs,
      username: user,
      currentUsername: `${state.session.currentUser ? state.session.currentUser.username : null}`
    });
  };

  const mapDispatchToProps = dispatch => ({
    clearUser: () => dispatch(receiveUserSongs("")),
    requestUserSongs: userId => dispatch(requestUserSongs(userId))
  });

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Discover);

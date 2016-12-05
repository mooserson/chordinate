import React from 'react';
import {connect} from 'react-redux';
import Discover from './discover';
import {
  receiveUserSongs,
  requestUserSongs,
  receiveUserSongsErrors
} from '../../actions/lists_actions';

  const mapStateToProps = state => {
    let user = "";
    if (state.lists.userSongs.length > 0) {
      user = state.lists.userSongs[0].user;
    }

    return({
      isSearching: Boolean(state.lists.searchedSongs),
      username: user,
      currentUsername: `${
        state.session.currentUser ? state.session.currentUser.username : null
      }`,
      errors: state.lists.errors
    });
  };

  const mapDispatchToProps = dispatch => ({
    clearUser: () => dispatch(receiveUserSongs("")),
    requestUserSongs: userId => dispatch(requestUserSongs(userId)),
    clearErrors: () => dispatch(receiveUserSongsErrors(""))
  });

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Discover);

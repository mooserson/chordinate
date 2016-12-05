import React from 'react';
import {connect} from 'react-redux';
import UserList from './user_list';
import {
  receiveUserSongsErrors,
  receiveUserSongs,
  receiveSearchSongs
} from '../../../actions/lists_actions';

const mapStateToProps = ({lists}) => ({
  songs: Object.values(lists.userSongs),
  errors: lists.errors
});

const mapDispatchToProps = dispatch => ({
  clearUser: () => dispatch(receiveUserSongs("")),
  clearErrors: () => dispatch(receiveUserSongsErrors("")),
  clearSearch: () => dispatch(receiveSearchSongs(""))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserList);

import React from 'react';
import {connect} from 'react-redux';
import UserList from './user_list';
import {receiveUserSongsErrors} from '../../../actions/lists_actions';

const mapStateToProps = ({lists}) => ({
  songs: Object.values(lists.userSongs),
  errors: lists.errors
});

const mapDispatchToProps = dispatch => ({
  clearErrors: () => dispatch(receiveUserSongsErrors())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserList);

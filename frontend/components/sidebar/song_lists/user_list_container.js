import React from 'react';
import {connect} from 'react-redux';
import UserList from './user_list';

const mapStateToProps = ({lists}) => ({
  songs: Object.values(lists.userSongs)
});

export default connect(
  mapStateToProps,
  null
)(UserList);

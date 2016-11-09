import React from 'react';
import {connect} from 'react-redux';
import PopularList from './popular_list';
import {requestPopularSongs} from '../../../actions/lists_actions';

const mapStateToProps = ({lists}) => ({
  songs: Object.values(lists.popularSongs)
});

const mapDispatchToProps = dispatch => ({
  requestPopularSongs: () => dispatch(requestPopularSongs())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PopularList);

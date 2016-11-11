import React from 'react';
import {connect} from 'react-redux';
import SearchList from './search_list';

const mapStateToProps = ({lists}) => ({
  songs: Object.values(lists.searchedSongs)
});

export default connect(
  mapStateToProps,
  null
)(SearchList);

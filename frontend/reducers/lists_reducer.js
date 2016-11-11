import {
  RECEIVE_NEW_SONGS,
  RECEIVE_POPULAR_SONGS,
  RECEIVE_PLAYED_SONGS,
  RECEIVE_SEARCH_SONGS,
  RECEIVE_USER_SONGS
} from  '../actions/lists_actions';

  import merge from 'lodash/merge';

const _defaultState = {
  newSongs: {},
  popularSongs: {},
  playedSongs: {},
  searchedSongs: "",
  userSongs: ""
};

const ListsReducer = (state = _defaultState, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_NEW_SONGS:
      return merge({}, state, {newSongs: action.songs});
    case RECEIVE_POPULAR_SONGS:
      return merge({}, state, {popularSongs: action.songs});
    case RECEIVE_PLAYED_SONGS:
      return merge({}, state, {playedSongs: action.songs});
    case RECEIVE_SEARCH_SONGS:
      return merge({}, state, {searchedSongs: action.songs});
    case RECEIVE_USER_SONGS:
      return merge({}, state, {userSongs: action.songs});
    default:
      return state;
  }
};

export default ListsReducer;

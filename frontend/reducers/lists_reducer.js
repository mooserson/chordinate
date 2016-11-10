import {
  RECEIVE_NEW_SONGS,
  RECEIVE_POPULAR_SONGS,
  RECEIVE_PLAYED_SONGS
} from  '../actions/lists_actions';

  import merge from 'lodash/merge';

const _defaultState = {
  newSongs: {},
  popularSongs: {},
  playedSongs: {},
  searchSongResults: {}
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
    default:
      return state;
  }
};

export default ListsReducer;

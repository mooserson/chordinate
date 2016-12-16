import {
  RECEIVE_NEW_SONGS,
  RECEIVE_POPULAR_SONGS,
  RECEIVE_PLAYED_SONGS,
  RECEIVE_SEARCH_SONGS,
  RECEIVE_USER_SONGS,
  RECEIVE_USER_SONGS_ERRORS
} from  '../actions/lists_actions';

import {
  RECEIVE_LIKE
} from '../actions/songs_actions';

import merge from 'lodash/merge';

const _defaultState = {
  newSongs: {},
  popularSongs: {},
  playedSongs: {},
  searchedSongs: "",
  userSongs: "",
  errors: ""
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
    case RECEIVE_USER_SONGS_ERRORS:
      return merge({}, state, {errors: action.errors});
    case RECEIVE_LIKE:
      let newState = merge({}, state);
      let lists = [
        "newSongs", "popularSongs", "searchedSongs", "userSongs"
      ];
      lists.forEach(list => {
        if(newState[list].length > 0){
          newState[list].forEach((song,idx) => {
            if(action.liked[1] === String(song.id)){
              newState[list][idx].liked = action.liked[0];
            }
          });
        }
      });
      return newState;
    default:
      return state;
  }
};

export default ListsReducer;

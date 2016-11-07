import {
  START_RECORDING,
  STOP_RECORDING,
  ADD_NOTES,
  RECEIVE_SONG,
  REMOVE_SONG,
  UPDATE_TITLE
} from '../actions/current_song_actions';

import {
  RECEIVE_LIKE
} from '../actions/songs_actions';

import merge from 'lodash/merge';

const CurrentSongReducer = (state = {title: ""}, action) => {
  Object.freeze(state);
  let newState;
  switch (action.type) {
    case START_RECORDING:
      return {
        userId: action.userId,
        title: action.title || 'Untitled',
        slices: [],
        timeStart: action.timeNow
      };
    case STOP_RECORDING:
      return merge({}, state,{
        slices: [
          ...state.slices,
          { notes: [], timeSlice: action.timeNow - state.timeStart }
        ]
      });
    case ADD_NOTES:
      return merge({}, state, {
        slices: [
          ...state.slices, {
            notes: action.notes,
            timeSlice: action.timeNow - state.timeStart
          }
        ]
      });
    case UPDATE_TITLE:
      newState =  merge({}, state, { title: action.title });
      return newState;
    case RECEIVE_SONG:
      let song = action.song;
      return action.song;
    case REMOVE_SONG:
      return {};
    case RECEIVE_LIKE:
      newState = merge({}, state, {liked: action.liked});
      return newState;
    default:
      return state;
  }
};


export default CurrentSongReducer;

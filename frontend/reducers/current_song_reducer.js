import {
  START_RECORDING,
  STOP_RECORDING,
  ADD_NOTES,
  RECEIVE_SONG,
  REMOVE_SONG
} from '../actions/current_song_actions';

import merge from 'lodash/merge';

const CurrentSongReducer = (state = {}, action) => {
  Object.freeze(state);
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
    case RECEIVE_SONG:
      let song = action.song;
      return action.song;
    case REMOVE_SONG:
      return {}
    default:
      return state;
  }
};


export default CurrentSongReducer;

import {
  START_RECORDING,
  STOP_RECORDING,
  ADD_NOTES
} from '../actions/current_song_actions';

import merge from 'lodash/merge';

const CurrentSongReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case START_RECORDING:
      return {
        id: null,
        user: action.username,
        title: action.title,
        date: null,
        slices: [],
        timeStart: action.timeNow
      };
    case STOP_RECORDING:
      return merge({}, state,{
        slices: [
          ...state.slices,
          { notes: [], timeSlice: action.timeNow - state.Timestart }
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
    default:
      return state;
  }
};


export default CurrentSongReducer;

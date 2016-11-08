import {
  KEY_PRESSED,
  KEY_RELEASED,
  GROUP_UPDATE
} from '../actions/keys_actions';

import { NOTE_NAMES } from '../util/tones';
import union from 'lodash/union';

const KeysReducer = (state = [], action) => {
  Object.freeze(state);
  const validKey = NOTE_NAMES.includes(action.key);
  const idx = state.indexOf(action.key);
  switch (action.type) {
    case KEY_PRESSED:
      if (validKey && idx === -1) {
        return [
          ...state,
          action.key
        ];
      } else {
        return state;
      }
    case KEY_RELEASED:
      console.log('key released');
      if (idx !== -1) {
        return [
          ...state.slice(0, idx),
          ...state.slice(idx + 1)
        ];
      } else {
      return state;
      }
    case GROUP_UPDATE:
      return [
        ...action.notes
      ];
    default:
      return state;
  }
};

export default KeysReducer;

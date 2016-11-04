import { combineReducers } from 'redux';
import SessionReducer from './session_reducer';
import KeysReducer from './keys_reducer';
import RecordingReducer from './recording_reducer';
const RootReducer = combineReducers({
  session: SessionReducer,
  keys: KeysReducer,
  recording: RecordingReducer
});

export default RootReducer;

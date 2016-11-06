import { combineReducers } from 'redux';
import SessionReducer from './session_reducer';
import KeysReducer from './keys_reducer';
import isRecordingReducer from './is_recording_reducer';
import isPlayingReducer from './is_playing_reducer';
import CurrentSongReducer from './current_song_reducer';

const RootReducer = combineReducers({
  session: SessionReducer,
  keys: KeysReducer,
  isRecording: isRecordingReducer,
  isPlaying: isPlayingReducer,
  currentSong: CurrentSongReducer
});

export default RootReducer;

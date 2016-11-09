import { combineReducers } from 'redux';
import SessionReducer from './session_reducer';
import KeysReducer from './keys_reducer';
import isRecordingReducer from './is_recording_reducer';
import isPlayingReducer from './is_playing_reducer';
import CurrentSongReducer from './current_song_reducer';
import isSavingReducer from './is_saving_reducer';
import ListsReducer from './lists_reducer';

const RootReducer = combineReducers({
  session: SessionReducer,
  isRecording: isRecordingReducer,
  isPlaying: isPlayingReducer,
  isSaving: isSavingReducer,
  keys: KeysReducer,
  currentSong: CurrentSongReducer,
  lists: ListsReducer
});

export default RootReducer;

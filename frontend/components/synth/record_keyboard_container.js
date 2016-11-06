import {connect} from 'react-redux';
import { keyPressed, keyReleased } from '../../actions/keys_actions';
import {
  startRecording,
  stopRecording,
  addNotes
} from '../../actions/current_song_actions';
import RecordKeyboard from './record_keyboard';

const mapStateToProps = ({ keys, currentSong, isRecording }) => {
  return ({
  keys,
  currentSong,
  isRecording
  });
};

const mapDispatchToProps = dispatch => ({
  keyPressed: key => dispatch(keyPressed(key)),
  keyReleased: key => dispatch(keyReleased(key)),
  addNotes: notes => dispatch(addNotes(notes)),
  startRecording: () => dispatch(startRecording()),
  stopRecording: () => dispatch(stopRecording())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RecordKeyboard);

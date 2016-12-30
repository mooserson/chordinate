import {connect} from 'react-redux';
import { keyPressed, keyReleased } from '../../actions/keys_actions';
import {
  startRecording,
  stopRecording,
  addNotes,
  removeSong
} from '../../actions/current_song_actions';
import RecordKeyboard from './record_keyboard';

const mapStateToProps = ({ keys, currentSong, isRecording, session }) => {
  return ({
  keys,
  currentSong,
  isRecording,
  userId: `${session.currentUser ? session.currentUser.id : null}`,
  username: `${session.currentUser ? session.currentUser.username: null}`
  });
};

const mapDispatchToProps = (dispatch) => ({
  keyPressed: key => dispatch(keyPressed(key)),
  keyReleased: key => dispatch(keyReleased(key)),
  addNotes: notes => dispatch(addNotes(notes)),
  startRecording: id => dispatch(startRecording(id)),
  stopRecording: () => dispatch(stopRecording()),
  removeSong: () => dispatch(removeSong())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RecordKeyboard);

import {connect} from 'react-redux';
import { keyPressed, keyReleased } from '../../actions/keys_actions';
import { addNotes } from '../../actions/current_song_actions';
import KeyboardPrototype from './keyboard_prototype';

const mapStateToProps = ({ keys, currentSong }) => ({
  keys,
  currentSong
});

const mapDispatchToProps = dispatch => ({
  keyPressed: key => dispatch(keyPressed(key)),
  keyReleased: key => dispatch(keyReleased(key)),
  addNotes: notes => dispatch(addNotes(notes))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(KeyboardPrototype);

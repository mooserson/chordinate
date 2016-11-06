import {connect} from 'react-redux';
import {
  startPlaying,
  stopPlaying
} from '../../actions/is_playing_actions';
import { groupUpdate } from '../../actions/keys_actions';
import { createSong } from '../../actions/current_song_actions';
import SaveKeyboard from './save_keyboard';

const mapStateToProps = ({keys, currentSong, isPlaying, session: {currentUser: {id}}}) => {
  return ({
    keys,
    currentSong,
    isPlaying,
    userId: id
  });
};

const mapDispatchToProps = dispatch => ({
  onPlay: currentSong => {
    dispatch(startPlaying());
    const slices = currentSong.slices;
    const playBackStartTime = Date.now();
    let currNote = 0;
    let timeElapsed;
    let interval = setInterval(() => {
      if (currNote < slices.length) {
        timeElapsed = Date.now() - playBackStartTime;
        if (timeElapsed >= slices[currNote].timeSlice) {
          dispatch(groupUpdate(slices[currNote].notes));
          currNote++;
        }
      } else {
        clearInterval(interval);
        dispatch(stopPlaying());
      }
    }, 1);
  },
  createSong: (song, userId) => dispatch(createSong(song, userId))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SaveKeyboard);

import {connect} from 'react-redux';
import {
  startPlaying,
  stopPlaying
} from '../../actions/is_playing_actions';
import { groupUpdate } from '../../actions/keys_actions';
// import { createSong } from
import SaveKeyboard from './save_keyboard';

const mapStateToProps = ({keys, currentSong, isPlaying}) => {
  return ({
    keys,
    currentSong,
    isPlaying
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

});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SaveKeyboard);

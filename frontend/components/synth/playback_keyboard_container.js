import { connect } from 'react-redux';
import {
  startPlaying,
  stopPlaying
} from '../../actions/is_playing_actions';
import { groupUpdate } from '../../actions/keys_actions';
import {
  createLike,
  destroyLike,
  createPlay } from '../../actions/songs_actions';
import { requestSong,
  deleteSong } from '../../actions/current_song_actions';
import PlaybackKeyboard from './playback_keyboard';

const mapStateToProps = ({keys, currentSong, isPlaying, session}) => {
  return ({
    keys,
    currentSong,
    isPlaying,
    userId: `${session.currentUser ? session.currentUser.id : null}`,
    username: `${session.currentUser ? session.currentUser.username : null}`
  });
};

const mapDispatchToProps = dispatch  => {
  var interval;
  return ({
    onPlay: currentSong => {
      dispatch(startPlaying());
      const slices = currentSong.slices;
      const playBackStartTime = Date.now();
      let currNote = 0;
      let timeElapsed;
        interval = setInterval(() => {
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
    deleteSong: id => dispatch(deleteSong(id)),
    createLike: (userId, songId) => dispatch(createLike(userId, songId)),
    destroyLike: (userId, songId) => dispatch(destroyLike(userId, songId)),
    createPlay: (userId, songId) => dispatch(createPlay(userId, songId)),
    stopPlayback: () => {
      clearInterval(interval);
      dispatch(stopPlaying());
      dispatch(groupUpdate(""));
    }
  });
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PlaybackKeyboard);

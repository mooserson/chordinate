import { CREATE_SONG, receiveSong } from '../actions/current_song_actions';
import { createSong } from '../util/current_song_api_util';
import { hashHistory } from 'react-router';


export default ({getState, dispatch}) => next => action => {

  const receiveSongSuccessCallback = data => {
    dispatch(receiveSong(data));
    hashHistory.push(`/home/songs/${data.id}`);
  };

  switch (action.type) {
    case CREATE_SONG:
      let song = action.song;
      let newSong = {
        user_id: song.userId,
        title: song.title,
        slices: JSON.stringify(song.slices)
      };
      createSong(newSong, receiveSongSuccessCallback);
      return next(action);
    default:
      return next(action);
  }
};

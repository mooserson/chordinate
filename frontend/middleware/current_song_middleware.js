import { CREATE_SONG } from '../actions/current_song_actions';

import { createSong } from '../util/current_song_api_util';

export default ({getState, dispatch}) => next => action => {
  const successCallback = data => console.log(data);
  switch (action.type) {
    case CREATE_SONG:
      let song = action.song;
      let newSong = {
        user_id: song.userId,
        title: song.title,
        slices: JSON.stringify(song.slices)
      };
      createSong(newSong, successCallback);
      return next(action);
    default:
      return next(action);
  }
};

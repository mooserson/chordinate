import {
  CREATE_SONG,
  REQUEST_SONG,
  DELETE_SONG,
  receiveSong,
  removeSong } from '../actions/current_song_actions';
import {
  createSong,
  fetchSong,
  destroySong } from '../util/current_song_api_util';
import { createPlay } from '../actions/songs_actions';
import { stopSaving } from '../actions/is_saving_actions';
import { hashHistory } from 'react-router';


export default ({getState, dispatch}) => next => action => {

  const receiveNewSongSuccessCallback = data => {
    dispatch(receiveSong(data));
    dispatch(stopSaving());
    hashHistory.push(`/home/songs/${data.id}`);
  };
  const receiveSongSuccessCallback = data => {
    dispatch(receiveSong(data));
    dispatch(createPlay(data.id));
  };
  const receiveSongErrorCallback = () => {
    hashHistory.push('/home');
  };
  const deleteSongSuccessCallback = () => {
    dispatch(removeSong());
  };

  switch (action.type) {
    case CREATE_SONG:
      let song = action.song;
      let newSong = {
        user_id: action.userId,
        title: song.title,
        slices: JSON.stringify(song.slices)
      };
      createSong(newSong, receiveNewSongSuccessCallback);
      return next(action);
    case REQUEST_SONG:
      fetchSong(
        action.id,
        receiveSongSuccessCallback,
        receiveSongErrorCallback
      );
      return next(action);
    case DELETE_SONG:
      destroySong(action.id, deleteSongSuccessCallback);
      return next(action);
    default:
      return next(action);
  }
};

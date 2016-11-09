export const REQUEST_NEW_SONGS = "REQUEST_NEW_SONGS";
export const RECEIVE_NEW_SONGS = "RECEIVE_NEW_SONGS";
export const REQUEST_POPULAR_SONGS = "REQUEST_POPULAR_SONGS";
export const RECEIVE_POPULAR_SONGS = "RECEIVE_POPULAR_SONGS";
export const REQUEST_PLAYED_SONGS = "REQUEST_PLAYED_SONGS";
export const RECEIVE_PLAYED_SONGS = "RECEIVE_PLAYED_SONGS";

export const requestNewSongs = () => ({
  type: REQUEST_NEW_SONGS
});

export const receiveNewSongs = songs => ({
  type: RECEIVE_NEW_SONGS,
  songs
});

export const requestPopularSongs = () => ({
  type: REQUEST_POPULAR_SONGS
});

export const receivePopularSongs = songs => ({
  type: RECEIVE_POPULAR_SONGS,
  songs
});

export const requestPlayedSongs = () => ({
  type: REQUEST_PLAYED_SONGS
});

export const receivePlayedSongs = songs => ({
  type: RECEIVE_PLAYED_SONGS,
  songs
});

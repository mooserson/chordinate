export const CREATE_LIKE = "CREATE_LIKE";
export const RECEIVE_LIKE = "RECEIVE_LIKE";
export const DESTROY_LIKE = "DESTROY_LIKE";
export const CREATE_PLAY = "CREATE_PLAY";
export const REQUEST_NEW_SONGS = "REQUEST_NEW_SONGS";

export const createLike = (userId, songId) => ({
  type: CREATE_LIKE,
  userId,
  songId
});

export const destroyLike = (userId, songId) => ({
  type: DESTROY_LIKE,
  userId,
  songId
});

export const receiveLike = liked => ({
  type: RECEIVE_LIKE,
  liked
});

export const createPlay = (songId) => ({
  type: CREATE_PLAY,
  songId
});

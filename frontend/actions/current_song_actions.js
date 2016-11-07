export const START_RECORDING = "START_RECORDING";
export const STOP_RECORDING = "STOP_RECORDING";
export const ADD_NOTES = "ADD_NOTES";
export const CREATE_SONG = "CREATE_SONG";
export const RECEIVE_SONG = "RECEIVE_SONG";
export const REQUEST_SONG = "REQUEST_SONG";
export const DELETE_SONG = "DELETE_SONG";
export const REMOVE_SONG = "REMOVE_SONG";

export const startRecording = () => ({
  type: START_RECORDING,
  userId: window.currentUser.id,
  timeNow: Date.now()
});

export const stopRecording = () => ({
  type: STOP_RECORDING,
  timeNow: Date.now()
});

export const addNotes = (notes) => ({
  type: ADD_NOTES,
  timeNow: Date.now(),
  notes: notes
});

export const createSong = (song, userId) => ({
  type: CREATE_SONG,
  song,
  userId
});

export const requestSong = id => ({
	type: REQUEST_SONG,
	id
});

export const receiveSong = song => ({
	type: RECEIVE_SONG,
	song
});

export const deleteSong = id => ({
	type: DELETE_SONG,
	id
});

export const removeSong = () => ({
  type: REMOVE_SONG
});

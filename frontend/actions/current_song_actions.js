export const START_RECORDING = "START_RECORDING";
export const STOP_RECORDING = "STOP_RECORDING";
export const ADD_NOTES = "ADD_NOTES";

export const startRecording = () => ({
  type: START_RECORDING,
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

export const START_LOADING_DISCOVER = "START_LOADING_DISCOVER";
export const STOP_LOADING_DISCOVER = "STOP_LOADING_DISCOVER";
export const START_LOADING_KEYBOARD = "START_LOADING_KEYBOARD";
export const STOP_LOADING_KEYBOARD = "STOP_LOADING_KEYBOARD";

export const startLoadingDiscover = () => ({
  type: START_LOADING_DISCOVER
});

export const stopLoadingDiscover = () => ({
  type: STOP_LOADING_DISCOVER
});

export const startLoadingKeyboard = () => ({
  type: START_LOADING_KEYBOARD
});

export const stopLoadingKeyboard = () => ({
  type: STOP_LOADING_KEYBOARD
});

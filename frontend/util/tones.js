const makeTones = keys => {
  let tones = {};
  keys.forEach((key, idx) => {
    tones[key] = 349.23 * Math.pow(2, (idx/12));
  });
  return tones;
};
export const NOTE_NAMES = [
  'a', //f
  'w', //f#
  's', //g
  'e', //g#
  'd', //a
  'r', //a#
  'f', //b
  'j', //c
  'i', //c#
  'k', //d
  'o', //d#
  'l', //e
  'p', //e#
  ';', //f
];

export const NUM_ROW_KEYS = [
  '`',
  '1',
  '2',
  '3',
  '4',
  '5',
  '6',
  '7',
  '8',
  '9',
  '0',
  '-',
  '=',
  'Backspace'
];

export const TAB_ROW_KEYS = [
  'Tab',
  'q',
  'w',
  'e',
  'r',
  't',
  'y',
  'u',
  'i',
  'o',
  'p',
  '[',
  ']',
  '\\'
];

export const CAPS_ROW_KEYS = [
  'Capslock',
  'a',
  's',
  'd',
  'f',
  'g',
  'h',
  'j',
  'k',
  'l',
  ';',
  '\''
];

export const SHIFT_ROW_KEYS = [
  'Shift',
  'z',
  'x',
  'c',
  'v',
  'b',
  'n',
  'm',
  ',',
  '.',
  '/',
  'Shift'
];

export const FN_ROW_KEYS = [
  'none',
  'Control',
  'Alt',
  'Meta',
  'Space',
  'Meta',
  'Alt'
];

export const ARROW_KEYS = [
  'ArrowUp',
  'ArrowDown',
  'ArrowLeft',
  'ArrowRight'
];


export const TONES = makeTones(NOTE_NAMES);

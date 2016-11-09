const makeTones = keys => {
  let tones = {};
  keys.forEach((key, idx) => {
    tones[key] = 329.63 * Math.pow(2, (idx/12));
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

export const TONES = makeTones(NOTE_NAMES);

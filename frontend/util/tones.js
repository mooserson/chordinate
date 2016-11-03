const makeTones = keys => {
  let tones = {};
  keys.forEach((key, idx) => {
    tones[key] = 440 * Math.pow(2, (idx/12));
  });
  return tones;
};
export const NOTE_NAMES = [
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
  "'"
];

export const TONES = makeTones(NOTE_NAMES);

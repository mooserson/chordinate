
const ctx = new (window.AudioContext || window.webkitAudioContext)();

const filter = ctx.createBiquadFilter();
filter.type = "lowpass";
filter.frequency.value = 5000;
filter.connect(ctx.destination);

export const setFilterFrequency = (freq) => {
  filter.frequency.value = freq;
};

export const getFilterFrequency = () => filter.frequency.value;

const WAVE_TYPES = ["sawtooth", "square", "triangle", "sine"];
let currentWaveType = "sawtooth";
const oscillators = [];

export const setWaveType = (type) => {
  currentWaveType = type;
  oscillators.forEach(osc => { osc.type = type; });
};

export const getWaveType = () => currentWaveType;

export const cycleWaveType = (direction) => {
  const idx = WAVE_TYPES.indexOf(currentWaveType);
  const next = (idx + direction + WAVE_TYPES.length) % WAVE_TYPES.length;
  setWaveType(WAVE_TYPES[next]);
  return currentWaveType;
};

const heldKeys = {};
const FILTER_STEP = 1.03;
const FILTER_INTERVAL = 40;

const updateDisplay = () => {
  $('.synth-filter .synth-control-value').text(`${Math.round(filter.frequency.value)} Hz`);
  $('.synth-wave .synth-control-value').text(currentWaveType);
};

export const handleArrowDown = (key) => {
  if (key === "ArrowUp" || key === "ArrowDown") {
    if (heldKeys[key]) return true;
    const step = key === "ArrowUp"
      ? () => { filter.frequency.value = Math.min(filter.frequency.value * FILTER_STEP, 12000); }
      : () => { filter.frequency.value = Math.max(filter.frequency.value / FILTER_STEP, 200); };
    step();
    updateDisplay();
    heldKeys[key] = setInterval(() => { step(); updateDisplay(); }, FILTER_INTERVAL);
    return true;
  }
  if (key === "ArrowRight") {
    cycleWaveType(1);
    updateDisplay();
    return true;
  }
  if (key === "ArrowLeft") {
    cycleWaveType(-1);
    updateDisplay();
    return true;
  }
  return false;
};

export const handleArrowUp = (key) => {
  if (heldKeys[key]) {
    clearInterval(heldKeys[key]);
    delete heldKeys[key];
  }
};

const createOscillator = (freq) => {
  const osc = ctx.createOscillator();
  osc.type = currentWaveType;
  osc.frequency.value = freq;
  osc.detune.value = 0;
  osc.start(ctx.currentTime);
  oscillators.push(osc);
  return osc;
};

const createGainNode = () => {
  const gainNode = ctx.createGain();
  gainNode.gain.value = 0;
  gainNode.connect(filter);
  return gainNode;
};

class Note {
  constructor(freq) {
    this.oscillatorNode = createOscillator(freq);
    this.gainNode = createGainNode();
    this.oscillatorNode.connect(this.gainNode);
  }

  start() {
    if (ctx.state === "suspended") ctx.resume();
    this.gainNode.gain.value = 0.3;
  }

  stop() {
    this.gainNode.gain.value = 0;
  }
}

export default Note;

import * as core from '@strudel/core';
const pat = core.s('bd');
const toTest = ['distort', 'shape', 'crush', 'bits', 'squiz', 'hp', 'hpf', 'lp', 'lpf', 'room', 'delay', 'detune', 'attack', 'att', 'release', 'rel', 'pan', 'q', 'bandq', 'res', 'resonance'];
const valid = toTest.filter(m => typeof pat[m] === 'function');
console.log('VALID_STRUDEL:', valid.join(', '));
const invalid = toTest.filter(m => typeof pat[m] !== 'function');
console.log('INVALID_STRUDEL:', invalid.join(', '));

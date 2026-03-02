import * as core from './node_modules/@strudel/core/dist/index.mjs';
const p = core.s('bd');
console.log(Object.keys(p).filter(k => typeof p[k] === 'function').join(', '));

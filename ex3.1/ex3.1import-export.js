import * as nonono from './module.mjs'
 import fs from 'fs';
/**
 * import:
 *   Lexical; will be sorted to the top of the current file.
 *   Only can be called in the beginning.
 *   Able to load partially (saving a lot of memories).
 * require:
 *   Non-lexical; stay wherever it called.
 *   Can be called anytime.
 *   Not able to load partially.
 */
console.log(nonono.name);
console.log(nonono.maaaaaa());
console.log(nonono.moooooooooooooooo());
console.log(nonono.adeeeeeeeeeeeeeeeeeeb());
fs.appendFileSync('module.mjs','//////////////////////////////////////////////////////');








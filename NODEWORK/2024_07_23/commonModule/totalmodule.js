//totalmodule.js
function total(fst, ...arr) {
  return arr.reduce((total,ele) => (total += ele), fst);
}

module.exports = total;


/*
[모듈비교]
commonJS module                          es module

export
---------------------
function ma(){}                      
function mb(){}                      

module.exports = ma
module.exports = {ma, mb}                export { ma, mb }

                                         export function ma(){}
                                         export function mb(){}
import 
---------------------
let ma = require('./mymodule.js')         import ma from ''./mymodule.js''
let {ma, mb} = require('./mymodule.js')   import {ma, mb} from ''./mymodule.js''

*/

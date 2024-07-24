//usetotal2.js        //java ==> import a.b.*
//import total from "./totalmodule.js";


/*
[기존]
import {total, findNum, filterNum} from "./totalmodule.js";
console.log('합계구하기(reduce) : ', total(10,20,30,40));
console.log('합계구하기(reduce) : ', total(5,6,7));
let arr = [1,2,3,10];
console.log('같은 숫자 찾기(find) : ', findNum(1,arr));
console.log('보다 큰수 찾기(filter) : ', filterNum(1,arr));
*/


//[변경]
import * as mymath from "./totalmodule.js"; // {total, findNum, filterNum}
console.log('합계구하기(reduce) : ', mymath.total(10,20,30,40));
console.log('합계구하기(reduce) : ', mymath.total(5,6,7));
let arr = [1,2,3,10];
console.log('같은 숫자 찾기(find) : ', mymath.findNum(1,arr));
console.log('보다 큰수 찾기(filter) : ', mymath.filterNum(1,arr));




/*
객체분해와 비슷한 개념
import {total, findNum, filterNum} from "./totalmodule.js"
  =>
import * as mymath from "./totalmodule.js";

* 은 {total, findNum, filterNum} 총칭

*/

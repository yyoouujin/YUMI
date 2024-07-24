//usetotal.js

/*
// 1) export default function
  //default 함수는 중괄호 없이 바로 사용가능!
import total from "./totalmodule.js";
console.log(total(10,20,30,40));
console.log(total(5,6,7));

*/


/*
// 2) export function
  //total 함수는 default 라서 중괄호 없이 사용! (default 는 하나만 가능)
  //default 가 아닌 함수는 중괄호 내에서 사용!
import total, {findNum} from "./totalmodule.js";
console.log(total(10,20,30,40));
console.log(total(5,6,7));
let arr = [1,2,3,10];
console.log(findNum(1,arr));
*/

//3) export function 여러개
  //default 가 아닌 함수는 중괄호 내에서 사용!
import {total, findNum, filterNum} from "./totalmodule.js";
console.log('합계구하기(reduce) : ', total(10,20,30,40));
console.log('합계구하기(reduce) : ', total(5,6,7));
let arr = [1,2,3,10];
console.log('같은 숫자 찾기(find) : ', findNum(1,arr));
console.log('보다 큰수 찾기(filter) : ', filterNum(1,arr));




/*
improt 함수이름 from 파일명
(파일명에 .js 생략가능)

모듈 ?
  :  js 파일단위로 구성
  (ES Module -> async 없이 await 사용가능!)

command prompt로 창 변경 후 사용
1) npm init -> 엔터광클
2) package.json 파일에 "type" : "module", 추가

*/

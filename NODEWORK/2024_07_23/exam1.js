// exam1.js
//spread 연산자 실습
let arr1 = [ 50,60,70 ];
let arr2 = [ 20,30,40 ];

let arr3 = [...arr1, arr2];
console.log('arr3 = ', arr3);
console.log('배열 내 배열에 접근 : ',arr3[3][0]);
//50출력이 되도록
let num1 = arr3[0];
console.log(num1);


let arr4 = [arr1, ...arr2];
console.log('arr4 = ', arr4);
//50출력
let num2 = arr4[0][0];
console.log(num2);
//20출력
let num2_2 = arr4[1];
console.log(num2_2);

let arr5 = [arr1, ...arr2];
console.log('arr5 = ',arr5);
//50 출력
let num3 = arr5[0][0];
console.log(num3);
//20 출력
let num4 = arr5[1];
console.log(num4);

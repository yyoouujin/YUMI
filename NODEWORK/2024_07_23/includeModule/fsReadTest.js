/*
import fs from 'fs'; 
시스템이 제공하는 모듈명을 적을땐 경로 필요없다 '/fs' 아니다!
*/


/*
// 1) 비동기 함수 : readFile
import fs from 'fs'; 
fs.readFile('c:temp/yujin2.js', 'utf8', (err, data) => { 
  if(err) {   throw err;  }  
  console.log(data); 
})
console.log('이건 비동기라 같이 나와용! :  \{^_^}/ mooyaho!');
*/


/*
// 2) 동기 함수 : readFileSync
import fs from 'fs'; 
let data = fs.readFileSync('c:temp/yujin2.js', 'utf8');
console.log(data);
console.log('이건 동기라 나중에 나와용! :  \{^_^}/ hi!');
*/


/*
node.js 사이트 내에서 메소드 확인가능!
https://nodejs.org/docs/latest/api/fs.html#filehandlereadfileoptions -> readFile 메소드 확인가능
->
options <Object> | <string>
encoding <string> | <null> Default: null

옵션, 인코딩 타입 확인!
*/
let data2 = fs.readFileSync('c:temp/yujin2.js');
console.log(data2.toString());
console.log('이건 동기라 나중에 나와용! :  \{^_^}/ hi!');




/*
##파일
node : fs (=filesystem 의 약자)
  ->
  node의 모든 함수는 기본적으로 비동기! : fs.readFile()
  동기식으로 처리하고 싶으면 fs.readFileSync()사용

java : new File()
  ->
  이클립스 : new java Project (review)

*/

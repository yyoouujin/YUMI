//processTest.js
//명령행 인수

import { argv, env } from 'node:process'; 

argv.forEach((val, index) => { 
console.log(`${index}: ${val}`); 
});

//환경변수
console.log('환경변수', env.path);
console.log('환경변수', env);

// for(let i of env) {
//   console.log(i);
// }




/*
npm init 입력 후 광클
package.json 파일 생성
  -> json 파일 내 ("type" : "module",) 추가

##
명령행 인수 ?
  : 콘솔창에서 프로그램을 실행시킬때 프로그램에 인수 값을 인가하는 것


[환경변수]

1)
> node processTest.js 10 20 30
process.argv
process.env

2)
System.getenv() -> 자바에서 환경변수를 가져오는방법
> java 클래스 10 20

class 클래스명 {
  public static void main(String[] argv) {
    System.getenv()
    System.exit()
  }
}
*/




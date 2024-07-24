//objectRetterial.js
//객체상수
let username = 'hello';
let temp = ` `;
let getSleep = function(){};
let obj2 = { name:'chae', 
            hobby:[], 
            addr:{}, 
            getName : function(){},
            getSleep, //변수가 선언되어 있다면 함수도 생략가능!
            username //변수명과 필드명이 일치한다면 생략 가능(축약형)
           };
           

let obj = { username, 
            hobby:['watching UFC', 'playing Game'], 
            addr:{ zip:50001, si:'대구' }, 
            getSleep
           };

//객체구조분해 : 기존 필드명과 동일해야함
  // let addr = obj.addr;
  // let hobby = obj.hobby;
let {addr, hobby} = obj;
console.log(addr, hobby);

//배열구조분해(... rest 연산자) 
let score = [90,80,100,50,70];
let [fst, snd, thd,  ...rest] = score; //...:나머지 연산자
//[변수명, 변수명, ... 변수명] : 해당 변수명에 차례대로 값이 들어가다가 ... 이후론 나머지 값들이 모두 들어간다
console.log(fst);
console.log(snd);
console.log(thd);
console.log(rest);

// 배열복사 (spread 연산자)
  // 1) 배열 얕은복사 (객체 주소만 참고) : 기존 배열도 함께 변경되는 것 확인
let copyScore = score;
copyScore[0] = 10; 
console.log('얕은복사', copyScore);
console.log('기존배열도 변경',score);
  // 2) 배열 깊은복사 : 배열을 하나하나 풀어서 복사
copyScore = [...score];
copyScore[0] = 40;
console.log('깊은복사',copyScore);
console.log('기존배열은 유지',score);
  //+) 
  copyScore = [...score, ...score]; //두개의 배열을 합치는것도 가능!


//객체복사 (spread 연산자)
  // 1) 객체 얕은복사
let emp = {username : 'choi', dept:'개발', sal:5000};
let copyEmp = emp;
copyEmp.sal = 1000;
console.log(emp, copyEmp);

  // 2) 객체 깊은복사 : 객체를 하나하나 풀어서 복사
//let deepCopyEmp = {...emp};
//deepCopyEmp.sal = 5;
// -> 아래처럼 줄여서 가능!
let deepCopyEmp = {...emp, dept:'부서명도바꿀게', sal : 5};
console.log(emp, deepCopyEmp);

//구조분해 시 해당 필드의 값이 들어온다
let {dept, sal} = emp;
console.log('구조분해 : ',dept, sal);


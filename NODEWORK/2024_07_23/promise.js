//promise.js
//비동기 처리

/*
//setInterval : 반복실행
setInterval

//setTimeout : 한번만 실행
setTimeout( function(){ 
  console.log("time out!"); 
}, 4000 ); //4초 뒤 해당 함수를 실행
*/



/*
Promise : 해당 내용이 끝나고 나면 반드시 호출해줄게!(약속)
promise(정상 실행 시 호출할 함수 : resolve, 실패 시 호출할 함수 : reject)
*/
function delay(){
  return new Promise( (resolve, reject) => {
    setTimeout( function(){ 
      resolve("time out!"); 
    }, 4000 );
  } );
} //end of delay 함수

//then 사용
delay().then( result => console.log('then : ', result) );

//then -> await 로 바꿔볼게
// .then => await 가 된다 (await 는 async 함수와 함께 써야한다!)
  // 1) 익명함수 사용
let result = async function(){ return await delay(); }
console.log('익명함수 : ', result());
  // 2) 이름있는 함수 -> 호출
async function delayAwait() {
  let result = await delay(); //resolve 로 넘어온 값이 result로 들어가게된다
  console.log('이름있는함수 : ', result);
}
delayAwait();


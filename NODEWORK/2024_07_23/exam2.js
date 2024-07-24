//promise 실습
let num1 = 10;
let num2 = 15;
let total = 14;

//두 수의 합이 total 이 맞으면 resolve 아니면 reject
function numSum(){
  return new Promise ( (resolve, reject) => { 
    if (total == num1+num2){
      resolve("GG");
    } else {
      reject("NG");
    }
  } );
}
//성공 상태는 then 절에, 실패 상태는 catch로 받을 수 있따
numSum()
.then( result => console.log(result) )
.catch( err => console.log(err) )


//async await로 변경!
//정상 실행일 경우 많이 사용한다, 실패 결과는 catch절을 추가해서 받을 수 있다
async function sumAwait() {
  let result = await numSum().catch(err => err); //numSum이 이행될떄까지 기다림
  console.log(result);
}
sumAwait();


/*
1)
Promise ?
  : 내용은 실행 되었지만 결과는 아직 반환하지 않은 객체
  두개의 인수를 받는다 (reslove : 성공 시 실행할 함수, reject : 실패 시 실행할 함수)
  resolve 반환값에 대해선 then절로 받고, reject 반환값에 대해선 catch() 를 통해 받는다

2)
async / await ?
  : await 를 통해 promise의 반환값을 받아올 수 있다
  then 대신에 await 사용한다고 생각하면 된다
  실패 시 promise 와 동일하게 catch() 를 통해 받는다


+) 꿀팁
node ex까지만치고 Tab 키 누르면 알아서 파일 찾아옴!
*/

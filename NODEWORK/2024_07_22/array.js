/*
  array.map, filter, sort ....
*/

let arr = [ 
          {username:'kim', dept:'개발', sal:2000}, 
          {username:'park', dept:'인사', sal:1000},
          {username:'choi', dept:'개발', sal:1500}
          ];
console.log(arr);
//username 이 park 인 사원 (find)
let findResult = arr.find( (emp) => emp.username == 'park');
console.log('park find : ', findResult);

//1) sal 1500 이상인 사원 조회 filter
let sal1500 = []
arr.filter( elem =>  {
  if (elem.sal >= 1500){
    sal1500.push(elem);
  }
});
console.log('sal > 1500 : ', sal1500);

let filterResult = arr.filter( ele => ele.sal >= 1500);
console.log('sal > 1500 : ', filterResult);


//2) 급여 오름차순으로 정렬 sort (파괴함수, return 값이 없다)
arr.sort( (a, b) => a.sal - b.sal);
//console.log("sal sort : ", arr);
  //2-1) 급여 내림차순으로 정렬 시
  //arr.sort( (a, b) => a.sal - b.sal);
  
  //2-2) 급여 -> username 오름차순 (리턴 값은 숫자로 들어가야한다)
    //삼항연산자 사용
  arr.sort( (a, b) => a.username == b.username ? 0 : a.username > b.username ? 1 : -1 );
    //if 사용
  arr.sort((a,b) => {
                      if(a.username==b.username) return 0
                      else if (a.username > b.username) return 1
                      else return -1;
                    });
                    console.log("sal & name sort : ", arr);

  /*
  arr.sort(sortCompareFunc);

  function sortCompareFunc (a,b) {
    if(a.username==b.username) return 0
    else if (a.username > b.username) return 1
    else return -1;
  }

  let sortCompareFunc(a,b) => {
    if(a.username==b.username) return 0
    else if (a.username > b.username) return 1
    else return -1;
  }
  */
                    

//3) 급여 합계 (reduce) : 중괄호 쓸거면 return 붙여주고, 아니면 그냥 써도된다

let allSal = arr.reduce( (total, emp)=> {
            total += emp.sal;
            return total
            }, 0);
console.log("sal total : ", allSal);

/*
let allSal2 = arr.reduce( (total, emp)=>
              total += emp.sal, 0
              );
console.log("sal total : ", allSal2);
*/

//4) 모든 사원의 급여를 500인상 (map) : return 값으로 새로운 배열을 만든다
//const map1 = array1.map((x) => x * 2);
let mapResult = arr.map( (emp) => {emp.sal += 500; return emp} );
console.log(mapResult);


//5) ['kim', 'choi'만 출력]
let filtermapResult = arr.filter(ele => ele.sal >= 2500).map(ele => ele.username);

console.log("sal > 2500 이상인 사원명 : ",  filtermapResult);

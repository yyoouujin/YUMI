/*
  array.map, filter, sort ....
  filter, reduce 메소드는 원본배열 유지
  map, sort 메소드는 원본배열 파괴
*/
/*
cd NODEWORK
cd 2024_07_22
node array_hw.js

*/

let arr = [ 
    {username:'kim', dept:'개발', sal:2000}, 
    {username:'park', dept:'인사', sal:1000},
    {username:'choi', dept:'개발', sal:1500}
    ];

//1) username 이 park 인 사원 (find)
//let parkEmp = arr.find( ele => {ele.username = 'park'; return ele;});
let parkEmp = arr.find( ele => ele.username = 'park');
console.log('parkEmp : ', parkEmp);

//2) sal 1500 이상인 사원 조회 filter
let overSal = arr.filter( ele => ele.sal >= 1500 );
console.log('sal >= 1500 ', overSal);

//3) 급여 오름차순으로 정렬 sort
/*
첫번째 인자가 두번째 인자보다 작으면 음수를 반환(0보다 작은 수 반환)
-> 첫번째 인수를 두번째 인수보다 앞에 위치시킴
*/
arr.sort( (a,b) => a.sal - b.sal );
console.log(arr);

//4) 급여 합계 (reduce)
/*
reduce : 배열의 여러개의 값을 하나의 값으로 축소해준다 
reduce ( function(누적값, 현재값, 현재인덱스, 원본배열){} , 초깃값 )
    -> 리턴되는 값은 누적값이 리턴된다
    -> 초깃값이 있다면 첫번째 순회 시 누적값으로 쓰인다
*/

let total = arr.reduce( (acc, val) => {
    acc += val.sal;
    return acc;
}, 0 );
console.log('All Sal : ', total);


//5) 모든 사원의 급여를 500인상 (map)
let incSal = arr.map( (ele) => {
    ele.sal += 500;
    return ele;
});
console.log('increase Sal : ', incSal);

    // +) ... -> 펼침연산자
    // map 은 파괴함수! (원본 배열을 변형시킨당)
    let mapResult = arr.map( (emp) => {return {...emp, sal : emp.sal+500}} );
    console.log('새로해봄 : ', mapResult);



//6) 급여가 2500 이상이고, 사원의 이름만 출력 ex) ['kim', 'choi']
let empName = arr.filter( ele => ele.sal >= 2500 ).map( ele => ele.username );
console.log('Emp Name of sal >= 2500 : ', empName);
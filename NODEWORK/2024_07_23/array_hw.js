//filename : array_jw.js
let arr = [
          { stdId:1, kor:90, eng:80 }, //170 
          { stdId:2, kor:50, eng:50 }, //100
          { stdId:3, kor:90, eng:90 }
          ];

// 1) kor + eng 합계순으로 sort
// 리턴값이 0보다 작으면, a가 b보다 앞에 오도록 정렬
arr.sort( (a,b) => (a.kor+a.eng) - (b.kor+b.eng) );
//리턴값이 0보다 작으면, b가 a보다 앞에 오도록 정렬
//arr.sort( (a,b) => (b.kor+b.eng) - (a.kor+a.eng));
console.log('Sort array : ', arr);

/*
sort() ?
    : 배열을 정렬해준다, 기존 배열 유지 (새로운 배열 생성 X)

sort() 함수는 두개의 인자가 넘어온다
    1) 첫번째 인자가 두번째 인자보다 작으면 음수를 반환(0보다 작은 수 반환)
    -> 첫번째 인수를 두번째 인수보다 앞에 위치시킴

    2) 첫번째 인자가 두번째 인자보다 크면 양수를 반환(0보다 큰 수 반환)
    -> 첫번째 인수를 두번째 인수보다 뒤에 위치시킴

    3) 첫번째 인자와 두번째 인자가 같으면 0을 반환
    -> 위치를 변경하지 않는다
*/



// 2) 평균이 60 미만인 학번만 출력 [2]
let filterResult = arr.filter( ele => {
    let avg = (ele.kor + ele.eng)/2;
    if (avg < 60){
        return ele;
    }
} );
console.log('avg < 60 : ', filterResult);

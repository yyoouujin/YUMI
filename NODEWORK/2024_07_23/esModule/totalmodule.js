//totalmodule.js
  // reduce ( (누적값, 현재값), 초깃값)
// export default function total(fst, ...arr) {
//   var result = arr.reduce ( (acc, val)  => {
//     acc += val;
//     return acc;
//   } , fst);
//   return result;
// }



export function findNum(num, arr) {
  return arr.find( ele => ele == num );
}

export function filterNum(num, arr) {
  return arr.filter( (ele) => ele > num );
}

export function total(fst, ...arr) {
  var result = arr.reduce ( (acc, val)  => {
    acc += val;
    return acc;
  } , fst);
  return result;
}

/*
export 자체가 내보낸다는 뜻 = public

*/

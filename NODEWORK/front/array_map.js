const customerData = [
  {
    "id": 10,
    "name": "yjin",
    "email": "test update",
    "phone": "010-1111-1111",
    "adress": null
  },
  {
    "id": 13,
    "name": "채유진",
    "email": "yujin@gmial.com",
    "phone": "010-9483-2184",
    "adress": null
  },
  {
    "id": 14,
    "name": "채유진",
    "email": "yujin@gmial.com",
    "phone": "010-9483-2184",
    "adress": null
  },
  {
    "id": 16,
    "name": "채유진",
    "email": "yujin@gmial.com",
    "phone": "010-9483-2184",
    "adress": null
  },
  {
    "id": 22,
    "name": "나지연",
    "email": "nybeauty@naver.com",
    "phone": "010-1234-5678",
    "adress": null
  },
  {
    "id": 23,
    "name": "김수연",
    "email": "suy2233@naver.com",
    "phone": "010-6670-7387",
    "adress": null
  },
  {
    "id": 26,
    "name": "김수연",
    "email": "suy2233@naver.com",
    "phone": "010-6670-7387",
    "adress": null
  },
  {
    "id": 32,
    "name": "수정짜잔",
    "email": "modifywow",
    "phone": "석류짭짭",
    "adress": "머싯겟당"
  },
  {
    "id": 33,
    "name": "무야호",
    "email": "퀸석류",
    "phone": "삼송빵집",
    "adress": "주소"
  },
  {
    "id": 34,
    "name": "수정",
    "email": "수정",
    "phone": "수정",
    "adress": "수정"
  },
  {
    "id": 35,
    "name": "다들 오점뭐",
    "email": "커피 마싯덩",
    "phone": "chop yjin",
    "adress": "어드레스부르소"
  }
];


//리턴 값을 모아서, 새로운 배열을 만든다
//중괄호가 들어가면 반드시 리턴 써주기
let ids1 = customerData.map((ele) => { return ele.id, ele.name } );
console.log(ids);


let ids = customerData.map((ele) => { 
  a = "<td>" + ele.id + "</td>";
  return a;
  
 } );
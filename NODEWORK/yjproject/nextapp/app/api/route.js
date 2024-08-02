export async function GET(request) {
  //console.log(params);
  return Response.json({ msg:"hello" });
}


/*

api route방식

url:localhost/api/user/choi   ->     /api/user/[userid]/route.js

----------

두번째 인수가 넘겨주는 parameter(params로 받는다)


*/

export async function GET(request, {params}) {
  //console.log(params.userid);
  return Response.json({ userid:params.userid });
}

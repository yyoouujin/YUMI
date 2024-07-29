/*
function Reply( {id, title, writer} ){
  return (
    <div>
      <span>{id}</span>
      <span>{title}</span>
      <span>{writer}</span>
    </div>
  );
}

export default function Replys( {datas} ) {
  const data = datas.map( (ele) => ( <Reply key={ele.id} {...ele} /> ) );
  return data;
}
*/


export default function Replys( {datas} ) {

 const reply = datas.map( (ele) => (
  <div key={ele.id}>
    <span>{ele.id}</span>
    <span>{ele.title}</span>
    <span>{ele.writer}</span>
  </div>
 ) )

  return reply;
}


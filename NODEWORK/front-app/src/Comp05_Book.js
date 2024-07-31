//import './App.css';
import { useState } from "react";
// -> state 함수 쓰기위함

function Header(sdfadfadsf) {
  //console.log(sdfadfadsf);

  /*
  [이벤트 핸들러 만들기]

  1)
  function handlerClick (event) {
    event.preventDefault();
    alert('모야호~');
  }

  2)
  const handlerClick = (event) {
    event.preventDefault();
    alert('모야호~');
  }
  */

  function handlerClick (event) {
    event.preventDefault();
    sdfadfadsf.onChangeMode();
  }

  return(
    <header>
      <h1>
        <a href="/" onClick={handlerClick}>
      {sdfadfadsf.title}</a>
      </h1>
    </header>
  );
}

function Nav({topic, onChangeMode}) {
  //console.log(topic);
  //map 으로 넘어오는 값은 모두 string!

  let lis = topic.map( (ele) => {
    let result = 
    <li key={ele.id}>
      <a id={ele.id} 
        href={"/read/"+ele.id} 
        onClick={(event) => {
        event.preventDefault();
        onChangeMode(Number(event.target.id));
      }}>
      {ele.title}
      </a>
    </li>;
    return result;
  } );

  return (
    <nav>
      <ol>
        {lis}
      </ol>
    </nav>
  );
}

//객체분해 시 이름 똑같은거 찾아가니까 ㄱㅊ다 (애초에 이름이 똑같아야되니까 걱정ㄴ)
function Article({body, title}) { 
  return (
    <article>
      <h2>{title}</h2>
      {body}
    </article>
  );
}


/*
submit -> button 이라면 button 태그 내 onClick={onCreate}
<input type="button" value="Create" onClick={onCreate}></input>
*/
function Create({onCreate}) {
  return (
    <article>
      <h2>Create</h2>
      <form onSubmit={(event)=>{
        event.preventDefault();
        const title = event.target.title.value;
        const body = event.target.body.value;
        onCreate(title, body);
      }}>
        <p>
          <input type="text" name="title" placeholder="title" />
        </p>
        <p>
          <textarea name="body" placeholder="body"></textarea>
        </p>
        <p>
          <input type="submit" value="Create"></input>
        </p>
      </form>
    </article>
  );
}


function Update(props) {
  return (
    <article>
      <h2>Update</h2>
      <form>
        <p>
          <input type="text" name="title" placeholder="title" value={props.title} />
        </p>
        <p>
          <textarea name="body" placeholder="body" value={props.body}></textarea>
        </p>
        <p>
          <input type="submit" value="Update"></input>
        </p>
      </form>
    </article>
  );
}


//<button onClick={() => {mode = 'CREATE';}}>create</button> -> 지역변수라, 이벤트가 먹히지않는다
/*
state 사용 시 import 먼저!(제일 위에): import { useState } from "react";
DB에서 받아오는 데이터 or Form 으로 받는값
배열로 받아온다![변수이름, set 함수]
_id : state 의 id랑 구분하기 위함
=== type과 값을 모두 체크함
*/


export default function Book(props) {

  
  /*
  자바스크립트 값을 넣어줄 땐 {중괄호 안에 넣자!} +) 속성도
  const topics = [
    { id:1, title:'모코코', body:'모코코 is ...' },
    { id:2, title:'기분좋은향기', body:'기분좋은향기 is ...' },
    { id:3, title:'모야호~!', body:'모야호 is ...' }
  ];
  */


  let content;
  let [mode, setMode] = useState('WELCOME');
  //nav클릭 시 유지할 topic
  let [id, setId] = useState(2);
  //p.90
  let [topic, setTopic] = useState([
    { id:1, title:'모코코', body:'모코코 is ...' },
    { id:2, title:'기분좋은향기', body:'기분좋은향기 is ...' },
    { id:3, title:'모야호~!', body:'모야호 is ...' }
  ]);
  let [lastId, setLastId] = useState(4);

  if (mode === 'CREATE') {
    content = <Create onCreate={(_title, _body)=>{
      console.log(_title, _body);
      setTopic([...topic, {id:lastId, title:_title, body:_body}] );
      setLastId(lastId+1);
      //lastId[1](lastId+1);
    }} />;
    
  } else if (mode === 'UPDATE') {
    content = <Update title="등록누르면" body="업데이트떠라!" />;
  } else if (mode === 'WELCOME') {
    content = <>
                <Article title='헤더클릭하면' body='아티클이떠라!' />
                <button onClick={() => {setMode('CREATE');}}>create</button>
              </>;
  } else if (mode === 'READ') {

    let {title,body} = topic.find( (ele) => id === ele.id );

    content = <>
                <Article title={title} body={body} />
                <button onClick={() => {setMode('UPDATE');}}>create</button>
              </>;
  }

  return (
  <div>
    <Header title='이건 prop.헤더' onChangeMode={ function() {{setMode("WELCOME");} } }/>
    <Nav topic={topic} onChangeMode={(_id) => {setMode('READ'); setId(_id);}} />
    {content}
  </div>
  );
}
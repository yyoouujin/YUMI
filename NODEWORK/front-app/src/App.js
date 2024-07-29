import './App.css';
import Toolbar from './Event.js';


/*
이벤트 : https://ko.react.dev/learn/responding-to-events

1) 이벤트 타입은 반드시 camelCase로!
2) 이벤트를 걸 때는, 함수 형식 꼭 맞춰주기!
3) 이벤트를 걸 때는 핸들러 이름만! 호출을 바로 하는게 아니다~


[화살표 함수로 변경!]
export default function Button() {
  
  return (
    <button onClick={() => {alert('You clicked me!')}}>
      Click me
    </button>
  );
}

*/


/*
function Header(props) {
  return (
    <header>
      <h1><a href="/">{props.title}</a></h1>
      <h2 style={{ color: props.color }}>
              <a href="/" onClick={ (event) => { 
          event.preventDefault(); 
          alert('클릭됨');
          props.onChangeMode();
            } }>{title}</a>{props.title}</h2>
    </header>
  );
}
*/



function Header({title, color="pink", onChangeMode}) { //객체분해

  const clickHandler =  (event) => { 
    event.preventDefault(); 
    alert('클릭됨');
    onChangeMode();
    }

  return (
    <header>
      <h2 style={{ color: color }}>
        <a href="/" onClick={clickHandler}>{title}</a>
      </h2>
    </header>
  );
}


/*
function Nav() {
  return (
    <nav>
    <ol>
      <li><a href="/read/1">html</a></li>
      <li><a href="/read/2">css</a></li>
      <li><a href="/read/3">js</a></li>
    </ol>
  </nav>
  );
}
*/

//Nav 태그 반복문 사용
function Nav( {topics} ) { //{props.topics}

  /*
  1) for문
  const lis = [];
  for(let i=0; i<topic.length; i++){
    lis.push(<li>{topic[i].title}</li>);

  2) map
  const lis = topic.map( (ele) => <li>{ele.title} : {ele.body}</li> );
  }
  */

  const lis = topics.map( (ele) => <li>{ele.title}</li> );

  return (
    <nav>
    <ol>
      {lis}
    </ol>
  </nav>
  );
}

/*
function Article1(props) {
  return (
    <article>
      <h2>{props.title}</h2>
      {props.body}
  </article>
  );
}

<Article1 title="Welcome" body="Hello, Web" />
*/


/* 
function Article2( content ) {
  return (
    <article>
      <h2>{content.content.title}</h2>
      {content.content.name} {content.content.body}

  </article>
  );
}
*/

function Article2( {content, fruits} ) {

  const lis = fruits.map( (ele) => <li>{ele}</li>);

  return (
    <article>
      <h2>{content.title}</h2>
      {content.name} {content.body}
      <ul>
        {lis}
      </ul>
  </article>
  );
}

const topic = [
  { id:1, title:'html', body:'html is ...' },
  { id:2, title:'css', body:'css is ...' },
  { id:3, title:'javascript', body:'javascript is ...' }
];


function Avatar({ name, width, height, src }) {
  return (
    <img
      className="avatar"
      src={src}
      alt={name}
      width={width}
      height={height}
    />
  );
}

/*
function Profile( { name, width, height, src } ) {
  return <Avatar name={name} width={width} height={height} src={src}  />;
}
*/
//spread 문법 사용 : Profile의 모든 props를 각각의 이름을 나열하지 않고 사용 가능(매우편함!)
function Profile( props ) {
  return <Avatar {...props}  />;
}


function App() {
  return (
    <div className="App">
      <Header title="Web" onChangeMode={ ()=>{ alert('핸들러 전달'); } } />
      <Nav topics={topic} />
      <Toolbar />
      <Article2 content={ { title:"Welcome", body:"Hello, Web", name:"Tom" } }
      fruits={ ['바나나', '사과', '포도'] } />
      <Profile name="톰" width="100" height="100" src="logo512.png" />
    </div>
  );
}



export default App;

import { FigureCaption } from "react-bootstrap";
import { Routes, Route, Link, NavLink, useParams } from "react-router-dom";

function Home() {
  return (
    <div>
      <h2>Home</h2>
      Home...
    </div>
  );
}


function Topics({contents}) {
  
  var contents = [
    { id: 1, title: "HTML", description: "HTML is.." },
    { id: 2, title: "JS", description: "JS is.." },
    { id: 3, title: "React", description: "React is.." },
  ];

  let lis = contents.map( (ele) => (
    <li><NavLink to={"/topics/" + ele.id}>{ele.title}</NavLink></li>
    ));

  return (
    <div>
      <h2>Topics</h2>
      <ul>{lis}</ul>
      <Routes>
        <Route path="/:topic_id" element={<Topic />}></Route>
      </Routes>
    </div>
  );
}

function Topic() {

  var contents = [
    { id: 1, title: "HTML", description: "HTML is.." },
    { id: 2, title: "JS", description: "JS is.." },
    { id: 3, title: "React", description: "React is.." },
  ];

  const {topic_id} = useParams(); //알아서 parsing 후 잘라서 불러옴!(객체타입)
  const content = contents.find( (ele) => ele.id === Number(topic_id) );


  return (<>topic {topic_id} {content.description}</>);

}
function Contact() {
  return (
    <div>
      <h2>Contact</h2>
      Contact...
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <h1>Hello react router DOM</h1>
      <ul>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/topics">Topics</NavLink></li>
        <li><NavLink to="/contact">Contact</NavLink></li>
      </ul>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/topics/*" element={<Topics />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/*" element={'Not Found'}></Route>

      </Routes>
    </div>
  );
}

export default App;

/*
Route 컴포넌트
 : URL path에 맞는 컴포넌트가 렌더링 됨
-> 
<Route path="url주소정규식" element={컴포넌트}></Route> 
<Route path="/*" element={'Not Found'}></Route> -> url 주소를 찾을 수 없을 때 


Link 컴포넌트 
 : 클릭하면 다른 주소로 이동시키는 컴포넌트. <a> 태그 대신 사용
 브라우저의 주소만 바꿀뿐 페이지를 새로 불러오지는 않음 (컴포넌트만 변경)
-> <li><Link to="/contact">Contact</Link></li>


NavLink 컴포넌트
 : 네비게이션에 사용자가 위치한 곳을 표시
 (class .active 추가 : index.css파일 내)


Nested Routing (중첩 라우팅)
 : 

 useParams() : 파라미터 값 잘라주고, 넘겨주는 Hook

*/

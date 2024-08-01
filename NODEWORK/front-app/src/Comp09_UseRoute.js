import { FigureCaption } from "react-bootstrap";
import { Routes, Route, Link, NavLink, useParams, useRoutes } from "react-router-dom";

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

  const element = useRoutes([
    { path:"/" , element:<Home /> },
    {path:"/topics/*", 
     element:<Topics />
     //,children: [ { path:'/topics/:topic_id', element:<Topic /> }]
      },
    {path:"/contact", element:<Contact />},
    {path:"/*", element:'Not Found'}
  ]);

  return (
    <div className="App">
      <h1>Hello useRoute DOM</h1>
      <ul>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/topics">Topics</NavLink></li>
        <li><NavLink to="/contact">Contact</NavLink></li>
      </ul>
        {element}
    </div>
  );
}

export default App;

/*
useRoutes ?
 : 배열에 객체 형식으로 담아준다
  ([ { path:"/" , element:<Home /> },
    {path:"/topics/*", element:<Topics />},
    {path:"/contact", element:<Contact />},
    {path:"/*", element:'Not Found'} ]);


{path:"/topics/*", element:<Topics />,
children: [ { path: '/:topic_id', element: <Topic /> }] },
중첩 라우트의 경우도 Route에서와 같이 children이라는 property를 사용


 ---- 기존 라우터 -----

      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/topics/*" element={<Topics />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/*" element={'Not Found'}></Route>
      </Routes>


------ 기존 중첩라우터 -----

      <Routes>
        <Route path="/:topic_id" element={<Topic />}></Route>
      </Routes>

*/

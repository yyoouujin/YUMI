
import { NavLink, Route, Routes } from 'react-router-dom';
import './App.css';

import Board from './Board';
import BoardList from "./BoardList";
import BoardInsert from "./BoardInsert";
import BoardInfo from "./BoardInfo";
import BoardUpdate from "./BoardUpdate";


function Header() {
  return (
    <>
    <h1>게시판</h1>
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/boardlist">전체조회</NavLink>
        </li>
        <li>
          <NavLink to="/boardinsert">글 등록</NavLink>
        </li>
      </ul>
      <Routes>
        <Route path="/" element={<Board />}></Route>
        <Route path="/boardlist" element={<BoardList />}></Route>
        <Route path="/boardinsert" element={<BoardInsert />}></Route>
        <Route path="/boardinfo/:no" element={<BoardInfo />}></Route>
        <Route path="/boardupdate/:no" element={<BoardUpdate />}></Route>
      </Routes>
    </>
  );
}

function App() {
  return (
    <div className="App">
        <Header />
    </div>
  );
}

export default App;

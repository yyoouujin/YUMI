import BoardList from "./Comp11_BoardList";
import BoardInfo from "./Comp12_BoardInfo";
import BoardUpdate from "./Comp13_BoardUpdate";
import BoardInsert from "./Comp14_BoardInsert";

import { Routes, Route, NavLink } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

export default function App () {


  return (
    <div>
      <h2>Board Component</h2>
      <ul>
        <li>
          <NavLink to="/boardlist">게시판 조회</NavLink>
        </li>
        <li>
          <NavLink to="/boardinsert">게시글 등록</NavLink>
        </li>
      </ul>
      <Routes>
        <Route path="/boardlist" element={<BoardList />}></Route>
        <Route path="/boardinfo/:seq" element={<BoardInfo />}></Route>
        <Route path="/boardinsert" element={<BoardInsert />}></Route>
        <Route path="/boardupdate/:seq" element={<BoardUpdate />}></Route>
      </Routes>
    </div>
  );
}
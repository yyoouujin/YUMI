import { Routes, Route, NavLink } from "react-router-dom";
import BoardList from "./Comp11_BoardList";
import BoardInfo from "./Comp12_BoardInfo";
import BoardUpdate from "./Comp13_BoardUpdate";
import BoardInsert from "./Comp14_BoardInsert";
import 'bootstrap/dist/css/bootstrap.min.css';

import { useState } from "react";

export default function App () {

  let [seq, setSeq] = useState();


  return (
    <div>
      <h2>Board Component</h2>
      <ul>
        <li>
          <NavLink to="/boardlist">게시판 전체목록</NavLink>
        </li>
        <li>
          <NavLink to="/boardinsert">게시글 등록</NavLink>
        </li>
      </ul>
      <Routes>
        <Route path="/boardlist" element={<BoardList />}></Route>
        <Route path="/boardinfo/:seq" element={<BoardInfo />}></Route>
        <Route path="/boardupdate/:seq" element={<BoardUpdate />}></Route>
        <Route path="/boardinsert" element={<BoardInsert />}></Route>
      </Routes>
    </div>
  );
}
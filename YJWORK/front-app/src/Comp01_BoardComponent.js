import BoardList from "./Comp02_BoardList";
import BoardInfo from "./Comp03_BoardInfo";
import BoardInsert from "./Comp04_BoardInsert";
import BoardUpdate from "./Comp05_BoardUpdate";

import { Routes, Route, NavLink } from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';

export default function App() {

    return(
        <div>
            <h2>Board Component</h2>
            <ul>
                <li>
                    <NavLink to="/boardList">게시판 조회</NavLink>
                </li>
                <li>
                    <NavLink to="/boardInsert">게시글 등록</NavLink>
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
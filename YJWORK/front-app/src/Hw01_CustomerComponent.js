import CustomerList from "./Hw02_CustomerList";
import CustomerInfo from "./Hw03_CustomerInfo";
import CustomerInsert from './Hw04_CustomerInsert';
import CustomerUpdate from './Hw05_CustomerUpdate';

import { Route, Routes, NavLink } from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';

export default function App() {

    return (
        <div>
            <h2>Customer Component</h2>
            <ul>
                <li>
                    <NavLink to="/customerlist">회원조회</NavLink>
                </li>
                <li>
                    <NavLink to="/customerinsert">회원등록</NavLink>
                </li>
            </ul>
            <Routes>
                <Route path="/customerlist" element={<CustomerList />}></Route>
                <Route path="/customerinfo/:id" element={<CustomerInfo />}></Route>
                <Route path="/customerinsert" element={<CustomerInsert />}></Route>
                <Route path="/customerupdate/:id" element={<CustomerUpdate />}></Route>
            </Routes>
        </div>
    );
}
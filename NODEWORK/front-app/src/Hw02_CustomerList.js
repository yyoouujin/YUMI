import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";


function Customer ({customers}){

    return(
        customers.map( (ele, idx) => {
            let result = (
                <p key={idx}>
                    <b>Id({ele.id}번) : <Link to={"/customerinfo/" + ele.id}>{ele.name}</Link></b>
                </p>
            );
            return result;
        } )
    )
}


export default function CustomerList() {

    let url="http://localhost/customer";
    let [customers, setCustomer] = useState([]);

    function callAPI() {
        fetch(url)
        .then(response => response.json())
        .then(json => {
            setCustomer(json);
        })
    }

    useEffect( () => {
        callAPI();
        return () => {
            console.log("전체조회");
        }
    }, []); 

    return(
        <div>
            <h2>Customer List</h2>
            <Customer customers={customers} />
            <Link to='/customerinsert'><button>회원 등록</button></Link>
        </div>
    );
}

import { useState, useEffect } from "react";


/*
리액트용 부트스트랩 : https://react-bootstrap.netlify.app/
->
설치 후 사용 : npm i react-bootstrap
*/


function Customer ({customers, onClick}) {

  return (
    customers.map( (ele, idx) => {
      let result = (
      <>
        <p key={idx}> id : {ele.id} / name : {ele.name} / phone : {ele.phone} / email : {ele.email} / adress : {ele.adress}
        </p>
        <a id={ele.id} href="/" onClick={(event)=>{
          event.preventDefault();
          onClick(event.target.id);
        }}>선택</a>
        <hr></hr>
      </>
    );
      return result;
    } )
  );

}

export default function CustomerList({onClick}) {
  
  let url = "http://localhost/customer";
  let [customers, setCustomers] = useState([]);

  function callAPI() {

    fetch(url)
    .then(response => response.json())
    .then(json => {
      setCustomers(json);
    })
  }

  useEffect( () => {
    callAPI();
    //CustomerList({customers});
    return () => {
      console.log("실행끗");
    }
  }, []);
  
  return (
    <div>
      <h2>Customer List</h2>
      <Customer customers={customers} onClick={onClick} />
    </div>
  )
  

}
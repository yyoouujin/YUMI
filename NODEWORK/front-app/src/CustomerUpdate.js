import { useState, useEffect } from "react";

export default function CustomerUpdate (props) {


  let [number, setNumber] = useState(10);
  let url = "http://localhost/customer"+number;
  let [customer, setCustomer] = useState([]);

  function Input() {
    return (
      <form onSubmit={(event) => {
        event.preventDefault();
      }}>
        <input type="text" name="customernum" />
        <input type="submit" value="조회" />
      </form>
    )
  }

  function callAPI() {
    if(!props.id){
      return;
    }
    fetch(url)
    .then(response => response.json())
    .then(json => {
      console.log(json);
      setCustomer(json);
    })
  }

  useEffect( () => {
    callAPI();
    return () => {
      console.log('실행끗');
    }
  }, [number] );


  function OneCustomer({customer}) {

    return (
      customer.map ( (ele, idx) => {
        let result = (<p key={idx}> name : {ele.name} / phone : {ele.phone} / email : {ele.email} / adress : {ele.adress} </p>);
        return result;
      } )
    );
  }

  return (
    <div>
      <Input />
      <OneCustomer customer={customer} />
    </div>
  );

}
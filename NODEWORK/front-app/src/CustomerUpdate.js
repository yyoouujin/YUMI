import { useState, useEffect } from "react";
import {Button} from 'react-bootstrap';

export default function CustomerUpdate (props) {

  let [customer, setCustomer] = useState([]);

  let url = "http://localhost/customer/" + props.id;

  function callAPI() {
    if(!props.id) {
      return;
    }
    fetch(url)
    .then(response => response.json())
    .then(json => {
      setCustomer(json[0]);
    })
  }

  useEffect( () => {
    callAPI();
    return () => {
      console.log('전체조회');
    }
  }, [props.id] );

  return (
    <form>
      <div>
        <Button type="reset" className="btn-primary">초기화</Button>
        <Button type="button" className="btn-danger">삭제</Button>
        <Button type="submit" className="btn-success">저장</Button>
      </div>
      <div>
        <input value={customer.id}></input><br></br>
        <input value={customer.email}></input><br></br>
        <input value={customer.phone}></input><br></br>
        <input value={customer.name}></input><br></br>
      </div>
    </form>
  );

}
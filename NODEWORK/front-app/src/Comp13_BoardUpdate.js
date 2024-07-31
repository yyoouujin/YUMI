import { useState, useEffect } from "react";
import {Button} from 'react-bootstrap';
import { useParams } from "react-router-dom";

export default function BoardUpdate () {

  const{seq} = useParams();
  let [board, setBoard] = useState([]);


  let url =  "http://localhost/board/" + seq;

  function callAPI() {

    fetch(url)
    .then(response => response.json())
    .then(json => {
      setBoard(json[0]);
    })
  }

  useEffect( () => {
    callAPI();
    return () => {
      //console.log("수정");
    }
  }, [seq]);


  
  return (
    <form>
      <div>
        <Button type="reset" className="btn-primary">초기화</Button>
        <Button type="button" className="btn-danger">삭제</Button>
        <Button type="submit" className="btn-success">저장</Button>
      </div>
      <div>
        <input type="text" value={board.title}></input><br></br>
        <input type="text" value={board.content}></input><br></br>
        <input type="text" value={board.wdt}></input><br></br>
        <input type="text" value={board.writer}></input><br></br>
      </div>
    </form>
  );
}

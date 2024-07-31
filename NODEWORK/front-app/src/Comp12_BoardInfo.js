import { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import { useNavigate, useParams, Link } from "react-router-dom";
import axios from "axios";

export default function BoardInfo () {

  const navigator = useNavigate(); //링크같은역할
  const{seq} = useParams();
  let [board, setBoard] = useState([]);

  let url = "http://localhost/board/"+ seq;
  
  async function handlerDelete() {
    await axios.delete(url);
    alert('삭제되었습니다');
    navigator("/boardlist");
  }
  

  function callAPI() {
    if(!seq) {
      return;
    }
    fetch(url)
    .then(response => response.json())
    .then(json => {
      setBoard(json[0]);
    })
  }

  
  useEffect( () => {
    callAPI();
    return () => {
      console.log("단건조회");
    }
  }, [seq] );


  return (
    <div>
      <h2>Board Info</h2>
      <form>
        <p key={board.seq}>
          <b>Title : </b>{board.title}<br></br>
          <b>Content : </b>{board.content} <br></br>
          <b>Writer : </b>{board.writer} <br></br>
          <b>Date : </b>{board.wdt} <br></br>

          <Button type="button" className="btn-warning" onClick={handlerDelete}>삭제</Button>
          <Link to={`/boardupdate/${seq}`}><Button type="button" className="btn-info">수정</Button></Link>
        </p>
      </form>
    </div>
  );
}

import { useState,useEffect } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import axios from "axios";


/*
http://localhost/board/comment/1

*/

export default function BoardInfo() {
  
  
  
  function Comment () {
  
    const{no} = useParams();
    let url = "http://localhost/board/comment/"+ no;
    let [comment, setComment] = useState([]);
  
    function callAPI(){
      fetch(url)
      .then(response => response.json())
      .then(json => {
        setComment(json);
      })
    }
  
    useEffect( () => {
      callAPI();
    },[no]);

    let content = comment.map( (ele) => ele.CONTENT);
    let writer = comment.map( (ele) => ele.WRITER);
    let date = comment.map( (ele) => ele.CREATED_DATE);

    return(
  
      <div>
        <p>댓글 목록</p>
        <b>댓글내용 : </b>{content}<br></br>
        <b>댓글 작성자 : </b>{writer}<br></br>
        <b>작성날짜 : </b>{date}<br></br>
      </div>
  
    );
  }
  
  const navigator = useNavigate();
  const{no} = useParams();
  let [board, setBoard] = useState({});

  let url = "http://localhost/board/" + no;

  function callAPI() {
    fetch(url)
    .then(response => response.json())
    .then(json => {
      setBoard(json[0]);
    })
  }


  useEffect( () => {
    callAPI();
  },[no]);


  return(
    <div>
      <h2>Board Info</h2>
      <form>
        <p>
          <b>번호 : </b>{board.no}<br></br>
          <b>작성일 : </b>{board.created_date}<br></br>
          <b>제목 : </b>{board.title}<br></br>
          <b>이름 : </b>{board.writer}<br></br>
          <b>내용 : </b>{board.content}<br></br>


          <Link to={`/boardupdate/${no}`}><button type="button">수정</button></Link>
        </p>
      </form>
      <Comment></Comment>
    </div>
  );

}
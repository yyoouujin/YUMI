import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

export default function BoardUpdate() {

  let [board, setBoard] = useState([]);
  let [form, setForm] = useState( { title:"", writer:"", content:""} );
  let {no} = useParams();
  let navigator = useNavigate();


  const today = new Date();
  const formattedDate = `${today.getFullYear()}- ${today.getMonth() + 1}- ${today.getDate()}`;
  // 원하는 형식으로 날짜를 설정합니다.


  let url ="http://localhost/board/" + no;


  function handlerChange(event){
    setForm({...form, [event.target.name]:event.target.value});
  }

  function callAPI() {

    fetch(url)
    .then(response => response.json())
    .then(json => {
      setBoard(json[0]);
    })
  }


  async function handlerSave() {
    
    if (window.confirm('수정 하시겠습니까?')) {
        //ajax호출
        await axios.put(url, form);
        //목록
        navigator("/boardlist");
    }

  }


  useEffect( () => {
    callAPI();
    return () => {
      //console.log("수정");
    }
  }, [no]);



  return(
    <form>
    <p>NO.</p>
    <input type="text" name="no" readOnly
    onChange={handlerChange} value={board.no}>
    </input><br></br>
    <p>제목</p>
    <input type="text" name="title" placeholder={board.title} 
    onChange={handlerChange} value={form.title}>
    </input><br></br>
    <p>작성자</p>
    <input type="text" name="writer" placeholder={board.writer}
    onChange={handlerChange} value={form.writer}>
    </input><br></br>
    <p>내용</p>
    <input type="text" name="content" placeholder={board.content}
    onChange={handlerChange} value={form.content}>
    </input><br></br>
    <p>작성일자</p>
    <input type="text" name="content" readOnly
    onChange={handlerChange} placeholder={board.created_date}>
    </input><br></br>


    <button type="button" onClick={handlerSave}>저장</button>

    </form>
  );

}
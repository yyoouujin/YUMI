import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

export default function BoardUpdate () {

  let [board, setBoard] = useState([]);
  let [form, setForm] = useState( {title:"", content:"", writer:""} );
  let{seq} = useParams();
  let navigator = useNavigate();
  


  let url =  "http://localhost/board/" + seq;

  function handlerChange(event){
    setForm({...form, [event.target.name]:event.target.value});
  }

  function handlerReset(event){
    event.preventDefault();
    setForm({title:"", content:"", writer:""});
  }

  async function handlerSubmit() {
    
    if (window.confirm('수정 하시겠습니까?')) {
        //ajax호출
        await axios.put(url, form);
        //목록
        navigator("/boardlist");
    }

  }

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
        <p><b>제목 : </b>
            <input type="text" name="title" placeholder={board.title} 
            onChange={handlerChange} value={form.title}>
            </input><br></br>
        </p>
        <p><b>내용 : </b>
            <input type="text" name="content" placeholder={board.content} 
            onChange={handlerChange} value={form.content}>
            </input><br></br>
        </p>
        <p><b>작성자 : </b>
            <input type="text" name="writer" placeholder={board.writer} 
            onChange={handlerChange} value={form.writer}>
            </input><br></br>
        </p>

        <button type="button" className="btn-primary" onClick={handlerReset}>초기화</button>
        <button type="button" className="btn-success" onClick={handlerSubmit}>저장</button>
    </form>
  );
}


/*
        <Button type="reset" className="btn-primary">초기화</Button>
        <Button type="button" className="btn-danger">삭제</Button>
        <Button type="submit" className="btn-success">저장</Button>
*/

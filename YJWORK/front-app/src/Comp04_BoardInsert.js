import { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";


export default function BoardInsert () {

  const [form, setForm] = useState( {title:"", content:"", writer:""} );
  const navigator = useNavigate(); //링크같은역할
  const {seq} = useParams;

  let url = "http://localhost/board/" + seq;


  function handlerChange(event) {
    setForm({...form, [event.target.name]:event.target.value});
  }

  async function handlerSave() {
    if (form.title === ''){
      alert('제목을 입력하세요');
    } else if (form.content === '') {
      alert('내용을 입력하세요');
    } else if (form.writer === '') {
      alert('작성자를 입력하세요');
    } else {
      if(window.confirm('등록 하시겠습니까?')) {
        //ajax호출
        await axios.post("http://localhost/board/", form);
        //목록
        navigator("/boardlist");
      }
    }
  }


  return (
    <form>
      <input type="text" 
        name="title" value={form.title} placeholder="제목" 
        onChange={handlerChange}>
      </input><br></br>
      <input type="text" 
        name="content" value={form.content} placeholder="내용" 
        onChange={handlerChange}>
      </input><br></br>
      <input type="text" 
        name="writer" value={form.writer} placeholder="작성자" 
        onChange={handlerChange}></input><br></br>
      <Button type="button" className="btn-dark" onClick={handlerSave}>저장</Button>
    </form>

  );
}
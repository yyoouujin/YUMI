import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function BoardInsert () {

  const today = new Date();
  const formattedDate = `${today.getFullYear()}- ${today.getMonth() + 1}- ${today.getDate()}`;
  // 원하는 형식으로 날짜를 설정합니다.

  const [form, setForm] = useState({ no:"", title:"", writer:"", content:""});
  const navigator = useNavigate();

  function handlerChange(event) {
    setForm({...form, [event.target.name]:event.target.value});
  }

  async function handlerSave() {

    if (form.title === '') {
      alert('제목을 입력하세요');
    } else if (isNaN(form.no)){
      alert ('숫자를 입력하세요');
    } else if (form.writer === ''){
      alert('작성자를 입력하세요');
    } else if (form.content === ''){
      alert('내용을 입력하세요');
    } else {
      if(window.confirm('게시글을 등록하시겠습니까?')) {
        axios.post("http://localhost/board", form);
        navigator("/boardlist");
      }
    }
  }




  return (
    <form>
      <p>NO.</p>
      <input type="text" name="no"
      onChange={handlerChange} value={form.no}>
      </input><br></br>
      <p>제목</p>
      <input type="text" name="title"
      onChange={handlerChange} value={form.title}>
      </input><br></br>
      <p>작성자</p>
      <input type="text" name="writer"
      onChange={handlerChange} value={form.writer}>
      </input><br></br>
      <p>내용</p>
      <input type="text" name="content"
      onChange={handlerChange} value={form.content}>
      </input><br></br>
      <p>작성일자</p>
      <input type="text" name="content" readOnly
      onChange={handlerChange} value={formattedDate}>
      </input><br></br>


      <button type="button" onClick={handlerSave}>저장</button>

    </form>
  );
}
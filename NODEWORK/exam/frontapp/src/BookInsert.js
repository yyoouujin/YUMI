import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";


export default function BookInsert() {

  const [form, setForm] = useState( {name:"", writer:"", publisher:"", info:""} );
  const navigator = useNavigate();

  function handlerChange(event) {
    setForm({...form, [event.target.name]:event.target.value});
  }
  
  async function handlerSave(){
    if (form.name === '') {
      alert('제목을 입력하세요');
    } else if (form.writer === ''){
      alert('글쓴이를 입력하세요');
    } else if (form.publisher === ''){
      alert('출판사를 입력하세요');
    } else if (form.info === ''){
      alert('내용을 입력하세요');
    } else {
      if(window.confirm('책을 등록 하시겠습니까?')){
        await axios.post("/api/book", form);
        navigator("/booklist");
      }
    }
  }

  

  return(
    <form>
      <input type="text" name="name" placeholder="제목"
      onChange={handlerChange} value={form.name}>
      </input><br></br>

      <input type="text" name="writer" placeholder="글쓴이"
      onChange={handlerChange} value={form.writer}>
      </input><br></br>

      <input type="text" name="publisher" placeholder="출판사"
      onChange={handlerChange} value={form.publisher}>
      </input><br></br>

      <input type="text" name="info" placeholder="정보"
      onChange={handlerChange} value={form.info}>
      </input><br></br>

      <button type="button" onClick={handlerSave}>등록</button>

    </form>
  );
}
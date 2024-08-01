import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function CustomerInsert() {

    const [form, setForm] = useState( { name:"", email:"", phone:"", address:"" } );
    const navigator = useNavigate();

    function handlerChange(event) {
        setForm({...form, [event.target.name]:event.target.value});
    }

    async function handlerSave() {
        if(form.name === ''){
            alert('이름을 입력하세요');
        } else if (form.email === ''){
            alert('이메일을 입력하세요');
        } else if (form.phone === ''){
            alert('휴대폰 번호를 입력하세요');
        } else if (form.address === ''){
            alert('주소를 입력하세요');
        } else {
            if(window.confirm('회원을 등록 하시겠습니까?')){
                //ajax 호출
                await axios.post("http://localhost/customer/", form);
                //목록
                navigator("/customerlist");
            }
        }
    }

    return(
        <form>
            <input type="text" name="name" placeholder="이름" 
            onChange={handlerChange} value={form.name}>
            </input><br></br>
            
            <input type="text" name="email" placeholder="이메일" 
            onChange={handlerChange} value={form.email}>
            </input><br></br>

            <input type="text" name="phone" placeholder="전화번호" 
            onChange={handlerChange} value={form.phone}>
            </input><br></br>

            <input type="text" name="address" placeholder="주소" 
            onChange={handlerChange} value={form.address}>
            </input><br></br>

            <button type="button" onClick={handlerSave}>회원등록</button>

        </form>
    );
}
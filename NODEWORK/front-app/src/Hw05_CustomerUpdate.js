import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";


export default function CustomerUpdate() {

    let[customer, setCustomer] = useState([]);
    let[form, setForm] = useState( { name:"", email:"", phone:"", address:"" } );
    let {id} = useParams();
    let navigator = useNavigate();

    let url = "http://localhost/customer/" + id;

    function handlerChange(event) {
        setForm({...form, [event.target.name]:event.target.value});
    }

    function handlerReset(event){
        event.preventDefault();
        setForm({ name:"", email:"", phone:"", address:"" });
    }

    async function handlerSubmit() {
        if(window.confirm('수정 하시겠습니까?')) {
            //ajax호출
            await axios.put(url, form);
            //목록
            navigator('/customerlist');
        }
    }


    function callAPI() {
        fetch(url)
        .then(response => response.json())
        .then(json => {
            setCustomer(json[0]);
        })
    }

    useEffect( () => {
        callAPI();
    }, [id]);



    return(
    <form>
        <div>
            <p><b>이름 : </b>
                <input type="text" name="name" placeholder={customer.name} 
                onChange={handlerChange} value={form.name}>
                </input><br></br>
            </p>
            <p><b>전화번호 : </b>
                <input type="text" name="phone" placeholder={customer.phone} 
                onChange={handlerChange} value={form.phone}>
                </input><br></br>
            </p>
            <p><b>주소 : </b>
                <input type="text" name="address" placeholder={customer.address} 
                onChange={handlerChange} value={form.address}>
                </input><br></br>
            </p>
            <p><b>이메일 : </b>
                <input type="text" name="email" placeholder={customer.email} 
                onChange={handlerChange} value={form.email}>
                </input><br></br>
            </p>
        </div>
            <button type="button" onClick={handlerReset}>초기화</button>
            <button type="button" onClick={handlerSubmit}>저장</button>
    </form>
    );
}
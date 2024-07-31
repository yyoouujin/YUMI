import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";


export default function CustomerInfo() {

    const navigator = useNavigate();
    const{id} = useParams();
    const [customer, setCustomer] = useState([]);

    let url = "http://localhost/customer/" + id;

    async function handlerDelete() {
        await axios.delete(url);
        alert('회원이 삭제되었습니다');
        navigator("/customerlist");
    }

    function callAPI() {
        if(!id) {
            return;
        }
        fetch(url)
        .then(response => response.json())
        .then(json => {
            //onsole.log(json[0]); //[{}] 배열로 담기는것 확인!
            setCustomer(json[0]);
        })
    }

    useEffect( () => {
        callAPI();
    }, [id]);

    return(
        <div>
            <h2>회원관리</h2>
            <form>
                <p key={customer.id}>
                    <b>이름 : </b>{customer.name}<br></br>
                    <b>전화번호 : </b>{customer.phone} <br></br>
                    <b>주소 : </b>{customer.address} <br></br>
                    <b>이메일 : </b>{customer.email} <br></br>

                    <button type="button" onClick={handlerDelete}>회원삭제</button>
                    <Link to={"/customerupdate/"+id}><button type="button">회원수정</button></Link>
                </p>
            </form>
        </div>
    );
}
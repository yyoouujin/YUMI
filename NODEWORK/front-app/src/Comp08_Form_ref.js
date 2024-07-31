/*
Form 필드 제어
state, ref, event => form field

use함수는 첫번째에!
*/
import { useState, useRef } from "react";

export default function App() {
  //let [message, setMessage] = useState('초기값');
  //let [email, setEmail] = useState('초기이메일');
  let [form, setForm] = useState( { message:"", email:"" } )
  let inputMessage = useRef(); //document.getElementById("");

  function handlerChange(event) {
    setForm({...form, [event.target.name]:event.target.value}); //기존 폼을 전부 가져오고, message값만 변경해서 추가}
  }
  /*
  setForm({message : event.target.value, email : event.target.value});
  =>
  setForm([event.target.name]:event.target.value);
  */


  return(
    <>
      <p><b>Message : </b>{form.message}</p>
      <p><b>Email : </b>{form.email}</p>
    <form>
      <input name="message" type="text" value={form.message} onChange={handlerChange} placeholder="커서" ref={inputMessage}>
      </input><br></br>
      <input name="email" type="text" value={form.email} onChange={handlerChange}>
      </input><br></br>
      <button type="button" onClick={(event) => { 
        event.preventDefault();
        setForm({message:"", email:""});
        console.log(inputMessage);
        inputMessage.current.focus(); //current : 참조하는태그를 가져온다!(input태그를 가르킨다)
       }}>버튼</button>
    </form>
    </>
  );
}

/*
태그를 직접 찾아서 속성값을 지우거나 그런 짓 X (javascript)
state 에 값을 넣어놓고, 그 state 값이 변경 혹은 버튼이 클릭되면 업데이트 하는 방식(react)

인풋태그가 변경되면, 해당 변경값을 state에 넣기
onChangeMessage={setMessage} -> 안에 함수를 넣는방법(setMessage : 세터함수)

데이터만 변경되면 새로 렌더링된다! (button 이벤트로 확인)

state 값 자체를 객체로!

<input name="message" type="text" value={form.message} 
        onChange={(event) => { 
          setForm({...form, message:event.target.value}); //기존 폼을 전부 가져오고, message값만 변경해서 추가
        }}>
=> {string 으로 form 태그 내 name :  event.target.value}  변경!
== [event.target.name]:event.target.value


Ref ?
  : 특정 DOM을 ref로 선택 후 제어!
  = document.getElementById("")
  1) useRef Hook을 가져와 컴포넌트에 ref를 추가
  2) 컴포넌트 내에서 useRef Hook을 호출
  3) 컴포넌트 내에서 useRef Hook을 호출
  4) ref.current 프로퍼티를 통해 변경하거나 읽을 수 있음 
* Ref를 바꿔도 리렌더링되지는 않는다!

*/

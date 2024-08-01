//import Replys from './Reply';
//조건부 렌더링 :https://ko.react.dev/learn/conditional-rendering

//export default function Item() : 내보낼 함수가 하나밖에 없으면 바로 붙여도된다 (export default Item;)

import { useContext } from "react";
import { LoginContext } from "./context";

function Item({ name, isPacked }) {
  /*
  [if 문]
  if (isPacked) {
    return <li className="item">{name} ✔</li>;
  } else {
    return <li className="item">{name}</li>;
  }
  */
 /*
  [삼항연산자]
  return (
    <li className="item">
      {isPacked ? name + ' ✔' : name}
    </li>
  );
  */
  //논리연산자 : isPacked가 true인 경우에만 조건부로 체크 표시
  return (
    <li className="item">
      {name} {isPacked && '✔'}
    </li>
  );
  
}

function Items( {todos} ) {
  const login = useContext(LoginContext); //바뀐 id로 읽어온다
  /*
  1)
  const item = todos.map( (ele) =>  <Item name={ele.name} isPacked={ele.isPacked} />  );
  return (item);
  */

  /*
  2)
  const item = todos.map( (ele) => ( <Item name={ele.name} isPacked={ele.isPacked} /> ) );
  return <>{item}</>;
  */

  //3) key 값 idx로 주기
  const item = todos.map( (ele, idx) => ( <Item key={idx} {...ele} /> ) );
  return (
  <div>
    <h2>바뀐아이디 : {login.userid}</h2>
    {item}
  </div>);

}

export default function PackingList() {

  //useContext 사용은 함수 최상단에!
  const login = useContext(LoginContext);


  let todos=[
    {name:"Space sui", isPacked: true },
    {name:"Helmet with a golden leaf", isPacked: true },
    {name:"Photo of Tam", isPacked: false }
  ];

  const replyList = [
    {id:1, title:'호에엥', writer:"유진"},
    {id:2, title:'탕후루 사와', writer:"옥지"},
    {id:3, title:'옥지는 멧돼지얌', writer:"빵빵이"}
  ];

  return (
    <section>
      <h1>Sally Ride's Packing List</h1>
      <h1>로그인 : { login.userid }</h1>
      <LoginContext.Provider value = {{userid:"쿠키런으로바꿔"}}>
        <ul>
          <Items todos={todos} />
        </ul>
      </LoginContext.Provider>
      <h2>댓글리스트</h2>

    </section>
  );
}


/*
      <Replys datas={replyList} />
*/

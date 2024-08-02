import React, {useState} from "react";
import "./Style.css";
import { legacy_createStore as createStore } from "redux";
import { Provider, useSelector, useDispatch  } from 'react-redux';



//1. reduce 선언
function reducer(currentState, action) {

  //초깃값이 없으면 새로운 state를 생성 후 number값을 1로 넘겨준다
  if(currentState === undefined) {
    return {number: 1};
  }

  //state불변의 원칙 => 복제해서 변경 => 새 state로 변경
  const newState = {...currentState}; 

  if(action.type === "UP") {
    newState.number = newState.number + 1;
  } else if (action.type === 'DOWN') {
    newState.number = newState.number - 1;
  }
  return newState;
}

//2. 스토어에 저장 -> 여러개 쓰고싶으면 redux toolkit
const store = createStore(reducer, {number:1});

function Left1() {
  return (
    <div>
      <h1>Left1 : </h1>
      <Left2></Left2>
    </div>
  );
}

function Left2() {
  return (
    <div>
      <h1>Left2 : </h1>
      <Left3 ></Left3>
    </div>
  );
}

function Left3() {
  //useSelector: state의 값을 사용!

  const number = useSelector((state) => state.number);
  return (
    <div>
      <h1>Left3 : {number}</h1>
    </div>
  );
}


function Rigth1() {
  return (
    <div>
      <h1>Right1</h1>
      <Rigth2></Rigth2>
    </div>
  );
}

function Rigth2() {
  const dispatch = useDispatch(); //reduce의 state값을 변경
  return (
    <div>
      <h1>Right2</h1>
      <input type="button" value="-" 
       onClick={() => {
        dispatch({type:'DOWN'}); //디스패치로 명령만 전달
       }}>
      </input>
      <Rigth3></Rigth3>
    </div>
  );
}

function Rigth3() {
  const dispatch = useDispatch(); //reduce의 state값을 변경
  return (
    <div>
      <h1>Right3</h1>
      <input type="button" value="+" 
       onClick={() => {
        dispatch({type:'UP'}); //디스패치로 명령만 전달
       }}>
      </input>
    </div>
  );
}




export default function App() {
  const [number, setNumber] = useState(1);
  return (
    <div id="container">
      <h1>Root</h1>
        <div id="grid">
          <Provider store={store}>
            <Left1></Left1>
            <Rigth1></Rigth1>
          </Provider>
        </div>
    </div>
  );
}

/*
store : reduce를 좀 더 편하게 관리하기 위함!
provide 된 하위 컴포넌트는 모두 store 에 접근할 수 있따!
<Provider store={store}>

*/

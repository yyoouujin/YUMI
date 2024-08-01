//[p.239]별도의 파일로 분리(store 폴더 내 index.js 파일 ! -> import)

import { Provider, useSelector, useDispatch } from "react-redux";
import { counterSlice,store,loginSlice } from "./store";
import { useState } from "react";

function Counter() {
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();
  return (
    <div>
      <button onClick={() => {
        //dispatch({type:"counterSlice/up", inc:2});
        dispatch(counterSlice.actions.up(2));
      }}>+</button><b>Count : </b>{count}
    </div>
  );
}

function MyPage() {

  const name = useSelector((state) => state.login.username);
  const email = useSelector((state) => state.login.email);
  const dispatch = useDispatch();
  let [inpval, setInpval] = useState('');
  
  return (
    <div>
      {/* <input type="text" onChange={(event) =>{ dispatch({type:"loginSlice/setUsername", username : event.target.value})}} /> */}
      <input onChange={(event) =>{
        setInpval(event.target.value);
      }} ></input>
      <button onClick={() => {
        dispatch({type:"loginSlice/setUsername", username:inpval})
        //dispatch(loginSlice.actions.setUsername(input));
      }}>클릭</button>
      <h1>username : {name}</h1>
      <h1>email : {email}</h1>

    </div>
  )
}


export default function App() {

  return (
    <Provider store={store}>
      <div>
        <Counter></Counter>
        <MyPage></MyPage>
      </div>
    </Provider>
  );
}


/*
dispatch({type:"loginSlice/setUsername", username:event.target.value}
*/


/*

[p.226] : reduce

import { Provider, useSelector, useDispatch } from "react-redux";
import { legacy_createStore as createStore } from "redux";


//1. reducer
function reducer(state, action){
  if(action.type === "up"){
    return {...state, count:state.count + action.step};
  }
  return state;
}

//2.store
const initialState = {count : 0}; //value => count (1번)
const store = createStore(reducer, initialState);


//4. useSelector : state값 읽기
//5. dispatch : state값 변경(명령만 전달)
function Counter() {
  const dispatch = useDispatch();
  const count = useSelector(state => state.count);
  return (
    <div>
      <button onClick={() => 
        dispatch({type:'up', step:2}) //step:2 => inc:2 (type라고 기재해야한다! 못바꿈)
      }>+</button><b>Count : </b>{count}
    </div>
  );
}

//3.provider
export default function App() {

  return (
    <Provider store={store}>
      <div>
        <Counter></Counter>
      </div>
    </Provider>
  );
}
  */


/*
const userSlice = createSlice({
  name:'userSlice',
  initialState:{username:"", dept:""},
  reducers:{
    changeName:(state, action)=>{
      state.dept = action.username;
    }
  }
});


*/





/*
[p.232] : redux

import { Provider, useSelector, useDispatch } from "react-redux";
import { createSlice, configureStore } from '@reduxjs/toolkit';

//1. slice 생성(=store개념)
const counterSlice = createSlice({
  name:'counterSlice',
  initialState:{count:0},
  reducers:{
    up:(state, action)=>{
      //state.count += action.inc;
      state.count += action.payload;
    },
    down:(state, action) => {
      //state.count -= action.inc;
      state.count -= action.payload;
    }
  }
});

//2. configureStore
let store = configureStore({
  reducer:{ 
    counter:counterSlice.reducer
   }
});

function Counter() {
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();
  return (
    <div>
      <button onClick={() => {
        //dispatch({type:"counterSlice/up", inc:2});
        dispatch(counterSlice.actions.up(2)); //payload로 읽어온다
      }}>+</button><b>Count : </b>{count}
    </div>
  );
}

//3.provider
export default function App() {

  return (
    <Provider store={store}>
      <div>
        <Counter></Counter>
      </div>
    </Provider>
  );
}


*/

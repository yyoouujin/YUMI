import { useReducer } from "react";

//reducer 함수 작성
function countReducer(oldCount, action) {
  if(action.type === 'UP'){ //받을때도 객체 타입으로 풀어써주기!
    
    return oldCount + action.number;
  } else if (action.type === 'DOWN') {
    return oldCount - action.number;
  } else if (action.type === 'RESET') {
    return 0;
  }
}

export default function App() {

  const [count, countDispatch] = useReducer(countReducer, 0);

  function up() {
    countDispatch({type:"UP", number:10}); //객체 타입으로도 전달이 가능! [기존 : countDispatch("UP");]
  }

  function reset() {
    countDispatch({type:"RESET", number:0});
  }

  function down() {
    countDispatch({type:"DOWN", number:10});
  }


  return(
    <div>
      <input onClick={down} type="button" value="-" />
      <input onClick={reset} type="button" value="reset" />
      <input onClick={up} type="button" value="+" /><br></br>
      <span><b>Count : </b>{count}</span>
    </div>
  );

}


/*
[state를 사용하는 이유]

import { useState } from "react";

function App1() {

  let [count, setCount] = useState(0);

  function up() {
    setCount(count+1);
  }

  function reset() {
    setCount(0);
  }

  function down() {
    setCount(count-1);
  }


  return(
    <div>
      <input onClick={down} type="button" value="-" />
      <input onClick={reset} type="button" value="reset" />
      <input onClick={up} type="button" value="+" /><br></br>
      <span><b>Count : </b>{count}</span>
    </div>
  );
}

*/


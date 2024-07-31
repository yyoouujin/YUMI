import { useState, useEffect } from "react";

/*
(index.js 파일 내 <React.StrictMode> 태그 때문에 2번씩 수행됐었다)

useEffect ?
 : 렌더링이 끝난 후 추가적으로 해야 할 작업

state가 변경되면 dom 을 update한다 => EffectComponent 함수 실행 => useEffect (무한루프) : 어떠한 특정 값이 바뀌면 업데이트 하지 말라고 정해줘야함

useEffect(() => {실행할 함수}, ignore);
useEffect(() => {실행할 함수}); -> ignore 가 없으면 dom 업데이트를 하지 않는다(한번만 실행하고 종료)
* 보통 ignore 엔 페이지 값들을 적어준다, or 카운트,,

    
  [json placeholder에서 복붙 : https://jsonplaceholder.typicode.com/]
  =>
    {
      "userId": 1,
      "id": 1,
      "title": "delectus aut autem",
      "completed": false
    }
 

*/

export default function EffectComponent() {

  let [count, setCount] = useState(1);
  let [todos, setTodos] = useState([]);

  function callAPI() {
    fetch('https://jsonplaceholder.typicode.com/todos')
    .then(response => response.json())
    .then(json => {
      console.log(json); 
      setTodos(json); //state변경하면 렌더링
    });
  }

  function Todo({todos}) {
    return (
      todos.map( (ele) => { 
        let result =  (<p key={ele.id}>userId : {ele.userId} / id : {ele.id} / title : {ele.title}</p>);
        return result;
      })
    );
  }

  //렌더링 후에 한번만 실행
  useEffect(() => {
    console.log("effect");
    callAPI(); //렌더링이 끝나고 나서 또다시 호출하지 않기 위함 (useEffect 안에서 호출)
    Todo({todos});
    //setCount(count+1);
    return () => {
      console.log("clean up"); //useEffect가 다시 호출됐을 때 실행된다
    }
  }, [count]); //count가 변경되면 useEffect가 다시 호출된다(아무것도 안적어주면 렌더링 후 한번만 useEffect 실행되고 종료)



  return (
    <div>
      <h1>side effect(부수효과)</h1>
      count : {count}
      <Todo todos={todos} />
    </div>
  );

}


/*

[Hook]
 : use로 시작하는 함수를 Hooks

Effect를 사용하면 렌더링 후 특정 코드를 실행하여 React 외부의 시스템과 컴포넌트를 동기화할 수 있습니다.
(특정코드 : AJAX , fetch / 외부시스템과 연동할 때 반드시 필요!)
Effect는 렌더링 자체에 의해 발생하는 부수 효과를 특정하는 것 (렌더링 후에 실행)
(부수 효과 : 서버 연동 해서 데이터를 가져오는것)
+ 아작스 연동할 때!

useEffect는 화면에 렌더링이 반영될 때까지 코드 실행을 “지연”시킵니다. (=렌더링이 끝난 후 실행해라)

====

Effect가 필요하지 않은 경우 ?
 : data 내에서 필터링 해서, 해당 데이터를 보여주거나 보여주지 않을 때 (db 접촉이 필요없을떄)
 기존 props나 state에서 계산할 수 있는 것이 있으면 , 그것을 state에 넣지 마세요. 대신, 렌더링 중에 계산하게 하세요.
 (남발하지마세요)
 
=====

[컴포넌트의 생명주기]
1. 컴포넌트는 화면에 추가될 때 마운트 됩니다.
2. 컴포넌트는 일반적으로 상호작용에 대한 응답으로 새로운 props나 state를 수신하면 업데이트 됩니다.
3. 컴포넌트가 화면에서 제거되면 마운트가 해제 됩니다.

=====

useEffect 내 return 문은 연결이 끊어질때까지수행(update 전까지 수행)

렌더링이 끝난 후 부가 작업으로 useEffect 수행,
useEffect의 의존성 배열에 기재된 값(실습은 count로 했음)이 바뀌면 return 문 명령 실행 및 useEffect 문 재실행

*/







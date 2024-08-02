import { useEffect, useState } from "react";

export default function Fetch() {

  const [todo, setTodo] = useState([]);
  console.log('외않떠', process.env.NEXT_PUBLIC_TODO_URL);
  let url = process.env.NEXT_PUBLIC_TODO_URL;

  function callAPI(){
    fetch(url)
    .then(response => response.json())
    .then(result => {
      console.log(result);
      setTodo(result);
      console.log(todo);
    })
  }


  useEffect( () => {
    callAPI();
  }, []);

  return (
    <>
    <div>
      <p>
        {todo.map(ele=> <b>{ele.title}<br></br></b>)}
      </p>
    </div>
    </>
  )
}

/*
.env.local 파일 내 url 추가
jsonplace사이트 내 : https://jsonplaceholder.typicode.com/todos (복붙!)
*/

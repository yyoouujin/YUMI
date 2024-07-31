import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import {Button} from 'react-bootstrap';

function Board ( {boards, onClick} ){

  return (
    boards.map( (ele, idx) => {
      let result = (
        <div key={idx}>
          <p>
            <b>{ele.seq}번 . </b><Link to={"/boardinfo/" + ele.seq}>{ele.title}</Link><br></br>
          </p>
        </div>
      );
      return result;
    } )
  )
}

export default function BoardList () {

  const location = useLocation();
  //URLSearchParams -> 쿼리 스트링의 매개변수를 읽어주는 node.js 모듈
  const search = new URLSearchParams(location.search);  //name=aaa&age=bbb
  const p_page = search.get("page");
  const page = p_page == null ? 1 : Number(p_page);

  let url = "http://localhost/board?page="+page;
  let [boards, setBoards] = useState([]);
  
  let [lastPage, setLastPage] = useState(1);

  function callAPI() {
    fetch(url)
    .then(response => response.json())
    .then(json => {
      setBoards(json.list);
      setLastPage(Math.ceil(json.total/10));    //125->13
    })
  }


  useEffect( () => {
    callAPI();
    return() =>{
      //console.log("리슽흐!");
    }
  }, [page]);


  return (
    <div>
      <h2>Board List</h2>
      <Board boards={boards} />
      <Link to='/boardinsert'><Button className="btn-dark">글쓰기</Button></Link>
      {[...Array(lastPage)].map( (p) => (
        <Link to={"/boardlist?page="+p}>{p}</Link>
       ))}
    </div>
  );
}

/*
    <div>
      <Link to="/boardlist?page=1">1</Link>
      <Link to="/boardlist?page=2">2</Link>
      <Link to="/boardlist?page=3">3</Link>
    </div>
*/

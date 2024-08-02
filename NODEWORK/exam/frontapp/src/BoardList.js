import { useState, useEffect } from "react";
import { Link } from "react-router-dom";


function Board({boards}){
  return (
    boards.map( (ele, idx) => <tr key={idx}><td>{ele.no}</td><td><Link to={"/boardinfo/"+ele.no}>{ele.title}</Link></td><td>{ele.writer}</td><td>{ele.created_date}</td><td>{ele.bno}</td></tr>
   )
  );
}

export default function BoardList () {

  let url ="http://localhost/board";
  let [boards, setBoards] = useState([]);

  function callAPI() {
    fetch(url)
    .then(response => response.json())
    .then(json => {
      setBoards(json);
      console.log(boards);
    })
  }

  useEffect( () => {
    callAPI();
  }, []);


  return (
      <div>
        <table>
          <thead>
            <tr>
              <th>NO.</th>
              <th>제목</th>
              <th>작성자</th>
              <th>작성일자</th>
              <th>댓글수</th>
            </tr>
          </thead>
          <tbody>
              <Board boards={boards} />
          </tbody>
        </table>
      </div>
  );
}
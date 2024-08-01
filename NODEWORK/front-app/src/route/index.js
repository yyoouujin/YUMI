import Condition from "../Comp02_Condition";
import Event from "../Comp03_Event";
import Book from "../Comp05_Book";
import Effect from "../Comp07_EffectComponent";
import Board from "../Comp10_BoardComponent";
import BoardList from "../Comp11_BoardList";
import BoardInfo from "../Comp12_BoardInfo";
import BoardUpdate from "../Comp13_BoardUpdate";
import BoardInsert from "../Comp14_BoardInsert";
import Customer from "../Hw01_CustomerComponent";

function Main () {
  return (
    <div>
      <h1>아 덥다</h1>
      <p>경민띠 낼롱</p>
    </div>
  )
}

let route = [
  {path:"/", element:<Main />},
  {path:"/condition", element:<Condition />},
  {path:"/book", element:<Book />},
  {path:"/event", element:<Event />},
  {path:"/effect", element:<Effect />},

  {path:"/board", element:<Board />},
  {path:"/boardlist", element:<BoardList />},
  {path:"/boardinfo/:seq", element:<BoardInfo />},
  {path:"/boardupdate/:seq", element:<BoardUpdate />},
  {path:"/boardinsert", element:<BoardInsert />},


  {
    path:"/customer", 
    element:<Customer />
  }

];

export default route;

/*
  {path:"/boardlist", element:<BoardList />},
  {path:"/boardinfo", element:<BoardInfo />},
  {path:"/boardupdate", element:<BoardUpdate />},
  {path:"/boardinsert", element:<BoardInsert />},




  
  {
    path:"/board",
    element:<Board />,
    children:[
      {path:"list", element:<BoardList />},
      {path:"insert", element:<BoardInsert />},
      {path:"update", element:<BoardUpdate />},
      {path:"info", element:<BoardInfo />}
    ]
  },

*/
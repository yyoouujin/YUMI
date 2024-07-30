import './App.css';
import Market from './Market';
import { useState } from 'react';


function Square() {

  const [value, setValue] = useState(null);

  function handleClick() {
    console.log('clicked!');
    alert('클릭됨!');
  }

  return <button className="square" onClick={handleClick}>{value}</button>;
}


function Board() {
  return (
    <>
      <div className="board-row">
        <Square />
        <Square />
        <Square />
      </div>
      <div className="board-row">
        <Square />
        <Square />
        <Square />
      </div>
      <div className="board-row">
        <Square />
        <Square />
        <Square />
      </div>
    </>
  );
}


export default function App() {
  return (
    <div className="App">
      <Board />
      <Market />
    </div>
  );
}

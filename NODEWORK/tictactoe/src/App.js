import './App.css';
import Market from './Market';


function Square( {value} ) {

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
        <Square value="1" />
        <Square value="2" />
        <Square value="3" />
      </div>
      <div className="board-row">
        <Square value="4" />
        <Square value="5" />
        <Square value="6" />
      </div>
      <div className="board-row">
        <Square value="7" />
        <Square value="8" />
        <Square value="9" />
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

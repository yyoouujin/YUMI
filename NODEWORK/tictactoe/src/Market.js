import './Market.css';

let marketProducts = [
  { category: "Fruits", price: "$1", stocked: true, name: "Apple" },
  { category: "Fruits", price: "$1", stocked: true, name: "Dragonfruit" },
  { category: "Fruits", price: "$2", stocked: false, name: "Passionfruit" },
  { category: "Vegetables", price: "$2", stocked: true, name: "Spinach" },
  { category: "Vegetables", price: "$4", stocked: false, name: "Pumpkin" },
  { category: "Vegetables", price: "$1", stocked: true, name: "Peas" }
];


function MarketList() {
  return <h2>나와라!</h2>;
}

//회색
function FilterableProductTable () {


  function SearchBar() {

  }

  function ProductTable() {




  }


} //회색 end


export default function App() {
  return (
    <div className="App">
      <MarketList />
    </div>
  );
}


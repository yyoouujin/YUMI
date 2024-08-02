//import './Market.css';
import { useState } from 'react';

function MarketList() {
    return <h2>나와라!</h2>;
}

const PRODUCTS = [
    {category: "Fruits", price: "$1", stocked: true, name: "Apple"},
    {category: "Fruits", price: "$1", stocked: true, name: "Dragonfruit"},
    {category: "Fruits", price: "$2", stocked: false, name: "Passionfruit"},
    {category: "Vegetables", price: "$2", stocked: true, name: "Spinach"},
    {category: "Vegetables", price: "$4", stocked: false, name: "Pumpkin"},
    {category: "Vegetables", price: "$1", stocked: true, name: "Peas"}
];


//회색
function FilterableProductTable({ products }) {

  const [filterText, setFilterText] = useState('');
  const [inStockOnly, setInStockOnly] = useState(false);

  return (
    <div>
      <SearchBar filterText={filterText} inStockOnly={inStockOnly} onFilterTextChange={setFilterText} onInStockOnlyChange={setInStockOnly} />
      <ProductTable products={products} filterText={filterText} inStockOnly={inStockOnly} />
    </div>
  );
}

/*
onFilterTextChange(e.target.value) = setFilterText(e.target.value)
*/

//노란색 (e.target.value = 인풋박스안의 값 / e.target.checked = 체크박스의 체크여부 : true 면 체크, false 면 체크안됨)
function SearchBar({ filterText, inStockOnly, onFilterTextChange, onInStockOnlyChange }) {
  return (
    <form>
      <input type="text" value={filterText} placeholder="Search..."
      onChange={(e) => onFilterTextChange(e.target.value) } />
      <label>
        <input type="checkbox" checked={inStockOnly}
        onChange={(e) => onInStockOnlyChange(e.target.checked) } />
        {' '}
        Only show products in stock
      </label>
    </form>
  );
}


//라벤더색
function ProductTable({ products, filterText, inStockOnly }) {
    const rows = [];
    let lastCategory = null;

    //필터링

    products.forEach((product) => {

      if ( product.name.toLowerCase().indexOf( filterText.toLowerCase() ) === -1 ) {
        return; //continue
      }
      if (inStockOnly && !product.stocked) {
        return;
      }

      if (product.category !== lastCategory) {
        rows.push(
          <ProductCategoryRow
            category={product.category}
            key={product.category} />
        );
      }
      rows.push(
        <ProductRow
          product={product}
          key={product.name} />
      );
      lastCategory = product.category;
    });
  
    return (
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </table>
    );
}


//초록색
function ProductCategoryRow({ category }) {
    return (
      <tr>
        <th colSpan="2">
          {category}
        </th>
      </tr>
    );
}

//노란색
function ProductRow({ product }) {
    const name = product.stocked ? product.name :
      <span style={{ color: 'red' }}>
        {product.name}
      </span>;
  
    return (
      <tr>
        <td>{name}</td>
        <td>{product.price}</td>
      </tr>
    );
}





export default function App() {
  return (
    <div className="App">
      <MarketList />
      <FilterableProductTable products={PRODUCTS} />
      <a href="/">pages/index.js</a>
    </div>
  );
}


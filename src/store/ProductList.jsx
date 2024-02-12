import React, { useEffect, useState } from "react";
import Product from "./Product";

export default function ProductList() {
  const [productList, setProductList] = useState([]);
  const [searchInput, setSearchInput] = useState({ initialState: '' });

  const displayProducts = () => {
    const productstemp =productList.filter(product=>{
      return product.title.includes(searchInput)
      ||product.id.toString().includes(searchInput)
      ||product.description.includes(searchInput)
    })
    if (productstemp.length > 0) {
      return productstemp.map((product, key) => {
        return <Product key={key} product={product} />;
      });
    } 
    return (
      <tr>
        <td colSpan={7}>no items</td>
      </tr>
    );
  };


  const getProducts = () => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((res) => setProductList(res));
  };

  useEffect(() => {
    getProducts();
  }, []);
const handleSearch=(e)=>{
  e.prevent.default()
  const searchValue = document.querySelector('#search').value;
  setSearchInput(searchValue)

 
}
  return (
    <div className="container-fluid mx-auto w-75 my-3">
      <h2>Search:</h2>
      <form>
      <div className="form-group">
        <label>Search</label>
        <input type="text" name="" id="" className="form-control"  ></input>
 
    </div>
    <input type="submit" value='Search' onClick={handleSearch}/>
      </form>
      <h1>Liste des Produits:</h1>
      <table className="table">
        <thead>
          <tr>
            <th>#ID</th>
            <th>Title</th>
            <th>Price</th>
            <th>Description</th>
            <th>Category</th>
            <th>Image</th>
            <th>Rating</th>
          </tr>
        </thead>
        <tbody>{displayProducts()}</tbody>
      </table>
    </div>
  );
}

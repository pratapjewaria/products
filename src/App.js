import { useEffect, useState } from "react";
import "./styles.css";
import Product from "./Products";

export default function App() {
  const [products, setProducts] = useState([]);
  const url = "https://dummyjson.com/products";

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        setProducts(res.products);
      });
  }, []);
  return (
    <div className="App">
      <Product products={products} />
    </div>
  );
}

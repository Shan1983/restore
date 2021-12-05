import { useState, useEffect } from "react";
import { Product } from "../../app/models/products";
import ProductList from "./ProductList";


export default function Catalog() {

  const [products, setProducts] = useState<Product[]>([])

  useEffect(() => {
    fetch('http://localhost:5000/api/products')
    .then(resp => resp.json())
    .then(resp => setProducts(resp))
    .catch(e => console.log(e.message))
  }, [])


    return (
        <>
          <ProductList products={products} />
        </>
    )
}
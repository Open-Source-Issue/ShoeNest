'use client';

import { useEffect, useState } from "react";
import Image from "next/image";

interface Product {
  id: number;
  title: string;
  price: number;
  image: string;
}

export default function Home() {
  const [products, setProducts] = useState<Product[]>([]);

  const fetchProducts = async () => {
    const res = await fetch('https://fakestoreapi.com/products');
    const products: Product[] = await res.json();
    setProducts(products);
  }

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div>
      <h1>Products</h1>
      <div className="flex flex-wrap text-black">
        {products.map(product => (
          <li className="m-2 bg-white shadow-slate-300 w-52" key={product.id}>
            <Image height={100} width={100} src={product.image} alt={product.title} />
            <h2>{product.title}</h2>
            <p>{product.price}</p>
            <button>Add to cart</button>
          </li>
        ))}
      </div>
    </div>
  )
}
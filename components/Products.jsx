import React from "react";
import ProductCard from "./ProductCard";

const Products = () => {
  return (
    <div className='grid grid-cols-5 gap-7 mx-5'>
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
    </div>
  );
};

export default Products;

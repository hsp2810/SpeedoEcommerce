import React from "react";
import ProductCard from "./ProductCard";

const Products = () => {
  return (
    <div className='grid grid-cols-4 gap-1 flex-auto'>
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
    </div>
  );
};

export default Products;

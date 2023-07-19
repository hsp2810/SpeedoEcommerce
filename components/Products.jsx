import React from "react";
import ProductCard from "./ProductCard";

const Products = (props) => {
  return (
    <div className='grid grid-cols-4 gap-7 mx-5'>
      {props.products &&
        props.products.map((product) => {
          return <ProductCard key={product._id} product={product} />;
        })}
    </div>
  );
};

export default Products;

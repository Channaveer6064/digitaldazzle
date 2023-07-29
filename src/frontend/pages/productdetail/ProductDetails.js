import React from "react";
import "./ProductDetails.css";
import { useParams } from "react-router-dom";
const ProductDetails = () => {
  const { items } = useParams();
  console.log(items);
  return (
    <div className="productDetails-container">
      <div></div>
    </div>
  );
};

export { ProductDetails };

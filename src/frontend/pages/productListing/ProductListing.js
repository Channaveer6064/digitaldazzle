import React from "react";
import Card from "../../components/card/Card";
import "./ProductListing.css";
import { filtereddata } from "../../reducer/filter";
import { useEffect, useState, useContext } from "react";
import {
  useProducts,
  ProductContext,
  fetchProductdata,
} from "../../contexts/product-context";
import Filter from "../../components/filters/Filter";
import { useFilter } from "../../contexts/filter-context";
const ProductListing = () => {
  // const { ProductData } = useProducts();
  //
  const { ProductData, fetchProductdata } = useProducts();
  useEffect(() => {
    fetchProductdata();
  }, []);
  const { state, dispatch } = useFilter();
  var products = filtereddata(ProductData, state);
  if (products) {
    var currItems = products;
  }

  return (
    <div className="home-page-content">
      <div className="filters-container">
        <Filter state={state} dispatch={dispatch} />
      </div>
      <div className="product-list">
        {currItems?.map((items) => (
          <Card key={items._id} items={items} />
        ))}
      </div>
    </div>
  );
};

export default ProductListing;

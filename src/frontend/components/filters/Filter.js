import React from "react";
import "./Filter.css";

const Filter = ({ state, dispatch }) => {
  const { sortBy, showmobiles, showlaptops, showtelevision, rating } = {
    ...state,
  };
  return (
    <div className="product-filter">
      <div className="product-filter-container">
        <h4>filters</h4> <hr></hr>
        <h4>filter by category</h4>
        <div className="product-filter-category">
          <input
            onChange={() => dispatch({ type: "mobiles" })}
            checked={showmobiles}
            type="checkbox"
          ></input>
          Mobile Phones
        </div>
        <div className="product-filter-category">
          <input
            onChange={() => dispatch({ type: "Laptop" })}
            checked={showlaptops}
            type="checkbox"
          ></input>
          Laptops
        </div>
        <div className="product-filter-category">
          <input
            onChange={() => dispatch({ type: "TV" })}
            checked={showtelevision}
            type="checkbox"
          ></input>
          Televison
        </div>
        <hr></hr>
        <h4>filter by range</h4>
        <div className="product-filter-range">
          <input type="range" min="0" max="50" value="50"></input>
        </div>{" "}
        <hr></hr>
        <h4>filter by price</h4>
        <div className="product-filter-price">
          <input
            name="sorting"
            type="radio"
            onChange={() =>
              dispatch({ type: "sort", payload: "Price_Low_To_High" })
            }
            checked={sortBy && sortBy === "Price_Low_To_High"}
          ></input>
          Price_Low_To_High
        </div>{" "}
        <div className="product-filter-price">
          <input
            name="sorting"
            type="radio"
            onChange={() =>
              dispatch({ type: "sort", payload: "Price_High_To_Low" })
            }
            checked={sortBy && sortBy === "Price_High_To_Low"}
          ></input>
          Price_High_To_Low
        </div>{" "}
        <hr></hr>
        <h4>filter by rating</h4>
        <div className="product-filter-rating">
          <input
            type="checkbox"
            onChange={() => dispatch({ type: "rating", payload: 5 })}
            checked={rating && rating === 5}
          ></input>
          5 star
        </div>
        <div className="product-filter-rating">
          <input
            type="checkbox"
            onChange={() => dispatch({ type: "rating", payload: 4 })}
            checked={rating && rating === 4}
          ></input>
          above 4 star
        </div>{" "}
        <div className="product-filter-rating">
          <input
            type="checkbox"
            onChange={() => dispatch({ type: "rating", payload: 3 })}
            checked={rating && rating === 3}
          ></input>
          above 3 star
        </div>{" "}
        <div className="product-filter-rating">
          <input
            type="checkbox"
            onChange={() => dispatch({ type: "rating", payload: 2 })}
            checked={rating && rating === 2}
          ></input>
          above 2 star
        </div>{" "}
        <div className="product-filter-rating">
          <input
            type="checkbox"
            onChange={() => dispatch({ type: "rating", payload: 1 })}
            checked={rating && rating === 1}
          ></input>
          above 1 star
        </div>
        <hr></hr>
        <button
          className="filter-btn"
          onClick={() => dispatch({ type: "clear" })}
        >
          clear filter
        </button>
      </div>
    </div>
  );
};

export default Filter;

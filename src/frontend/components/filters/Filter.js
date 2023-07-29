import React from "react";
import "./Filter.css";

const Filter = ({ state, dispatch }) => {
  const { sortBy, showmobiles, showlaptops, showtelevision, rating } = {
    ...state,
  };
  return (
    <div className="product-filter">
      <div className="product-filter-container">
        <h3>Filters</h3> <hr />
        <h4>Filter by category</h4>
        <div className="product-filter-category">
          <input
            onChange={() => dispatch({ type: "mobiles" })}
            checked={showmobiles}
            type="checkbox"
          ></input>
          <span>Mobile Phones</span>
        </div>
        <div className="product-filter-category">
          <input
            onChange={() => dispatch({ type: "Laptop" })}
            checked={showlaptops}
            type="checkbox"
          ></input>
          <span>Laptops</span>
        </div>
        <div className="product-filter-category">
          <input
            onChange={() => dispatch({ type: "TV" })}
            checked={showtelevision}
            type="checkbox"
          ></input>
          <span>Televison</span>
        </div>
        <hr></hr>
        <h4>Filter by price</h4>
        <div className="product-filter-price">
          <input
            name="sorting"
            type="radio"
            onChange={() =>
              dispatch({ type: "sort", payload: "Price_Low_To_High" })
            }
            checked={sortBy && sortBy === "Price_Low_To_High"}
          ></input>
          <span>Price_Low_To_High</span>
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
          <span> Price_High_To_Low</span>
        </div>{" "}
        <hr></hr>
        <h4>Filter by rating</h4>
        <div className="product-filter-rating">
          <input
            type="checkbox"
            onChange={() => dispatch({ type: "rating", payload: 5 })}
            checked={rating && rating === 5}
          ></input>
          <span>5 star</span>
        </div>
        <div className="product-filter-rating">
          <input
            type="checkbox"
            onChange={() => dispatch({ type: "rating", payload: 4 })}
            checked={rating && rating === 4}
          ></input>
          <span>above 4 star</span>
        </div>{" "}
        <div className="product-filter-rating">
          <input
            type="checkbox"
            onChange={() => dispatch({ type: "rating", payload: 3 })}
            checked={rating && rating === 3}
          ></input>
          <span> above 3 star</span>
        </div>{" "}
        <div className="product-filter-rating">
          <input
            type="checkbox"
            onChange={() => dispatch({ type: "rating", payload: 2 })}
            checked={rating && rating === 2}
          ></input>
          <span>above 2 star</span>
        </div>{" "}
        <div className="product-filter-rating">
          <input
            type="checkbox"
            onChange={() => dispatch({ type: "rating", payload: 1 })}
            checked={rating && rating === 1}
          ></input>
          <span>above 1 star</span>
        </div>
        <hr></hr>
        <button
          className="filter-btn"
          onClick={() => dispatch({ type: "clear" })}
        >
          <strong>Clear Filter</strong>
        </button>
      </div>
    </div>
  );
};

export default Filter;

import React from "react";
import "./Home.css";
import { useFilter } from "../../contexts/filter-context";
import { Link } from "react-router-dom";
const Home = () => {
  const { state, dispatch } = useFilter();

  const { sortBy, showmobiles, showlaptops, showtelevision, rating } = {
    ...state,
  };
  return (
    <div className="home">
      <div className="hero">
        <div className="hero-img-container">
          <img src="./img/Hero.jpg" alt="hero" className="hero-img" />
        </div>

        <div className="hero-content">
          <Link to="/products">
            <button>
              <strong>Shop now</strong>
            </button>
          </Link>
        </div>
      </div>
      <div className="home-category">
        <h3 className="category-text">Select from the below categories</h3>
      </div>

      <div className="category-list">
        <Link
          to="/products"
          className="category-links"
          onClick={() => dispatch({ type: "mobiles" })}
        >
          <div className="category-items">
            <img src="/img/phone3.jpg" className="category-img" />

            <p className="name">Mobile phones</p>
          </div>
        </Link>
        <Link
          to="/products"
          className="category-links"
          onClick={() => dispatch({ type: "Laptop" })}
        >
          <div className="category-items">
            {" "}
            <img src="/img/laptop4.jpg" className="category-img" />
            <p className="name">Laptops</p>
          </div>{" "}
        </Link>{" "}
        <Link
          to="/products"
          className="category-links"
          onClick={() => dispatch({ type: "TV" })}
        >
          <div className="category-items">
            {" "}
            <img src="/img/tv.jpg" className="category-img" />
            <p className="name">Televison</p>
          </div>
        </Link>{" "}
      </div>
    </div>
  );
};

export default Home;

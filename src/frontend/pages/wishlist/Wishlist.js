import React from "react";
import "./Wishlist.css";
import Card from "../../components/card/Card";
import { useWishlist } from "../../contexts/wishlist-context";
const Wishlist = () => {
  const { wishlist } = useWishlist();

  return (
    <div className="wishlist-container">
      {wishlist?.length === 0 ? (
        <>
          <h1>your wishlist is empty</h1>
        </>
      ) : (
        <>
          {wishlist?.map((p) => (
            <Card key={p._id} items={p} />
          ))}
        </>
      )}
    </div>
  );
};

export default Wishlist;

import React from "react";
import proptype from "prop-types"
const ShoesItem = ({ shoes, addToCart }) => {
  return (
    <div className="border-2 p-5 rounded-md space-y-2">
      <img src={shoes.image} alt="" />
      <h2 className="text-2xl font-semibold">{shoes.name}</h2>
      <p className="text-lg text-gray-500">$ {shoes.price}</p>
      <button
        onClick={() => {
          addToCart(shoes);
        }}
        className="py-2 px-5 bg-blackr rounded-md text-white bg-black"
      >
        Add to cart
      </button>
    </div>
  );
};

export default ShoesItem;



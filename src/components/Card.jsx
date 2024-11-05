import { useState } from "react";

function Card({ discount, image, name, price, rate, id }) {
  const [cart, setCart] = useState([]);
  function addToCart(id) {
    setCart([id, ...cart]);
  }
  return (
    <>
      <div className="h-[300px] w-64 border-solid border-2 border-red-700 p-4">
        <div className="flex justify-between">
          <div className="rounded-lg bg-red-500 flex items-center text-white px-5">
            -{discount}%
          </div>
          <div></div>
          <div>
            <ul>
              <li>Heart</li>
              <li>Eye</li>
            </ul>
          </div>
        </div>
        <button
          className="bg-black text-white"
          onClick={() => {
            addToCart(id);
          }}
        >
          Add to cart
        </button>
      </div>
    </>
  );
}

export default Card;

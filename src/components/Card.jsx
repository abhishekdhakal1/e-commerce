import { useState, useEffect } from "react";
import { FaHeart, FaEye } from "react-icons/fa";
import axios from "axios";
import { useDispatch } from "react-redux";
import { addToCart } from "../context/cart/cartSlice";

function Card() {
  const [products, setProducts] = useState([]);
  const dispatch = useDispatch();

  function handleAddToCart(product) {
    dispatch(addToCart(product));
  }

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => {
        setProducts(res.data);
      })
      .catch((err) => console.error("Error fetching data:", err));
  }, []);

  return (
    <div className="flex flex-wrap justify-center gap-4 p-4">
      {products.map((product) => (
        <div
          key={product.id}
          className="flex flex-col h-80 w-64 border border-gray-200 rounded-lg shadow-lg"
        >
          <div className="relative flex justify-between p-2">
            <div className="h-2 flex justify-center items-center rounded bg-red-500 text-white px-3 py-3 text-sm font-semibold">
              -{product.discount || 10}%
            </div>
            <div className="flex flex-col space-y-2">
              <button className="hover:text-red-500 text-gray-700 bg-gray-100 rounded-full p-2">
                <FaHeart />
              </button>
              <button className="hover:text-blue-500 text-gray-700 bg-gray-100 rounded-full p-2">
                <FaEye />
              </button>
            </div>
          </div>
          <div className="flex-grow self-center overflow-hidden">
            <img
              src={product.image}
              alt={product.title}
              className="h-full w-full"
            />
          </div>
          <div className="flex justify-center">
            {product.title.slice(0, 11)}
          </div>
          <div className="flex justify-center">{product.price}$</div>
          <div className="flex justify-center">{product.rating.rate}</div>
          <div className="p-2">
            <button
              className="w-full bg-black bg-opacity-80 text-white rounded py-2 hover:bg-opacity-90"
              onClick={() => handleAddToCart(product)}
            >
              Add to cart
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Card;

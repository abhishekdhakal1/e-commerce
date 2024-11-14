import { useState, useEffect } from "react";
import { FaHeart, FaEye } from "react-icons/fa";
import axios from "axios";

function Card({ discount, image, name, price, rate, id }) {
  const [cart, setCart] = useState([]);
  const [products, setProducts] = useState([]);

  function addToCart(id) {
    setCart((prevCart) => [id, ...prevCart]); 
  }

  useEffect(() => {
    axios
      .get("https://fake-store-api.mock.beeceptor.com/api/products")
      .then((res) => {
        setProducts(res.data);
      })
      .catch((err) => console.error("Error fetching data:", err));
  }, []);

  return (
    <div
      className="h-[300px] w-64 border border-solid border-red-700 p-4 rounded-lg flex flex-col justify-between bg-cover bg-center text-white"
      style={{ backgroundImage: `url(${image})` }}
    >
      
      <div className="flex justify-between items-center">
        <div className="rounded-lg bg-red-500 flex items-center text-white px-3 py-1">
          -{discount}%
        </div>

     
        <div className="flex flex-col space-y-2">
          <button className="hover:text-red-500">
            <FaHeart />
          </button>
          <button className="hover:text-blue-500">
            <FaEye />
          </button>
        </div>
      </div>

  
      <button
        className="bg-black bg-opacity-80 rounded py-2 mt-4 w-full hover:bg-opacity-90"
        onClick={() => addToCart(id)}
      >
        Add to cart
      </button>

      <div>
        {products.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </div>
    </div>
  );
}

export default Card;

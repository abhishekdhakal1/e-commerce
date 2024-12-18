import { useState, useEffect, useRef } from "react";
import { FaHeart, FaEye, FaArrowLeft, FaArrowRight } from "react-icons/fa";
import axios from "axios";
import { useDispatch } from "react-redux";
import { addToCart } from "../context/cart/cartSlice";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

function Card() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const swiperRef = useRef(null);
  const dispatch = useDispatch();

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => {
        setProducts(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching data:", err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div className="text-center">Loading products...</div>;
  }

  if (products.length === 0) {
    return <div className="text-center">No products available.</div>;
  }

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-xl font-bold">Today&apos;s Sale</h1>
        <div className="flex space-x-4">
          <button
            className="flex items-center justify-center"
            onClick={() => swiperRef.current.swiper.slidePrev()}
          >
            <FaArrowLeft className="text-xl" />
          </button>
          <button
            className="flex items-center justify-center"
            onClick={() => swiperRef.current.swiper.slideNext()}
          >
            <FaArrowRight className="text-xl" />
          </button>
        </div>
      </div>

      <Swiper spaceBetween={10} slidesPerView={3.5} loop ref={swiperRef}>
        {products.map((product) => (
          <SwiperSlide key={product.id}>
            <div className="flex flex-col h-80 w-full border border-gray-200 rounded-lg shadow-lg">
              <div className="relative flex justify-between p-2">
                <div className="h-2 flex justify-center items-center rounded bg-red-500 text-white px-3 py-3 text-sm font-semibold">
                  -{product.discount || 10}%
                </div>
                <div className="flex flex-col space-y-2">
                  <button className="hover:text-red-400 text-gray-700 bg-gray-100 rounded-full p-2">
                    <FaHeart />
                  </button>
                  <button className="hover:text-blue-400 text-gray-700 bg-gray-100 rounded-full p-2">
                    <FaEye />
                  </button>
                </div>
              </div>
              <div className="flex-grow self-center overflow-hidden">
                <img
                  src={product.image}
                  alt={product.title}
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="flex justify-center font-bold text-sm">
                {product.title.slice(0, 15)}
              </div>
              <div className="flex justify-center text-lg font-semibold">
                ${product.price.toFixed(2)}
              </div>
              <div className="flex justify-center items-center text-sm">
                Rating: {product.rating.rate} ⭐
              </div>
              <div className="p-2">
                <button
                  className="w-full bg-black bg-opacity-90 text-white rounded py-2 hover:bg-opacity-90"
                  onClick={() => dispatch(addToCart(product))}
                >
                  Add to cart
                </button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default Card;

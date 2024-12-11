import { IoPhonePortraitOutline } from "react-icons/io5";
import { MdPhonelink, MdOutlineCameraAlt } from "react-icons/md";
import { GiHeadphones, GiGamepad } from "react-icons/gi";
import { BsSmartwatch } from "react-icons/bs";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { useRef } from "react";

function Categories() {
  const categories = [
    { name: "Phones", icon: <IoPhonePortraitOutline /> },
    { name: "Computers", icon: <MdPhonelink /> },
    { name: "SmartWatch", icon: <BsSmartwatch /> },
    { name: "Camera", icon: <MdOutlineCameraAlt /> },
    { name: "HeadPhones", icon: <GiHeadphones /> },
    { name: "Gaming", icon: <GiGamepad /> },
  ];

  const swiperRef = useRef(null);

  const handleSlidePrev = () => {
    swiperRef.current?.slidePrev();
  };

  const handleSlideNext = () => {
    swiperRef.current?.slideNext();
  };

  return (
    <div className="p-6">
      <div className="mb-4">
        <h2 className="text-xl font-semibold text-red-500">Categories</h2>
      </div>
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-2xl font-bold">Browse by Category</h2>
        <div className="flex space-x-4">
          <FaArrowLeft
            onClick={handleSlidePrev}
            className="text-xl cursor-pointer hover:text-red-500"
          />
          <FaArrowRight
            onClick={handleSlideNext}
            className="text-xl cursor-pointer hover:text-red-500"
          />
        </div>
      </div>
      <Swiper
        spaceBetween={10}
        slidesPerView={3.5}
        loop
        onSwiper={(swiper) => (swiperRef.current = swiper)}
      >
        {categories.map((category, index) => (
          <SwiperSlide
            key={index}
            className="flex flex-col items-center justify-center w-[30%] p-4 text-center border rounded-lg space-y-2 bg-gray-100 hover:bg-red-500 hover:text-white transition-all duration-300 cursor-pointer"
          >
            <div className="text-3xl">{category.icon}</div>
            <span className="text-lg font-medium">{category.name}</span>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default Categories;

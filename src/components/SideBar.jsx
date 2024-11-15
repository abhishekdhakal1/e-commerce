import { useState } from "react";
import myImage from "../assets/img.png";

function SideBar() {
  const [showWomenSub, setShowWomenSub] = useState(false);
  const [showMenSub, setShowMenSub] = useState(false);

  return (
    <div className="flex items-start bg-white text-gray-700 p-4">
      <ul className="flex flex-col space-y-4 text-lg">
        <li
          className="cursor-pointer hover:text-black flex items-center gap-x-4"
          onClick={() => setShowWomenSub(!showWomenSub)}
        >
          <span className="self-start">Women's Fashion</span>
          <span className="font-bold flex items-center justify-center self-end">
            {showWomenSub ? "v" : ">"}
          </span>
        </li>
        {showWomenSub && (
          <ul className="text-sm">
            <li className="cursor-pointer hover:text-black">Dresses</li>
            <li className="cursor-pointer hover:text-black">Tops</li>
            <li className="cursor-pointer hover:text-black">Shoes</li>
          </ul>
        )}

        <li
          className="cursor-pointer hover:text-black flex items-center gap-x-10"
          onClick={() => setShowMenSub(!showMenSub)}
        >
          <span>Men's Fashion</span>
          <span className="font-bold flex items-center justify-center self-end">
            {showMenSub ? "v" : ">"}
          </span>
        </li>
        {showMenSub && (
          <ul className="ml-4 space-y-2 text-sm text-gray-500">
            <li className="cursor-pointer hover:text-black">Shirts</li>
            <li className="cursor-pointer hover:text-black">Pants</li>
            <li className="cursor-pointer hover:text-black">Shoes</li>
          </ul>
        )}

        <li className="cursor-pointer hover:text-black">Electronics</li>
        <li className="cursor-pointer hover:text-black">Home & Lifestyle</li>
        <li className="cursor-pointer hover:text-black">Medicine</li>
        <li className="cursor-pointer hover:text-black">Sports & Outdoor</li>
        <li className="cursor-pointer hover:text-black">Baby's & Toys</li>
        <li className="cursor-pointer hover:text-black">Groceries & Pets</li>
        <li className="cursor-pointer hover:text-black">Health & Beauty</li>
      </ul>

      <img src={myImage} alt="Sidebar Icon" className="ml-4" />
    </div>
  );
}

export default SideBar;

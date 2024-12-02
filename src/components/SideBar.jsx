import { useState } from "react";
import myImage from "../assets/img.png";

function SideBar() {
  const [showWomenSub, setShowWomenSub] = useState(false);
  const [showMenSub, setShowMenSub] = useState(false);

  const symbol = ">";

  const categories = [
    {
      title: "Women's Fashion",
      subItems: ["Dresses", "Tops", "Shoes"],
      showSub: showWomenSub,
      toggleSub: () => setShowWomenSub(!showWomenSub),
    },
    {
      title: "Men's Fashion",
      subItems: ["Shirts", "Pants", "Shoes"],
      showSub: showMenSub,
      toggleSub: () => setShowMenSub(!showMenSub),
    },
    { title: "Electronics" },
    { title: "Home & Lifestyle" },
    { title: "Medicine" },
    { title: "Sports & Outdoor" },
    { title: "Baby's & Toys" },
    { title: "Groceries & Pets" },
    { title: "Health & Beauty" },
  ];

  return (
    <div className="flex items-start justify-around text-black text-base bg-primaryWhite p-4">
      <ul className="flex flex-col gap-3 text-lg w-52">
        {categories.map((category, index) => (
          <li key={index} className="cursor-pointer">
            <div
              className="flex items-center justify-between w-full"
              onClick={category.toggleSub}
            >
              <span>{category.title}</span>
              {category.subItems && (
                <span
                  className={`transform transition-transform duration-200 ${
                    category.showSub ? "rotate-90" : ""
                  }`}
                >
                  {symbol}
                </span>
              )}
            </div>
            {category.showSub && category.subItems && (
              <ul className="ml-4 space-y-2 text-sm text-gray-500">
                {category.subItems.map((item, subIndex) => (
                  <li
                    key={subIndex}
                    className="cursor-pointer hover:text-black"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
      <img src={myImage} alt="Sidebar Icon" />
    </div>
  );
}

export default SideBar;

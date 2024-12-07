import { IoPhonePortraitOutline } from "react-icons/io5";
import { MdPhonelink, MdOutlineCameraAlt } from "react-icons/md";
import { GiHeadphones, GiGamepad } from "react-icons/gi";
import { BsSmartwatch } from "react-icons/bs";
import { useState } from "react";

function Categories() {
  const [viewAll, setViewAll] = useState(false);
  const categories = [
    { name: "Phones", icon: <IoPhonePortraitOutline /> },
    { name: "Computers", icon: <MdPhonelink /> },
    { name: "SmartWatch", icon: <BsSmartwatch /> },
    { name: "Camera", icon: <MdOutlineCameraAlt /> },
    { name: "HeadPhones", icon: <GiHeadphones /> },
    { name: "Gaming", icon: <GiGamepad /> },
  ];
  const category = [
    { name: "Phones", icon: <IoPhonePortraitOutline /> },
    { name: "Computers", icon: <MdPhonelink /> },
    { name: "SmartWatch", icon: <BsSmartwatch /> },
  ];

  function display() {
    setViewAll(!viewAll);
  }

  return (
    <div className="p-6">
      <div className="mb-4">
        <h2 className="text-xl font-semibold text-red-500">Categories</h2>
      </div>
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold mb-6">Browse by Category</h2>
        <button onClick={display} className="p-1 rounded bg-red-500 text-white">
          {viewAll ? "View Less" : "View All Categories"}
        </button>
      </div>
      <div className="flex flex-wrap justify-between gap-6">
        {(viewAll ? categories : category).map((category, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center w-[30%] p-4 text-center border rounded-lg space-y-2 bg-gray-100 hover:bg-red-500 hover:text-white transition-all duration-300 cursor-pointer"
          >
            <div className="text-3xl">{category.icon}</div>
            <span className="text-lg font-medium">{category.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Categories;

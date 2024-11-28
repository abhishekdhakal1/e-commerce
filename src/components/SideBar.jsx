function SideBar() {
  return (
    <nav className="w-64 bg-white text-gray-700 p-6 shadow-md">
      <ul className="space-y-4 text-lg">
        <li className="cursor-pointer hover:text-black flex justify-between items-center">
          <span>Women's Fashion</span>
          <span>&gt;</span>
        </li>
        <li className="cursor-pointer hover:text-black flex justify-between items-center">
          <span>Men's Fashion</span>
          <span>&gt;</span>
        </li>
        <li className="cursor-pointer hover:text-black flex justify-between items-center">
          <span>Electronics</span>
          <span>&gt;</span>
        </li>
        <li className="cursor-pointer hover:text-black flex justify-between items-center">
          <span>Home & Lifestyle</span>
          <span>&gt;</span>
        </li>
        <li className="cursor-pointer hover:text-black flex justify-between items-center">
          <span>Medicine</span>
          <span>&gt;</span>
        </li>
        <li className="cursor-pointer hover:text-black flex justify-between items-center">
          <span>Sports & Outdoor</span>
          <span>&gt;</span>
        </li>
        <li className="cursor-pointer hover:text-black flex justify-between items-center">
          <span>Baby's & Toys</span>
          <span>&gt;</span>
        </li>
        <li className="cursor-pointer hover:text-black flex justify-between items-center">
          <span>Groceries & Pets</span>
          <span>&gt;</span>
        </li>
        <li className="cursor-pointer hover:text-black flex justify-between items-center">
          <span>Health & Beauty</span>
          <span>&gt;</span>
        </li>
      </ul>
    </nav>
  );
}

export default SideBar;

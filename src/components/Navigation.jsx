import { CiSearch, CiHeart, CiShoppingCart } from "react-icons/ci";
function Navigation() {
  return (
    <>
      <div className="h-12 flex items-center justify-between bg-black text-white px-4">
        <div className="flex-1 flex justify-center space-x-4">
          <span>
            Summer Sale For all Swim Suits And Free Express Delivery - OFF 50%!
          </span>
          <a href="#" className="underline decoration-1">
            Shop Now
          </a>
        </div>

        <div className="flex items-center space-x-4">
          <select className="bg-black text-white border-none">
            <option value="English">English</option>
            <option value="French">Nepali</option>
          </select>
        </div>
      </div>
      <div className="flex justify-between list-none">
        {" "}
        <div className="flex-1 flex justify-center font-bold">Exclusive</div>
        <div className="flex space-x-10">
          <li>Home</li>
          <li>Contact</li>
          <li>About</li>
          <li>Sign Up</li>
        </div>
        <div className="flex-1 flex justify-center items-center space-x-8 text-xl">
          <li>
            {" "}
            <input
              type="text"
              placeholder="What are you looking for? "
              className="rounded outline-none text-black focus:ring-0 text-xs"
            />
          </li>
          <li>
            <CiSearch />
          </li>
          <li>
            <CiHeart />
          </li>
          <li>
            <CiShoppingCart />
          </li>
        </div>
      </div>
    </>
  );
}
export default Navigation;

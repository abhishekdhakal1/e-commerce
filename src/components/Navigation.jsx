import { CiSearch, CiHeart, CiShoppingCart } from "react-icons/ci";
function Navigation() {
  return (
    <>
      {/* navdiv */}
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

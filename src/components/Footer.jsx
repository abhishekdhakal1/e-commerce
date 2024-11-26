import { GoPaperAirplane } from "react-icons/go";

function Footer() {
  return (
    <>
      <div className="bg-black text-primaryWhite text-center pt-5">
        <div className="flex justify-around items-center ">
          <div className="flex flex-col gap-2">
            <span className="font-bold text-2xl">Exclusive</span>
            <span className="text-xl">Subscribe</span>
            <div className="rounded p-1 flex items-center gap-0 border-2 border-primaryWhite">
              {" "}
              <input
                type="text"
                placeholder="Enter your first email"
                className="bg-transparent outline-none"
              />
              <GoPaperAirplane />
            </div>
          </div>
          <div>2</div>
          <div>3</div>
          <div>4</div>
          <div>5</div>
        </div>
        <span className="opacity-60">
          &copy; Copyright Rimel 2022. All rights reserved
        </span>
      </div>
    </>
  );
}
export default Footer;

import { GoPaperAirplane } from "react-icons/go";
import qrImage from "../assets/qr.png";
import {
  RiFacebookLine,
  RiInstagramLine,
  RiLinkedinLine,
  RiTwitterLine,
} from "react-icons/ri";

function Footer() {
  return (
    <div className="h-[440px] bg-black text-primaryWhite flex flex-col justify-between">
      <div className="flex justify-around items-center flex-grow">
        <div className="flex flex-col gap-2">
          <span className="font-bold text-2xl">Exclusive</span>
          <span className="text-xl">Subscribe</span>
          <span>Get 10% off your first order</span>
          <div className="rounded p-1 flex items-center gap-0 border-2 border-primaryWhite">
            <input
              type="text"
              placeholder="Enter your first email"
              className="bg-transparent outline-none"
            />
            <GoPaperAirplane />
          </div>
        </div>

        <div className="flex flex-col gap-2 text-base">
          <span className="text-xl">Support</span>
          <span>
            111 Bijoy sarani, Dhaka,
            <br />
            DH 1515, Bangladesh.
          </span>
          <span>exclusive@gmail.com</span>
          <span>+88015-88888-9999</span>
        </div>

        <div className="flex flex-col gap-2 text-base">
          <span className="text-xl">Account</span>
          <span>My Account</span>
          <span>Login / Register</span>
          <span>Cart</span>
          <span>Whilist</span>
          <span>Shop</span>
        </div>

        <div className="flex flex-col gap-2 text-base">
          <span className="text-xl">Quick Link</span>
          <span>Privacy Policy</span>
          <span>Terms Of Use</span>
          <span>FAQ</span>
          <span>Contact</span>
        </div>

        <div className="flex flex-col gap-2 text-base">
          <span>Download App</span>
          <span>Save $3 with App New User Only</span>
          <div>
            <img src={qrImage} alt="QR code" className="object-cover" />
          </div>
          <div className="text-primaryWhite flex gap-2 text-2xl">
            <RiFacebookLine />
            <RiTwitterLine />
            <RiInstagramLine />
            <RiLinkedinLine />
          </div>
        </div>
      </div>
      <span className="opacity-60 text-center py-2">
        &copy; Copyright Rimel 2022. All rights reserved
      </span>
    </div>
  );
}

export default Footer;

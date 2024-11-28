import bannerImage from "../assets/img.png";

function PromotionalBanner() {
  return (
    <div className="flex-grow bg-black text-white rounded-lg overflow-hidden">
      <div className="relative">
        <img
          src={bannerImage}
          alt="Promotional Banner"
          className="w-full h-60 object-cover"
        />
        <div className="absolute inset-0 flex flex-col justify-center items-start p-6">
          <h2 className="text-xl font-semibold">iPhone 14 Series</h2>
          <p className="text-3xl font-bold">Up to 10% off Voucher</p>
          <button className="bg-white text-black px-4 py-2 rounded-lg font-medium hover:bg-gray-200 mt-4">
            Shop Now →
          </button>
        </div>
      </div>
    </div>
  );
}

export default PromotionalBanner;

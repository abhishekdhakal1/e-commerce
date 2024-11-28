function Slider() {
  return (
    <div className="bg-black text-white rounded-lg p-6 shadow-md flex items-center justify-between">
      {/* Promotional Content */}
      <div>
        <h2 className="text-lg font-bold mb-2">iPhone 14 Series</h2>
        <p className="text-xl">Up to 10% off Voucher</p>
        <button className="mt-4 px-4 py-2 bg-white text-black font-bold rounded-lg">
          Shop Now →
        </button>
      </div>

      {/* Promotional Image */}
      <img
        src="/path-to-banner-image.png" // Replace with actual image path
        alt="iPhone 14 Promo"
        className="w-48 rounded-lg"
      />
    </div>
  );
}

export default Slider;

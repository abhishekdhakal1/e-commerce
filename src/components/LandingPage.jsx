function LandingPage() {
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
    </>
  );
}

export default LandingPage;

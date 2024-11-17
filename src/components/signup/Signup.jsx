import image from "../../assets/signup-image.jpg";

function Signup() {
  return (
    <>
      <div className="flex justify-between items-center">
        <div className="flex-1">
          <img src={image} alt="Signup illustration" className="w-full max-w-xs object-contain" />
        </div>

    
        <div className="flex-1">
          <p className="text-lg font-medium">This is for Signup form</p>
        </div>
      </div>
    </>
  );
}

export default Signup;

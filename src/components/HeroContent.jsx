import React from "react";
import { useNavigate } from "react-router-dom";

export default function HeroContent() {
  const navigate = useNavigate();

  const logIn = () => navigate("/login");
  const goToRegister = () => navigate("/register");

  return (
    <div className="absolute inset-0 z-20 flex items-center">
      <div className="container mx-auto px-6 flex flex-col gap-4 items-center lg:items-start justify-center">
        {/* العناوين */}
        <div className="text-white text-center max-w-lg">
          <h2 className="text-3xl font-bold mb-2">The Biggest Chance</h2>
          <h1 className="text-4xl lg:text-5xl font-extrabold mb-4">
            3 Minutes to Go Pro
          </h1>
        </div>

        

       
        <div className="flex gap-4 lg:ms-28 items-center justify-center p-5">
          <button
            onClick={logIn}
            className="btn bg-amber-50 text-black w-full hover:bg-black hover:text-white rounded shadow"
          >
            Login
          </button>
          <button
            onClick={goToRegister}
            className="btn bg-amber-50 text-black w-full hover:bg-black hover:text-white rounded shadow"
          >
            Register
          </button>
        </div>
      </div>
    </div>
  );
  // انا عايز هنا لسه اعمل صفحه لوجين وريجستر متنساش 
}

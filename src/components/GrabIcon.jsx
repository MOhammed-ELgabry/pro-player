

import React from "react";
import { useNavigate } from "react-router-dom";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";

export default function GrabIcon({ text = "Grab the chance", link = "/" }) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/register');
  };

  return (
    <button
      onClick={handleClick}
      className="grab-btn fixed bottom-6 right-6 z-[9999] bg-green-500 text-white font-semibold px-6 py-3 rounded-full shadow-lg hover:bg-green-600 transition flex items-center gap-2"
    >
      {text}
      <FaArrowUpRightFromSquare size={22} />
    </button>
  );
}

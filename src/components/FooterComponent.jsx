// FooterComponent.jsx
import React from "react";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";

export default function FooterComponent({ footer, domain, fallbackImage }) {
  if (!footer) return null;

  return (
    <footer className="flex justify-center w-full bg-green-950 rounded shadow p-8">
      <div className="container flex flex-col lg:flex-row justify-center items-center gap-8">
        <div className="flex flex-col justify-center items-center text-center gap-7">
          <h3 className="text-white text-2xl font-extrabold">{footer.h3 || ""}</h3>
          <h4 className="text-white text-2xl font-bold">{footer.h4 || ""}</h4>
          <p className="text-white font-medium">{footer.pargraph || ""}</p>
          <div className="grid grid-cols-3">
            <div className="bg-green-950 p-4 text-center flex flex-col border border-green-200">
              <p className="text-green-500 text-[20px]">{footer.trainer}+</p>
              <p className="text-white font-bold">Trainees</p>
            </div>
            <div className="bg-green-950 p-4 text-center flex flex-col border border-green-300">
              <p className="text-green-500 text-[20px]">{footer.age}+</p>
              <p className="text-white font-bold">Age Distribution</p>
            </div>
            <div className="bg-green-950 p-4 text-center flex flex-col border border-green-400">
              <p className="text-green-500 text-[20px]">{footer.member}%</p>
              <p className="text-white font-bold">Total Members</p>
            </div>
          </div>
          <button className="btn rounded-3xl p-4 shadow bg-green-500 text-white">
            Contact Us <FaArrowUpRightFromSquare className="text-white text-2xl" />
          </button>
        </div>
        <div>
          <img
            src={footer.img?.url ? domain + footer.img.url : fallbackImage}
            alt="footer"
            className="max-w-[300px] object-contain"
          />
        </div>
      </div>
    </footer>
  );
}

import React, { useEffect } from "react";
import { FaEye, FaStar } from "react-icons/fa6";
import cardImg from "../assets/image/9805bd3eac3689e1689aa31597735d31fb272fbf.jpg";
import { RiArrowRightUpBoxLine, RiArrowRightUpLine } from "react-icons/ri";

const PlayersGrid = ({ viewPlayer, setViewPlayer, realPlayer }) => {
 // انا لسه هعمل هنا البيانات تيجي من التوكين وهستخدم زوستاند 
  useEffect(() => {
    if (!realPlayer) return;

    setViewPlayer((prev) => {
      const index = prev.findIndex((p) => p.isDummy);
      if (index === -1) return prev;

      const updated = [...prev];
      updated[index] = {
        ...realPlayer,
        isDummy: false,
        image: cardImg,
        views: 1,
        rating: 4.5,
      };

      return updated;
    });
  }, [realPlayer, setViewPlayer]);

  return (
    <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-5">
      {viewPlayer.map((player) => (
        <div key={player.id} className="card shadow-4xl rounded-3xl relative">
          {/* Views */}
          <div className="absolute top-3 left-3 z-10 bg-black/60 text-white text-sm px-3 py-1 rounded-t-2xl flex items-center gap-1">
            <FaEye />
            <span>{player.views}</span>
          </div>

          {/* Rating */}
          <div className="absolute top-3 right-3 z-10 bg-black/60 text-yellow-400 text-sm px-3 py-1 rounded-full flex items-center gap-1">
            <FaStar />
            <span>{player.rating}</span>
          </div>

          <figure>
            <img src={player.image} className="rounded-t-2xl" />
          </figure>

          <div className="card-body bg-[rgba(0,191,122,.8)] rounded-b-3xl">
            <h2 className="card-title">
              {player.isDummy ? "Available Slot" : player.name}
            </h2>
            <p>
              {player.isDummy ? "Waiting for player" : "View player profile"}
            </p>
          </div>
           
        </div>
        
       
      ))}
      
      <div className=" w-full p-3"><button className="btn px-8 py-6 text-white rounded-2xl shadow bg-green-500 text-2xl">See More <RiArrowRightUpBoxLine className="text-white text-3xl" /></button></div>
    </div>
  );
};
// متنساش الزرار ده عايزه يوديني علي صفحه عرض لعيبه وعايز اعمل فيها pagination
export default PlayersGrid;

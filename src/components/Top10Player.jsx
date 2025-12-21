// Top10Player.jsx
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { FaTrophy } from "react-icons/fa";

const Top10Player = ({ top10, domain, fallbackImage }) => {
  return (
    <section className="w-full py-12 px-4 bg-green-900 rounded-2xl shadow-2xl">
      <h2 className="text-white text-3xl font-bold text-center mb-6 flex gap-2 justify-center items-center">
        <FaTrophy size={32} color="#facc15" /> Top 10 Players
      </h2>

      <Swiper
        modules={[Navigation, Autoplay]}
        navigation
        spaceBetween={20}
        slidesPerView={5}
        autoplay={{ delay: 2500, disableOnInteraction: false }}
        breakpoints={{
          0: { slidesPerView: 1.2 },
          640: { slidesPerView: 2.3 },
          1024: { slidesPerView: 5 },
        }}
      >
        {top10.map((player) => (
          <SwiperSlide key={player.id}>
            <div className="bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:scale-110 hover:shadow-2xl hover:z-50 relative cursor-pointer">
              <img
                src={
                  player?.attributes?.image?.data?.attributes?.url
                    ? `${domain}${player.attributes.image.data.attributes.url}`
                    : fallbackImage
                }
                alt={player?.attributes?.name || "Player"}
                className="w-full h-[150px] object-cover rounded shadow"
              />
              <div className="p-2 text-center">
                <h4 className="font-semibold text-sm">{player?.attributes?.name || "Unknown"}</h4>
                <p className="text-xs text-gray-500">{player?.attributes?.position || "Unknown"}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Top10Player;

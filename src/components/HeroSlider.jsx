import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

export default function HeroSlider({ slides }) {

  // انا لسه هنا عايز اظبط الصور متنساش
  const domain = "http://localhost:1337"; // لو الصور من Strapi

  if (!slides || slides.length === 0) return null;

  return (
    <Swiper
      modules={[Autoplay, Pagination]}
      slidesPerView={1}
      loop={slides.length > 1}
      autoplay={{ delay: 3000 }}
      pagination={{ clickable: true }}
      className="h-screen"
    >
      {slides.map((el) =>
        el.hero?.map((img, i) => {
          const bgUrl = domain + img.url;
          return (
            <SwiperSlide key={`${el.id}-${i}`}>
              <div
                className="w-full min-h-screen bg-cover bg-center relative"
                style={{ backgroundImage: `url(${bgUrl})` }}
              >
                <div className="absolute inset-0 bg-black/40"></div>
              </div>
            </SwiperSlide>
          );
        })
      )}
    </Swiper>
  );
}

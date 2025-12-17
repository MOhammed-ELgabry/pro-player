

import React, { useEffect, useState } from "react";
import axios from "axios";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";


import NavBar from "../components/NavBar";
import HeroSlider from "../components/HeroSlider";
import HeroContent from "../components/HeroContent";
import GrabIcon from "../components/GrabIcon";
import AboutSection from "../components/AboutSection";
import { FaTrophy } from "react-icons/fa6";

export default function HomePage() {
  const domain = "http://localhost:1337";
  const heroEndPoint = "/api/hero-sections?populate=*";
  const aboutEndPoint = "/api/aboutuses?populate=*";
  const topEndPoint = "/api/top10s?populate=*";

  const [slides, setSlides] = useState([]);
  const [aboutImage, setAboutImage] = useState([]);
  const [top10, setTop10] = useState([]);

  
  const fallbackImage =
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJ4AAACUCAMAAABVwGAvAAAAVFBMVEXu7u5mZmbz8/NcXFzKysrGxsbZ2dmEhISNjY2RkZGAgIBjY2NgYGD39/dZWVmJiYm3t7eXl5dtbW2tra2np6fQ0NBzc3Oenp7f3996enro6Oi9vb1dpHnKAAABuklEQVR4nO3Y2XKCMBhAYRIsLkk0goDV93/PBlA2tTPpRZLOnO/S0vHMn6XWLAMAAAAAAAAAAAAAAAA+k/4CxtUbb3XAvp3OfZ0D5m2318LL9XsfMm9n/PafOQTP8yHTzkt8eknlGWNWMQnlyZs9t6trLqG86+Gota4WOenkmTYXQihVzHvSybuVonOs0szLnnnzR+LmLQZ1Ul2ertOZnp2tpCkarZRukzka0iptp3eXxb75tstfiJcnM+uOal5NP5XuWjarFY+WZ+7DXrMvp8V9UBkfipZnjy6udLvt8vJYu3k2xcoztp9dfxEvrhI3u8tRFCZqnuxn9+jT1eKh1h3gcmMi5plKzChxGefnZqe7HVkOf9si5N3c7LRY9OnpPrmoftVV01/PMabn9p0Syz71uJ9l+wzv5idj5Em7iuvk9z6jmsaqmiJ8nnszq9/kdedDZv1nqvGlsg79n9rJyJeVfa6mHU7FrK8pgi/u6lTM+w7rbt0Up6B5+/v70Q01r680TcgvMU6l+CXvbXLQvI8rm0ye3/iY3kh65ymmN6m/vNXh6v7yzXfA4QEAAAAAAAAAAAAAAOD/+QFsphmLVIOvHwAAAABJRU5ErkJggg==";

  
  useEffect(() => {
    axios
      .get(`${domain}${heroEndPoint}`)
      .then((res) => {
        const dataWithId = res.data.data.map((el) => ({
          ...el,
          documentId: el.id,
        }));
        setSlides(dataWithId);
      })
      .catch((err) => console.log(err));
  }, []);

  
  useEffect(() => {
    axios
      .get(`${domain}${aboutEndPoint}`)
      .then((res) => setAboutImage(res.data.data || []))
      .catch((err) => console.log(err));
  }, []);

 
  useEffect(() => {
    axios
      .get(`${domain}${topEndPoint}`)
      .then((res) => {
        const data = res.data.data || [];
        if (data.length === 0) {
          // Create 10 dummy players
          const dummy = Array.from({ length: 10 }, (_, i) => ({
            id: i,
            attributes: {
              name: `Player ${i + 1}`,
              position: "Unknown",
              image: { data: null },
            },
          }));
          setTop10(dummy);
        } else {
          setTop10(data);
        }
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="relative w-full">
    
      <NavBar />

     
      <div className="relative w-full">
        <HeroSlider slides={slides} />
        <HeroContent />
        <GrabIcon />
      </div>

     
      <AboutSection aboutImage={aboutImage} domain={domain} />

      
      <section className="w-full py-12 px-4 bg-green-900">
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
              <div
                className="
                  bg-white rounded-xl shadow-md overflow-hidden
                  transition-all duration-300
                  hover:scale-110 hover:shadow-2xl hover:z-50
                  relative cursor-pointer
                "
              >
                <img
                  src={
                    player?.attributes?.image?.data?.attributes?.url
                      ? `${domain}${player.attributes.image.data.attributes.url}`
                      : fallbackImage
                  }
                  alt={player?.attributes?.name || "Player"}
                  className="w-full h-[150px] object-cover"
                />
                <div className="p-2 text-center">
                  <h4 className="font-semibold text-sm">
                    {player?.attributes?.name || "Unknown"}
                  </h4>
                  <p className="text-xs text-gray-500">
                    {player?.attributes?.position || "Unknown"}
                  </p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
    </div>
  );
}

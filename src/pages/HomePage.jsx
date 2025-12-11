

// import axios from "axios";
// import { useEffect, useState } from "react";


// import { Swiper, SwiperSlide } from "swiper/react";


// import { Autoplay } from "swiper/modules";
// import { Navigation } from "swiper/modules";
// import { Pagination } from "swiper/modules";


// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/pagination";
// import { NavLink } from "react-router-dom";
// import logo from "../assets/image/WhatsApp_Image_2025-12-10_at_10.41.52_AM-removebg-preview.png"
// export default function HomePage() {
//   const domain = "http://localhost:1337";
//   const endPoint = "/api/hero-sections?populate=*";

//   const [slides, setSlides] = useState([]);

//   useEffect(() => {
//     axios
//       .get(domain + endPoint)
//       .then((res) => setSlides(res.data.data || []))
//       .catch((err) => console.log(err));
//   }, []);

//   return (
//    <div>
//     <div className="w-full h-screen position-relative">
//      <div className="container flex justify-between  items-center">
// <NavLink to="/"   ><img src={ logo} alt="" className="w-[200px] h-[70px] object-center"/></NavLink>
// <NavLink to="/menu" className="text-2xl font-bold text-white border rounded-3xl p-2 shadow hover:bg-green-500  transition duration-300 ">Home Page</NavLink>
// <NavLink to="/"className="text-2xl font-bold text-white border rounded-3xl p-2 shadow hover:bg-green-500  transition duration-300 ">About US</NavLink>
// <NavLink to="/" className="text-2xl font-bold text-white border rounded-3xl p-2 shadow hover:bg-green-500  transition duration-300 ">Contact Us</NavLink>
// <NavLink to="/"  className="text-2xl font-bold text-white border rounded-3xl p-2 shadow hover:bg-green-500  transition duration-300 " >Grab the chance</NavLink>
//      </div>
//       {slides.length > 0 && (
//         <Swiper
//           modules={[Autoplay, Navigation, Pagination]}
//           spaceBetween={0}
//           slidesPerView={1}
//           loop={slides.length > 1}
//           autoplay={{ delay: 3000, disableOnInteraction: false }}
//           navigation
//           pagination={{ clickable: true }}
//         >
//           {slides.map((el) =>
//             el.hero?.map((img, i) => {
//               const bgUrl = domain + img.url;
//               return (
//                 <SwiperSlide key={`${el.id}-${i}`}>
//                   <div
//                     className="w-full h-screen bg-cover bg-center"
//                     style={{ backgroundImage: `url(${bgUrl})` }}
//                   >
//                     <div className="w-full h-full bg-black/40 flex items-center justify-center">
                      
//                     </div>
//                   </div>
//                 </SwiperSlide>
//               );
//             })
//           )}
//         </Swiper>
      
      
//       )}
    
// </div>
// </div>
//   );
// }




import axios from "axios";
import { useEffect, useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { NavLink } from "react-router-dom";
import logo from "../assets/image/WhatsApp_Image_2025-12-10_at_10.41.52_AM-removebg-preview.png";

export default function HomePage() {
  const domain = "http://localhost:1337";
  const endPoint = "/api/hero-sections?populate=*";

  const [slides, setSlides] = useState([]);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    axios
      .get(domain + endPoint)
      .then((res) => setSlides(res.data.data || []))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="relative w-full h-screen">

      {/* 🔥 NAVBAR */}
      <div className="absolute top-0 left-0 w-full z-50 bg-transparent">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">

          {/* Logo */}
          <NavLink to="/">
            <img
              src={logo}
              alt="logo"
              className="w-[160px] h-[80px] object-contain"
            />
          </NavLink>

          {/* Desktop Links */}
          <div className="hidden lg:flex gap-4">
            <NavLink
              to="/menu"
              className="text-xl font-semibold text-white border rounded-3xl px-4 py-2 shadow hover:bg-green-500 transition"
            >
              Home Page
            </NavLink>

            <NavLink
              to="/"
              className="text-xl font-semibold text-white border rounded-3xl px-4 py-2 shadow hover:bg-green-500 transition"
            >
              About Us
            </NavLink>

            <NavLink
              to="/"
              className="text-xl font-semibold text-white border rounded-3xl px-4 py-2 shadow hover:bg-green-500 transition"
            >
              Contact Us
            </NavLink>
          </div>

          {/* 🔥 Mobile Menu Icon */}
          <button
            className="lg:hidden text-white text-3xl"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            ☰
          </button>
        </div>

        {/* 🔥 Mobile Menu Drawer */}
        {menuOpen && (
          <div className="lg:hidden bg-black/80 text-white py-4 flex flex-col gap-4 px-6">
            <NavLink
              to="/menu"
              className="text-lg border p-2 rounded-xl"
              onClick={() => setMenuOpen(false)}
            >
              Home Page
            </NavLink>

            <NavLink
              to="/"
              className="text-lg border p-2 rounded-xl"
              onClick={() => setMenuOpen(false)}
            >
              About Us
            </NavLink>

            <NavLink
              to="/"
              className="text-lg border p-2 rounded-xl"
              onClick={() => setMenuOpen(false)}
            >
              Contact Us
            </NavLink>
          </div>
        )}
      </div>

      {/* 🔥 ثابت — Grab the chance */}
      <NavLink
        to="/"
        className="fixed bottom-4 right-4 z-[9999] bg-green-500 text-white font-semibold px-6 py-3 rounded-full shadow-lg hover:bg-green-600 transition"
      >
        Grab the chance
      </NavLink>

      {/* 🔥 Slider */}
      {slides.length > 0 && (
        <Swiper
          modules={[Autoplay, Navigation, Pagination]}
          spaceBetween={0}
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
                    className="w-full min-h-screen bg-cover bg-center"
                    style={{ backgroundImage: `url(${bgUrl})` }}
                  >
                    <div className="w-full h-full bg-black/40"></div>
                  </div>
                </SwiperSlide>
              );
            })
          )}
        </Swiper>
      )}
    </div>
  );
}



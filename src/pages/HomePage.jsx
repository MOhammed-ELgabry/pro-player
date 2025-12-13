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




// import axios from "axios";
// import { useEffect, useState } from "react";

// import { Swiper, SwiperSlide } from "swiper/react";
// import { Autoplay, Navigation, Pagination } from "swiper/modules";

// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/pagination";

// import { NavLink } from "react-router-dom";
// import logo from "../assets/image/WhatsApp_Image_2025-12-10_at_10.41.52_AM-removebg-preview.png";

// export default function HomePage() {
//   const domain = "http://localhost:1337";
//   const endPoint = "/api/hero-sections?populate=*";

//   const [slides, setSlides] = useState([]);
//   const [menuOpen, setMenuOpen] = useState(false);

//   useEffect(() => {
//     axios
//       .get(domain + endPoint)
//       .then((res) => setSlides(res.data.data || []))
//       .catch((err) => console.log(err));
//   }, []);

//   return (
//     <div className="relative w-full h-screen">
//       <div className="absolute top-0 left-0 w-full z-50 bg-transparent">
//         <div className="container mx-auto px-6 py-4 flex justify-between items-center">
//           <NavLink to="/">
//             <img
//               src={logo}
//               alt="logo"
//               className="w-[160px] h-[80px] object-contain"
//             />
//           </NavLink>

//           <div className="hidden lg:flex gap-4">
//             <NavLink
//               to="/menu"
//               className="text-xl font-semibold text-white border rounded-3xl px-4 py-2 shadow hover:bg-green-500 transition"
//             >
//               Home Page
//             </NavLink>

//             <NavLink
//               to="/"
//               className="text-xl font-semibold text-white border rounded-3xl px-4 py-2 shadow hover:bg-green-500 transition"
//             >
//               About Us
//             </NavLink>

//             <NavLink
//               to="/"
//               className="text-xl font-semibold text-white border rounded-3xl px-4 py-2 shadow hover:bg-green-500 transition"
//             >
//               Contact Us
//             </NavLink>
//           </div>

//           <button
//             className="lg:hidden text-white text-3xl"
//             onClick={() => setMenuOpen(!menuOpen)}
//           >
//             ☰
//           </button>
//         </div>

//         {/* 🔥 Mobile Menu Drawer */}
//         {menuOpen && (
//           <div className="lg:hidden bg-black/80 text-white py-4 flex flex-col gap-4 px-6">
//             <NavLink
//               to="/menu"
//               className="text-lg border p-2 rounded-xl"
//               onClick={() => setMenuOpen(false)}
//             >
//               Home Page
//             </NavLink>

//             <NavLink
//               to="/"
//               className="text-lg border p-2 rounded-xl"
//               onClick={() => setMenuOpen(false)}
//             >
//               About Us
//             </NavLink>

//             <NavLink
//               to="/"
//               className="text-lg border p-2 rounded-xl"
//               onClick={() => setMenuOpen(false)}
//             >
//               Contact Us
//             </NavLink>
//           </div>
//         )}
//       </div>

//       {/* 🔥 ثابت — Grab the chance */}
//       <NavLink
//         to="/"
//         className="fixed bottom-4 right-4 z-[9999] bg-green-500 text-white font-semibold px-6 py-3 rounded-full shadow-lg hover:bg-green-600 transition"
//       >
//         Grab the chance
//       </NavLink>

//       {slides.length > 0 && (
//         <Swiper
//           modules={[Autoplay, Navigation, Pagination]}
//           spaceBetween={0}
//           slidesPerView={1}
//           loop={slides.length > 1}
//           autoplay={{ delay: 3000 }}
//           pagination={{ clickable: true }}
//           className="h-screen"
//         >
//           {slides.map((el) =>
//             el.hero?.map((img, i) => {
//               const bgUrl = domain + img.url;
//               return (
//                 <SwiperSlide key={`${el.id}-${i}`}>
//                   <div
//                     className="w-full min-h-screen bg-cover bg-center"
//                     style={{ backgroundImage: `url(${bgUrl})` }}
//                   >
//                     <div className="w-full h-full bg-black/40"></div>
//                   </div>
//                 </SwiperSlide>
//               );
//             })
//           )}
//         </Swiper>
//       )}
//     </div>
//   );
// }


// import axios from "axios";
// import { useEffect, useState } from "react";

// import { Swiper, SwiperSlide } from "swiper/react";
// import { Autoplay, Navigation, Pagination } from "swiper/modules";

// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/pagination";

// import { NavLink } from "react-router-dom";
// import logo from "../assets/image/WhatsApp_Image_2025-12-10_at_10.41.52_AM-removebg-preview.png";

// // 🔥 GSAP + Icon
// import gsap from "gsap";
// import { FaArrowUpRightFromSquare } from "react-icons/fa6";

// export default function HomePage() {
//   const domain = "http://localhost:1337";
//   const endPoint = "/api/hero-sections?populate=*";

//   const [slides, setSlides] = useState([]);
//   const [menuOpen, setMenuOpen] = useState(false);

//   useEffect(() => {
//     axios
//       .get(domain + endPoint)
//       .then((res) => setSlides(res.data.data || []))
//       .catch((err) => console.log(err));
//   }, []);

//   // 🔥 GSAP Animation for the button
//   useEffect(() => {
//     gsap.from(".grab-btn", {
//       y: -120,
//       duration: 1.2,
//       ease: "bounce.out",
//       delay: 0.3,
//     });
//   }, []);

//   return (
//     <div className="relative w-full h-screen">
//       {/* 🔥 NAVBAR فوق الصور */}
//       <div className="absolute top-0 left-0 w-full z-50 bg-transparent">
//         <div className="container mx-auto px-6 py-4 flex justify-between items-center">

//           {/* LOGO */}
//           <NavLink to="/">
//             <img
//               src={logo}
//               alt="logo"
//               className="w-[160px] h-[80px] object-contain"
//             />
//           </NavLink>

          
//           <div className="hidden lg:flex gap-4">
//             <NavLink
//               to="/"
//               className="text-xl font-semibold text-white border rounded-3xl px-4 py-2 shadow hover:bg-green-500 transition"
//             >
//               Home Page
//             </NavLink>

//             <NavLink
//               to="/"
//               className="text-xl font-semibold text-white border rounded-3xl px-4 py-2 shadow hover:bg-green-500 transition"
//             >
//               About Us
//             </NavLink>

//             <NavLink
//               to="/"
//               className="text-xl font-semibold text-white border rounded-3xl px-4 py-2 shadow hover:bg-green-500 transition"
//             >
//               Contact Us
//             </NavLink>
//           </div>

        
//           <button
//             className="lg:hidden text-white text-3xl cursor-pointer"
//             onClick={() => setMenuOpen(!menuOpen)}
//           >
//             ☰
//           </button>
//         </div>

       
//         {menuOpen && (
//           <div className="lg:hidden bg-black/80   text-white py-4 flex flex-col gap-4 px-6">
//             <NavLink
//               to="/"
//               className="text-lg border p-2 rounded-xl "
//               onClick={() => setMenuOpen(false)}
//             >
//               Home Page
//             </NavLink>

//             <NavLink
//               to="/"
//               className="text-lg border p-2 rounded-xl"
//               onClick={() => setMenuOpen(false)}
//             >
//               About Us
//             </NavLink>

//             <NavLink
//               to="/"
//               className="text-lg border p-2 rounded-xl"
//               onClick={() => setMenuOpen(false)}
//             >
//               Contact Us
//             </NavLink>
//           </div>
//         )}
//       </div>

    
//       <NavLink
//         to="/"
//         className="grab-btn fixed bottom-4 right-4 z-[9999] bg-green-500 text-white font-semibold px-6 py-3 rounded-full shadow-lg hover:bg-green-600 transition flex items-center gap-2"
//       >
//         Grab the chance
//         <FaArrowUpRightFromSquare size={20} />
//       </NavLink>

      
//       {slides.length > 0 && (
//         <Swiper
//           modules={[Autoplay, Navigation, Pagination]}
//           spaceBetween={0}
//           slidesPerView={1}
//           loop={slides.length > 1}
//           autoplay={{ delay: 3000 }}
//           pagination={{ clickable: true }}
//           className="h-screen"
//         >
//           {slides.map((el) =>
//             el.hero?.map((img, i) => {
//               const bgUrl = domain + img.url;
//               return (
//                 <SwiperSlide key={`${el.id}-${i}`}>
//                   <div
//                     className="w-full min-h-screen bg-cover bg-center"
//                     style={{ backgroundImage: `url(${bgUrl})` }}
//                   >
//                     <div className="w-full h-full bg-black/40"></div>
//                   </div>
//                 </SwiperSlide>
//               );
//             })
//           )}
//         </Swiper>
//       )}
//     </div>
//   );
// }



// import axios from "axios";
// import { useEffect, useState } from "react";

// import { Swiper, SwiperSlide } from "swiper/react";
// import { Autoplay, Pagination } from "swiper/modules";

// import "swiper/css";
// import "swiper/css/pagination";

// import { NavLink } from "react-router-dom";
// import logo from "../assets/image/WhatsApp_Image_2025-12-10_at_10.41.52_AM-removebg-preview.png";

// // 🔥 GSAP + ICON
// import gsap from "gsap";
// import { FaArrowUpRightFromSquare } from "react-icons/fa6";

// export default function HomePage() {
//   const domain = "http://localhost:1337";
//   const endPoint = "/api/hero-sections?populate=*";

//   const [slides, setSlides] = useState([]);
//   const [menuOpen, setMenuOpen] = useState(false);

//   // 🔥 Fetch Data
//   useEffect(() => {
//     axios
//       .get(domain + endPoint)
//       .then((res) => setSlides(res.data.data || []))
//       .catch((err) => console.log(err));
//   }, []);

//   // 🔥 GSAP Animations
//   useEffect(() => {
   
//     gsap.fromTo(
//       ".grab-btn",
//       {
//         yPercent: -300,
//         opacity: 0,
//       },
//       {
//         yPercent: 0,
//         opacity: 1,
//         duration: 1.6,
//         ease: "bounce.out",
//         delay: 0.4,
//       }
//     );

//     // 2️⃣ اهتزاز كل 5 ثواني
//     gsap.to(".grab-btn", {
//       x: 6,
//       duration: 0.1,
//       repeat: -1,
//       yoyo: true,
//       paused: true,
//       ease: "power1.inOut",
//     });

//     const shakeTween = gsap.timeline({ repeat: -1, repeatDelay: 5 });
//     shakeTween
//       .to(".grab-btn", { x: -6, duration: 0.1 })
//       .to(".grab-btn", { x: 6, duration: 0.1 })
//       .to(".grab-btn", { x: -6, duration: 0.1 })
//       .to(".grab-btn", { x: 0, duration: 0.1 });

//   }, []);

//   return (
//     <div className="relative w-full h-screen">
//     <div className="">
//       <h2 className="text-3xl font-bold">the Biggist Chance</h2>
//       <h1 className="text-4xl font-extrabold">3 Minutes to Go Pro</h1>
//     </div>
//       <div className="absolute top-0 left-0 w-full z-50">
//         <div className="container mx-auto px-6 py-4 flex justify-between items-center">
       
//           <NavLink to="/">
//             <img
//               src={logo}
//               alt="logo"
//               className="w-[160px] h-[80px] object-contain"
//             />
//           </NavLink>

          
//           <div className="hidden lg:flex gap-4">
//             <NavLink className="text-xl font-semibold text-white border rounded-3xl px-4 py-2 hover:bg-green-500 transition">
//               Home Page
//             </NavLink>
//             <NavLink className="text-xl font-semibold text-white border rounded-3xl px-4 py-2 hover:bg-green-500 transition">
//               About Us
//             </NavLink>
//             <NavLink className="text-xl font-semibold text-white border rounded-3xl px-4 py-2 hover:bg-green-500 transition">
//               Contact Us
//             </NavLink>
//           </div>

//           {/* Mobile Toggle */}
//           <button
//             className="lg:hidden text-white text-3xl"
//             onClick={() => setMenuOpen(!menuOpen)}
//           >
//             ☰
//           </button>
//         </div>

       
//         {menuOpen && (
//           <div className="lg:hidden bg-black/80 text-white px-6 py-4 flex flex-col gap-4">
//             <NavLink onClick={() => setMenuOpen(false)}>Home Page</NavLink>
//             <NavLink onClick={() => setMenuOpen(false)}>About Us</NavLink>
//             <NavLink onClick={() => setMenuOpen(false)}>Contact Us</NavLink>
//           </div>
//         )}
//       </div>

     
//       <NavLink
//         to="/"
//         className="grab-btn fixed bottom-4 right-4 z-[9999] bg-green-500 text-white font-semibold px-6 py-3 rounded-full shadow-lg hover:bg-green-600 transition flex items-center gap-2"
//       >
//         Grab the chance
//         <FaArrowUpRightFromSquare size={22} />
//       </NavLink>

      
//       {slides.length > 0 && (
//         <Swiper
//           modules={[Autoplay, Pagination]}
//           slidesPerView={1}
//           loop={slides.length > 1}
//           autoplay={{ delay: 3000 }}
//           pagination={{ clickable: true }}
//           className="h-screen"
//         >
//           {slides.map((el) =>
//             el.hero?.map((img, i) => {
//               const bgUrl = domain + img.url; 
//               return (
//                 <SwiperSlide key={`${el.id}-${i}`}>
//                   <div
//                     className="w-full min-h-screen bg-cover bg-center"
//                     style={{ backgroundImage: `url(${bgUrl})` }}
//                   >
//                     <div className="w-full h-full bg-black/40"></div>
//                   </div>
//                 </SwiperSlide>
//               );
//             })
//           )}
//         </Swiper>
//       )}
//     </div>
//   );
// }

// import axios from "axios";
// import { useEffect, useState } from "react";

// import { Swiper, SwiperSlide } from "swiper/react";
// import { Autoplay, Pagination } from "swiper/modules";

// import "swiper/css";
// import "swiper/css/pagination";

// import { NavLink } from "react-router-dom";
// import logo from "../assets/image/WhatsApp_Image_2025-12-10_at_10.41.52_AM-removebg-preview.png";

// // 🔥 GSAP + ICON
// import gsap from "gsap";
// import { FaArrowUpRightFromSquare } from "react-icons/fa6";

// export default function HomePage() {
//   const domain = "http://localhost:1337";
//   const endPoint = "/api/hero-sections?populate=*";

//   const [slides, setSlides] = useState([]);
//   const [menuOpen, setMenuOpen] = useState(false);

//   // 🔥 Fetch Slider Data
//   useEffect(() => {
//     axios
//       .get(domain + endPoint)
//       .then((res) => setSlides(res.data.data || []))
//       .catch((err) => console.log(err));
//   }, []);

  
//   useEffect(() => {
    
//     gsap.fromTo(
//       ".grab-btn",
//       {
//         y: -200,
//         opacity: 0,
//       },
//       {
//         y: 0,
//         opacity: 1,
//         duration: 1.6,
//         ease: "bounce.out",
//         delay: 0.5,
//       }
//     );

    
//     const shakeTl = gsap.timeline({
//       repeat: -1,
//       repeatDelay: 5,
//       delay: 2,
//     });

//     shakeTl
//       .to(".grab-btn", { x: -6, duration: 0.1 })
//       .to(".grab-btn", { x: 6, duration: 0.1 })
//       .to(".grab-btn", { x: -6, duration: 0.1 })
//       .to(".grab-btn", { x: 6, duration: 0.1 })
//       .to(".grab-btn", { x: 0, duration: 0.1 });
//   }, []);

//   return (
//     <div className="relative w-full h-screen">
//   <div className="flex flex-col ">
//     <div> 
//       <h2 className="text-3xl font-bold">the Biggist Chance</h2>
//        <h1 className="text-4xl font-extrabold">3 Minutes to Go Pro</h1>
//        </div>
//      <div className="flex gap-4">
// <button className="btn btn-primary">btnnnn</button>
// <button className="btn btn-primary">btnnnn</button>
//      </div>
//     </div>
    
//       <div className="absolute top-0 left-0 w-full z-50">
//         <div className="container mx-auto px-6 py-4 flex justify-between items-center">

         
//           <NavLink to="/">
//             <img
//               src={logo}
//               alt="logo"
//               className="w-[160px] h-[80px] object-contain"
//             />
//           </NavLink>

         
//           <div className="hidden lg:flex gap-4">
//             <NavLink className="text-xl font-semibold text-white border rounded-3xl px-4 py-2 hover:bg-green-500 transition">
//               Home Page
//             </NavLink>
//             <NavLink className="text-xl font-semibold text-white border rounded-3xl px-4 py-2 hover:bg-green-500 transition">
//               About Us
//             </NavLink>
//             <NavLink className="text-xl font-semibold text-white border rounded-3xl px-4 py-2 hover:bg-green-500 transition">
//               Contact Us
//             </NavLink>
//           </div>

         
//           <button
//             className="lg:hidden text-white text-3xl"
//             onClick={() => setMenuOpen(!menuOpen)}
//           >
//             ☰
//           </button>
//         </div>

       
//         {menuOpen && (
//           <div className="lg:hidden bg-black/80 text-white px-6 py-4 flex flex-col gap-4">
//             <NavLink onClick={() => setMenuOpen(false)}>Home Page</NavLink>
//             <NavLink onClick={() => setMenuOpen(false)}>About Us</NavLink>
//             <NavLink onClick={() => setMenuOpen(false)}>Contact Us</NavLink>
//           </div>
//         )}
//       </div>

     
//       <NavLink
//         to="/"
//         className="grab-btn fixed bottom-6 right-6 z-[9999]
//         bg-green-500 text-white font-semibold
//         px-6 py-3 rounded-full shadow-lg
//         hover:bg-green-600 transition
//         flex items-center gap-2"
//       >
//         Grab the chance
//         <FaArrowUpRightFromSquare size={22} />
//       </NavLink>

      
//       {slides.length > 0 && (
//         <Swiper
//           modules={[Autoplay, Pagination]}
//           slidesPerView={1}
//           loop={slides.length > 1}
//           autoplay={{ delay: 3000 }}
//           pagination={{ clickable: true }}
//           className="h-screen"
//         >
//           {slides.map((el) =>
//             el.hero?.map((img, i) => {
//               const bgUrl = domain + img.url;
//               return (
//                 <SwiperSlide key={`${el.id}-${i}`}>
//                   <div
//                     className="w-full min-h-screen bg-cover bg-center"
//                     style={{ backgroundImage: `url(${bgUrl})` }}
//                   >
//                     <div className="w-full h-full bg-black/40"></div>
//                   </div>
//                 </SwiperSlide>
//               );
//             })
//           )}
//         </Swiper>
//       )}
//     </div>
//   );
// }

import axios from "axios";
import { useEffect, useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

import { NavLink } from "react-router-dom";
import logo from "../assets/image/WhatsApp_Image_2025-12-10_at_10.41.52_AM-removebg-preview.png";

import gsap from "gsap";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";

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

  useEffect(() => {
    gsap.fromTo(
      ".grab-btn",
      { y: -200, opacity: 0 },
      { y: 0, opacity: 1, duration: 1.6, ease: "bounce.out", delay: 0.5 }
    );

    const shakeTl = gsap.timeline({ repeat: -1, repeatDelay: 5, delay: 2 });
    shakeTl
      .to(".grab-btn", { x: -6, duration: 0.1 })
      .to(".grab-btn", { x: 6, duration: 0.1 })
      .to(".grab-btn", { x: -6, duration: 0.1 })
      .to(".grab-btn", { x: 6, duration: 0.1 })
      .to(".grab-btn", { x: 0, duration: 0.1 });
  }, []);

  return (
    <div className="relative w-full h-screen">
      
     
      <div className="absolute inset-0 z-20 flex items-center">
        <div className="container mx-auto px-6 flex flex-col gap-4 items-center  lg:items-start justify-center">

          
          <div className="text-white text-center max-w-lg">
            <h2 className="text-3xl font-bold mb-2">The Biggest Chance</h2>
            <h1 className="text-4xl lg:text-5xl font-extrabold mb-4">3 Minutes to Go Pro</h1>
          </div>

          
          <div className="flex  gap-4 lg:ms-28 items-center justify-center p-5 ">
            <button  className="btn bg-amber-50 text-black w-full hover:bg-black hover:text-white">Login</button>
            <button className="btn  bg-amber-50 text-black w-full hover:bg-black hover:text-white">Register</button>
          </div>

        </div>
      </div>

     
      <div className="absolute top-0 left-0 w-full z-50">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <NavLink to="/">
            <img src={logo} alt="logo" className="w-[160px] h-[80px] object-contain" />
          </NavLink>

          <div className="hidden lg:flex gap-4">
            <NavLink className="text-xl font-semibold text-white border rounded-3xl px-4 py-2 hover:bg-green-500 transition">
              Home Page
            </NavLink>
            <NavLink className="text-xl font-semibold text-white border rounded-3xl px-4 py-2 hover:bg-green-500 transition">
              About Us
            </NavLink>
            <NavLink className="text-xl font-semibold text-white border rounded-3xl px-4 py-2 hover:bg-green-500 transition">
              Contact Us
            </NavLink>
          </div>

          <button
            className="lg:hidden text-white text-3xl"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            ☰
          </button>
        </div>

        {menuOpen && (
          <div className="lg:hidden bg-black/80 text-white px-6 py-4 flex flex-col gap-4">
            <NavLink onClick={() => setMenuOpen(false)}>Home Page</NavLink>
            <NavLink onClick={() => setMenuOpen(false)}>About Us</NavLink>
            <NavLink onClick={() => setMenuOpen(false)}>Contact Us</NavLink>
          </div>
        )}
      </div>

     
      <NavLink
        to="/"
        className="grab-btn fixed bottom-6 right-6 z-[9999] bg-green-500 text-white font-semibold px-6 py-3 rounded-full shadow-lg hover:bg-green-600 transition flex items-center gap-2"
      >
        Grab the chance
        <FaArrowUpRightFromSquare size={22} />
      </NavLink>

      
      {slides.length > 0 && (
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


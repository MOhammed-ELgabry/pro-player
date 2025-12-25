

// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation, Autoplay } from "swiper/modules";
// import "swiper/css";
// import "swiper/css/navigation";


// import cardImg from "../assets/image/9805bd3eac3689e1689aa31597735d31fb272fbf.jpg";

// import NavBar from "../components/NavBar";
// import HeroSlider from "../components/HeroSlider";
// import HeroContent from "../components/HeroContent";
// import GrabIcon from "../components/GrabIcon";
// import AboutSection from "../components/AboutSection";
// import Top10Player from "../components/Top10Player";
// import PlayersGrid from "../components/PlayersGrid";

// import { FaArrowUpRightFromSquare, FaEye, FaStar } from "react-icons/fa6";

// export default function HomePage() {
//   const domain = "http://localhost:1337";
//   const heroEndPoint = "/api/hero-sections?populate=*";
//   const aboutEndPoint = "/api/aboutuses?populate=*";
//   const topEndPoint = "/api/top10s?populate=*";
//   const footerEndPoint = "/api/footer?populate=*";

//   const [footer, setFooter] = useState(null);
//   const [slides, setSlides] = useState([]);
//   const [aboutImage, setAboutImage] = useState([]);
//   const [top10, setTop10] = useState([]);
//   const [viewPlayer, setViewPlayer] = useState([]);
//   const [realPlayer, setRealPlayer] = useState(null); // اللاعب الحقيقي بعد الريجيستر

//   const fallbackImage =
//     "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJ4AAACUCAMAAABVwGAvAAAAVFBMVEXu7u5mZmbz8/NcXFzKysrGxsbZ2dmEhISNjY2RkZGAgIBjY2NgYGD39/dZWVmJiYm3t7eXl5dtbW2tra2np6fQ0NBzc3Oenp7f3996enro6Oi9vb1dpHnKAAABuklEQVR4nO3Y2XKCMBhAYRIsLkk0goDV93/PBlA2tTPpRZLOnO/S0vHMn6XWLAMAAAAAAAAAAAAAAAA+k/4CxtUbb3XAvp3OfZ0D5m2318LL9XsfMm9n/PafOQTP8yHTzkt8eknlGWNWMQnlyZs9t6trLqG86+Gota4WOenkmTYXQihVzHvSybuVonOs0szLnnnzR+LmLQZ1Ul2ertOZnp2tpCkarZRukzka0iptp3eXxb75tstfiJcnM+uOal5NP5XuWjarFY+WZ+7DXrMvp8V9UBkfipZnjy6udLvt8vJYu3k2xcoztp9dfxEvrhI3u8tRFCZqnuxn9+jT1eKh1h3gcmMi5plKzChxGefnZqe7HVkOf9si5N3c7LRY9OnpPrmoftVV01/PMabn9p0Syz71uJ9l+wzv5idj5Em7iuvk9z6jmsaqmiJ8nnszq9/kdedDZv1nqvGlsg79n9rJyJeVfa6mHU7FrK8pgi/u6lTM+w7rbt0Up6B5+/v70Q01r680TcgvMU6l+CXvbXLQvI8rm0ye3/iY3kh65ymmN6m/vNXh6v7yzXfA4QEAAAAAAAAAAAAAAOD/+QFsphmLVIOvHwAAAABJRU5ErkJggg==";

//   // ====== Fetch Hero Slides ======
//   useEffect(() => {
//     axios
//       .get(`${domain}${heroEndPoint}`)
//       .then((res) => {
//         const dataWithId = res.data.data.map((el) => ({
//           ...el,
//           documentId: el.id,
//         }));
//         setSlides(dataWithId);
//       })
//       .catch((err) => console.log(err));
//   }, []);

//   // ====== Fetch About Section ======
//   useEffect(() => {
//     axios
//       .get(`${domain}${aboutEndPoint}`)
//       .then((res) => setAboutImage(res.data.data || []))
//       .catch((err) => console.log(err));
//   }, []);

//   // ====== Fetch Top10 Players ======
//   useEffect(() => {
//     axios
//       .get(`${domain}${topEndPoint}`)
//       .then((res) => {
//         const data = res.data.data || [];
//         if (data.length === 0) {
//           // Create 10 dummy players
//           const dummy = Array.from({ length: 10 }, (_, i) => ({
//             id: i,
//             attributes: {
//               name: `Player ${i + 1}`,
//               position: "Unknown",
//               image: { data: null },
//             },
//           }));
//           setTop10(dummy);
//         } else {
//           setTop10(data);
//         }
//       })
//       .catch((err) => console.log(err));
//   }, []);

//   // ====== Initialize 15 dummy cards ======
//   useEffect(() => {
//     const dummyCards = Array.from({ length: 15 }, (_, i) => ({
//       id: i + 1,
//       isDummy: true,
//       name: "Dummy Player",
//       views: 0,
//       rating: 0,
//       image: cardImg,
//     }));

//     setViewPlayer(dummyCards);
//   }, []);

//   // ====== Fetch Footer ======
//   useEffect(() => {
//     axios
//       .get(domain + footerEndPoint)
//       .then((res) => {
//         if (res.data && res.data.data) {
//           setFooter(res.data.data); // single type
//         }
//       })
//       .catch((err) => console.log(err));
//   }, []);

//   return (
//     <div className="relative w-full">
//       <NavBar />

      
//       <div className="relative w-full">
//         <HeroSlider slides={slides} />
//         <HeroContent />
//         <GrabIcon />
//       </div>

     
//       <AboutSection aboutImage={aboutImage} domain={domain} />
//       <div className="h-[100px] lg:h-0"></div>

      
//       <Top10Player top10={top10} domain={domain} fallbackImage={fallbackImage} />

    
//       <PlayersGrid
//         viewPlayer={viewPlayer}
//         setViewPlayer={setViewPlayer}
//         realPlayer={realPlayer}
//       />

    
//       <footer className="flex justify-center w-full bg-green-950 rounded shadow p-8">
//         {footer && (
//           <div className="container flex flex-col  lg:flex-row justify-center items-center gap-8 ">
//             <div className="flex flex-col justify-center items-center text-center gap-7">
//               <h3 className="text-white text-2xl font-extrabold">{footer.h3 || ""}</h3>
//               <h4 className="text-white text-2xl font-bold">{footer.h4 || ""}</h4>
//               <p className="text-white font-medium">{footer.pargraph || ""}</p>
//               <div className="grid grid-cols-3  ">
//   <div className="bg-green-950 p-4 text-center flex flex-col  border border-green-200">
//     <p className="text-green-500 text-[20px]"> {footer.trainer}+</p>
//     <p className="text-white font-bold">Trainees</p>
//     </div>
//   <div className="bg-green-950 p-4 text-center flex flex-col border border-green-300">
//     <p className="text-green-500 text-[20px]">{footer.age}+</p>
//     <p className="text-white font-bold">Age Distribution</p>
//   </div>
//   <div className="bg-green-950 p-4 text-center flex flex-col border border-green-400">
//     <p className="text-green-500 text-[20px]">{footer.member}%</p>
//     <p className="text-white font-bold">Total Members</p>
//   </div>
// </div>
// <button className="btn rounded-3xl p-4 shadow bg-green-500 text-white">Contact Us   <FaArrowUpRightFromSquare className="text-white bg-bg-dark  text-2xl" /></button>
//             </div>
//             <div>
//               <img
//                 src={footer.img?.url ? domain + footer.img.url : fallbackImage}
//                 alt="footer"
//                 className="max-w-[300px] object-contain"
//               />
//             </div>
//           </div>
//         )}
//       </footer>
//     </div>
//   );
// }

// HomePage.jsx
import React, { useEffect, useState } from "react";
import axios from "axios";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";

import NavBar from "../components/NavBar";
import HeroSlider from "../components/HeroSlider";
import HeroContent from "../components/HeroContent";
import GrabIcon from "../components/GrabIcon";
import AboutSection from "../components/AboutSection";
import Top10Player from "../components/Top10Player";
import PlayersGrid from "../components/PlayersGrid";
import FooterComponent from "../components/FooterComponent";

import cardImg from "../assets/image/9805bd3eac3689e1689aa31597735d31fb272fbf.jpg";

export default function HomePage() {
  const domain = "http://localhost:1337";
  const heroEndPoint = "/api/hero-sections?populate=*";
  const aboutEndPoint = "/api/aboutuses?populate=*";
  const topEndPoint = "/api/top10s?populate=*";
  const footerEndPoint = "/api/footer?populate=*";

  const fallbackImage =
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJ4AAACUCAMAAABVwGAvAAAAVFBMVEXu7u5mZmbz8/NcXFzKysrGxsbZ2dmEhISNjY2RkZGAgIBjY2NgYGD39/dZWVmJiYm3t7eXl5dtbW2tra2np6fQ0NBzc3Oenp7f3996enro6Oi9vb1dpHnKAAABuklEQVR4nO3Y2XKCMBhAYRIsLkk0goDV93/PBlA2tTPpRZLOnO/S0vHMn6XWLAMAAAAAAAAAAAAAAAA+k/4CxtUbb3XAvp3OfZ0D5m2318LL9XsfMm9n/PafOQTP8yHTzkt8eknlGWNWMQnlyZs9t6trLqG86+Gota4WOenkmTYXQihVzHvSybuVonOs0szLnnnzR+LmLQZ1Ul2ertOZnp2tpCkarZRukzka0iptp3eXxb75tstfiJcnM+uOal5NP5XuWjarFY+WZ+7DXrMvp8V9UBkfipZnjy6udLvt8vJYu3k2xcoztp9dfxEvrhI3u8tRFCZqnuxn9+jT1eKh1h3gcmMi5plKzChxGefnZqe7HVkOf9si5N3c7LRY9OnpPrmoftVV01/PMabn9p0Syz71uJ9l+wzv5idj5Em7iuvk9z6jmsaqmiJ8nnszq9/kdedDZv1nqvGlsg79n9rJyJeVfa6mHU7FrK8pgi/u6lTM+w7rbt0Up6B5+/v70Q01r680TcgvMU6l+CXvbXLQvI8rm0ye3/iY3kh65ymmN6m/vNXh6v7yzXfA4QEAAAAAAAAAAAAAAOD/+QFsphmLVIOvHwAAAABJRU5ErkJggg==";

  const [slides, setSlides] = useState([]);
  const [aboutImage, setAboutImage] = useState([]);
  const [top10, setTop10] = useState([]);
  const [viewPlayer, setViewPlayer] = useState([]);
  const [realPlayer, setRealPlayer] = useState(null);
  const [footer, setFooter] = useState(null);

  // ====== Fetch Hero Slides ======
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

  // ====== Fetch About Section ======
  useEffect(() => {
    axios
      .get(`${domain}${aboutEndPoint}`)
      .then((res) => setAboutImage(res.data.data || []))
      .catch((err) => console.log(err));
  }, []);

  // ====== Fetch Top10 Players ======
  useEffect(() => {
    axios
      .get(`${domain}${topEndPoint}`)
      .then((res) => {
        const data = res.data.data || [];
        if (data.length === 0) {
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

  // ====== Initialize 15 dummy cards ======
  useEffect(() => {
    const dummyCards = Array.from({ length: 15 }, (_, i) => ({
      id: i + 1,
      isDummy: true,
      name: "Dummy Player",
      views: 0,
      rating: 0,
      image: cardImg,
    }));
    setViewPlayer(dummyCards);
  }, []);

  // ====== Fetch Footer ======
  useEffect(() => {
    axios
      .get(domain + footerEndPoint)
      .then((res) => {
        if (res.data && res.data.data) {
          setFooter(res.data.data);
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
      <div className="h-[100px] lg:h-0"></div>

      <Top10Player top10={top10} domain={domain} fallbackImage={fallbackImage} />

      <PlayersGrid viewPlayer={viewPlayer} setViewPlayer={setViewPlayer} realPlayer={realPlayer} />

      <FooterComponent footer={footer} domain={domain} fallbackImage={fallbackImage} />
    </div>
  );
}


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
// import { FaTrophy } from "react-icons/fa";
// import Top10Player from "../components/Top10Player";
// import { FaEye, FaStar } from "react-icons/fa6";

// export default function HomePage() {
//   const domain = "http://localhost:1337";
//   const heroEndPoint = "/api/hero-sections?populate=*";
//   const aboutEndPoint = "/api/aboutuses?populate=*";
//   const topEndPoint = "/api/top10s?populate=*";

//   const [slides, setSlides] = useState([]);
//   const [aboutImage, setAboutImage] = useState([]);
//   const [top10, setTop10] = useState([]);
//   const [viewPlayer, setViewPlayer] = useState([]);

//   const fallbackImage =
//     "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJ4AAACUCAMAAABVwGAvAAAAVFBMVEXu7u5mZmbz8/NcXFzKysrGxsbZ2dmEhISNjY2RkZGAgIBjY2NgYGD39/dZWVmJiYm3t7eXl5dtbW2tra2np6fQ0NBzc3Oenp7f3996enro6Oi9vb1dpHnKAAABuklEQVR4nO3Y2XKCMBhAYRIsLkk0goDV93/PBlA2tTPpRZLOnO/S0vHMn6XWLAMAAAAAAAAAAAAAAAA+k/4CxtUbb3XAvp3OfZ0D5m2318LL9XsfMm9n/PafOQTP8yHTzkt8eknlGWNWMQnlyZs9t6trLqG86+Gota4WOenkmTYXQihVzHvSybuVonOs0szLnnnzR+LmLQZ1Ul2ertOZnp2tpCkarZRukzka0iptp3eXxb75tstfiJcnM+uOal5NP5XuWjarFY+WZ+7DXrMvp8V9UBkfipZnjy6udLvt8vJYu3k2xcoztp9dfxEvrhI3u8tRFCZqnuxn9+jT1eKh1h3gcmMi5plKzChxGefnZqe7HVkOf9si5N3c7LRY9OnpPrmoftVV01/PMabn9p0Syz71uJ9l+wzv5idj5Em7iuvk9z6jmsaqmiJ8nnszq9/kdedDZv1nqvGlsg79n9rJyJeVfa6mHU7FrK8pgi/u6lTM+w7rbt0Up6B5+/v70Q01r680TcgvMU6l+CXvbXLQvI8rm0ye3/iY3kh65ymmN6m/vNXh6v7yzXfA4QEAAAAAAAAAAAAAAOD/+QFsphmLVIOvHwAAAABJRU5ErkJggg==";

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

//   useEffect(() => {
//     axios
//       .get(`${domain}${aboutEndPoint}`)
//       .then((res) => setAboutImage(res.data.data || []))
//       .catch((err) => console.log(err));
//   }, []);

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

//   useEffect(() => {
//   const dummyCards = Array.from({ length: 15 }, (_, i) => ({
//     id: i + 1,
//     isDummy: true,
//     name: "Dummy Player",
//     views: 0,
//     rating: 0,
//     image: cardImg,
//   }));

//   setViewPlayer(dummyCards);
// }, []);

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

//       <Top10Player
//         top10={top10}
//         domain={domain}
//         fallbackImage={fallbackImage}
//       />

    

//       <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-5">
//   {viewPlayer.map((player) => (
//     <div key={player.id} className="card shadow-4xl rounded-3xl relative">
      
    
//       <div className="absolute top-3 left-3 z-10 bg-black/60 text-white text-sm px-3 py-1 rounded-t-2xl flex items-center gap-1">
//         <FaEye />
//         <span>{player.views}</span>
//       </div>

      
//       <div className="absolute top-3 right-3 z-10 bg-black/60 text-yellow-400 text-sm px-3 py-1 rounded-full flex items-center gap-1">
//         <FaStar />
//         <span>{player.rating}</span>
//       </div>

//       <figure>
//         <img src={player.image} className="rounded-t-2xl" />
//       </figure>

//       <div className="card-body bg-[rgba(0,191,122,.8)] rounded-b-3xl">
//         <h2 className="card-title">
//           {player.isDummy ? "Available Slot" : player.name}
//         </h2>
//         <p>
//           {player.isDummy ? "Waiting for player" : "View player profile"}
//         </p>
//       </div>
//     </div>
//   ))}
// </div>

//     </div>
//   );
// }


import React, { useEffect, useState } from "react";
import axios from "axios";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

import cardImg from "../assets/image/9805bd3eac3689e1689aa31597735d31fb272fbf.jpg";

import NavBar from "../components/NavBar";
import HeroSlider from "../components/HeroSlider";
import HeroContent from "../components/HeroContent";
import GrabIcon from "../components/GrabIcon";
import AboutSection from "../components/AboutSection";
import Top10Player from "../components/Top10Player";
import PlayersGrid from "../components/PlayersGrid";

import { FaEye, FaStar } from "react-icons/fa6";

export default function HomePage() {
  const domain = "http://localhost:1337";
  const heroEndPoint = "/api/hero-sections?populate=*";
  const aboutEndPoint = "/api/aboutuses?populate=*";
  const topEndPoint = "/api/top10s?populate=*";

  const [slides, setSlides] = useState([]);
  const [aboutImage, setAboutImage] = useState([]);
  const [top10, setTop10] = useState([]);
  const [viewPlayer, setViewPlayer] = useState([]);
  const [realPlayer, setRealPlayer] = useState(null); // اللاعب الحقيقي بعد الريجيستر

  const fallbackImage =
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJ4AAACUCAMAAABVwGAvAAAAVFBMVEXu7u5mZmbz8/NcXFzKysrGxsbZ2dmEhISNjY2RkZGAgIBjY2NgYGD39/dZWVmJiYm3t7eXl5dtbW2tra2np6fQ0NBzc3Oenp7f3996enro6Oi9vb1dpHnKAAABuklEQVR4nO3Y2XKCMBhAYRIsLkk0goDV93/PBlA2tTPpRZLOnO/S0vHMn6XWLAMAAAAAAAAAAAAAAAA+k/4CxtUbb3XAvp3OfZ0D5m2318LL9XsfMm9n/PafOQTP8yHTzkt8eknlGWNWMQnlyZs9t6trLqG86+Gota4WOenkmTYXQihVzHvSybuVonOs0szLnnnzR+LmLQZ1Ul2ertOZnp2tpCkarZRukzka0iptp3eXxb75tstfiJcnM+uOal5NP5XuWjarFY+WZ+7DXrMvp8V9UBkfipZnjy6udLvt8vJYu3k2xcoztp9dfxEvrhI3u8tRFCZqnuxn9+jT1eKh1h3gcmMi5plKzChxGefnZqe7HVkOf9si5N3c7LRY9OnpPrmoftVV01/PMabn9p0Syz71uJ9l+wzv5idj5Em7iuvk9z6jmsaqmiJ8nnszq9/kdedDZv1nqvGlsg79n9rJyJeVfa6mHU7FrK8pgi/u6lTM+w7rbt0Up6B5+/v70Q01r680TcgvMU6l+CXvbXLQvI8rm0ye3/iY3kh65ymmN6m/vNXh6v7yzXfA4QEAAAAAAAAAAAAAAOD/+QFsphmLVIOvHwAAAABJRU5ErkJggg==";

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

  return (
    <div className="relative w-full">
      <NavBar />

      {/* Hero Section */}
      <div className="relative w-full">
        <HeroSlider slides={slides} />
        <HeroContent />
        <GrabIcon />
      </div>

      {/* About Section */}
      <AboutSection aboutImage={aboutImage} domain={domain} />
      <div className="h-[100px] lg:h-0"></div>

      {/* Top 10 Players */}
      <Top10Player
        top10={top10}
        domain={domain}
        fallbackImage={fallbackImage}
      />

      {/* ======= 15 Cards Grid ======= */}
      <PlayersGrid
        viewPlayer={viewPlayer}
        setViewPlayer={setViewPlayer}
        realPlayer={realPlayer} // هيمرره بعد الريجيستر
      />
    </div>
  );
}


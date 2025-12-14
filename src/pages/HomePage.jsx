

import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";


import NavBar from "../components/NavBar";
import HeroSlider from "../components/HeroSlider";
import HeroContent from "../components/HeroContent";
import GrabIcon from "../components/GrabIcon";

export default function HomePage() {
  const domain = "http://localhost:1337";
  const endPoint = "/api/hero-sections?populate=*";
  const navigate = useNavigate();

  const [slides, setSlides] = useState([]);

  useEffect(() => {
    axios
      .get(domain + endPoint)
      .then((res) => {
        // نفترض أن كل عنصر في res.data.data عنده documentId
        const dataWithId = res.data.data.map((el) => ({
          ...el,
          documentId: el.id, 
        }));
        setSlides(dataWithId);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="relative w-full h-screen">
      {/* Navbar */}
      <NavBar />

    
      <HeroSlider slides={slides} />

      
      <HeroContent />

     
      <GrabIcon />
    </div>
  );
}



import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import NavBar from "../components/NavBar";
import HeroSlider from "../components/HeroSlider";
import HeroContent from "../components/HeroContent";
import GrabIcon from "../components/GrabIcon";
import AboutSection from "../components/AboutSection";

export default function HomePage() {
  const domain = "http://localhost:1337";
  const heroEndPoint = "/api/hero-sections?populate=*";
  const aboutEndPoint = "/api/aboutuses?populate=*";

  const navigate = useNavigate();
  const [slides, setSlides] = useState([]);
  const [aboutImage, setAboutImage] = useState([]);

  
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
      .then((res) => {
        setAboutImage(res.data.data || []);
        console.log(res.data.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="relative w-full h-screen">
      
      <NavBar />

      
      <HeroSlider slides={slides} />

     
      <HeroContent />

      
      <GrabIcon />

     
      <AboutSection aboutImage={aboutImage} domain={domain} />
    </div>
  );
}


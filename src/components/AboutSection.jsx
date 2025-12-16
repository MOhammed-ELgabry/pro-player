// AboutSection.jsx
import React from "react";
import { FaDotCircle } from "react-icons/fa";

export default function AboutSection({ aboutImage = [], domain = "" }) {
  return (
    <div className="flex justify-center bg-white w-full">
      <div className="container mx-auto flex flex-col lg:flex-row justify-center items-center gap-10 p-4 w-full">

        {/* النصوص */}
        <div className="flex flex-col justify-center items-start gap-4 w-full lg:w-[60%] text-center lg:text-start">
          <h3 className="font-bold text-[rgba(0,191,122,0.8)] text-[40px] md:text-[48px] lg:text-[64px]">
            About Us
          </h3>

          <h4 className="text-[24px] md:text-[28px] lg:text-[38px] font-normal leading-snug">
            UNITING COMMUNITIES THROUGH THE{" "}
            <span className="text-[rgba(0,191,122,0.8)]">POWER OF FOOTBALL</span>
          </h4>

          <p className="font-normal text-[16px] md:text-[18px] max-w-xl mx-auto lg:mx-0">
            Discover world-class courses, top-notch facilities, and a welcoming community.
            Enjoy an exceptional experience tailored for players of all skill levels.
          </p>

          <h3 className="text-[rgba(0,191,122,0.8)] flex items-center gap-2 font-bold text-[22px] md:text-[26px] lg:text-[32px]">
            <FaDotCircle /> SKILL DEVELOPMENT PROGRAMS
          </h3>

          <p className="text-[16px] md:text-[18px] max-w-xl mx-auto lg:mx-0">
            Our Skill Development Programs are designed to empower individuals with practical
            knowledge, hands-on training, and industry-relevant expertise.
          </p>

          <h3 className="text-[rgba(0,191,122,0.8)] flex items-center gap-2 font-bold text-[22px] md:text-[26px] lg:text-[32px]">
            <FaDotCircle /> Connecting Players with Real Opportunities
          </h3>

          <p className="text-[16px] md:text-[18px] max-w-xl mx-auto lg:mx-0">
            We connect football talents with the organizations looking for them, turning their
            passion into real opportunities.
          </p>
        </div>

        {/* الصور */}
        <div className="relative w-full max-w-[420px] h-[320px] flex items-center justify-center mt-8 lg:mt-0">
          {aboutImage[0]?.aboutimg?.map((img, index) => {
            const style =
              index === 0
                ? "absolute left-0 top-6 h-[350px] rounded-4xl overflow-hidden rotate-[-7deg] scale-95 shadow-xl"
                : "absolute left-36 top-0 h-[350px] rounded-4xl overflow-hidden rotate-7 shadow-2xl z-10";

            const imageUrl = img?.url
              ? `${domain}${img.url}`
              : img?.name
              ? `${domain}/uploads/${img.name}`
              : null;

            if (!imageUrl) return null;

            return (
              <div key={index} className={style}>
                <img
                  src={imageUrl}
                  alt={img.alternativeText || ""}
                  className="w-full h-full object-cover"
                />
              </div>
            );
          })}
        </div>

      </div>
    </div>
  );
}

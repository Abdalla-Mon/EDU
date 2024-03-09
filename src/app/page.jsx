"use client";
import HeroSection from "@/app/components/HomePage/HeroSection";
import PopularCourses from "@/app/components/HomePage/PopularCourses";
import HomeAbout from "@/app/components/HomePage/AboutUs";
import SectionContainer from "@/app/components/HomePage/SectionContainer";
import React, { createContext, useState } from "react";

export const AboutSectionContext = createContext(null);

export default function Home() {
  const [animation, setAnimation] = useState();

  return (
    <AboutSectionContext.Provider value={{ animation, setAnimation }}>
      <HeroSection />
      <SectionContainer>
        <HomeAbout />
        <PopularCourses />
      </SectionContainer>
    </AboutSectionContext.Provider>
  );
}

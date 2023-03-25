import React from "react";
import HeroSection from "./components/HeroSection";

const About = () => {
  const data = {
    name: "About Me",
    imageAlt: "This is the heroImage",
  };
  return (
    <div>
      <HeroSection myData={data} />
    </div>
  );
};

export default About;

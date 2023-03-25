import React from "react";
import HeroSection from "./components/HeroSection";
import Services from "./components/Servies";
import Trusted from "./components/Trusted";
import FeatureProduct from "./components/FeatureProduct";

const Home = () => {
  const data = {
    name: "Taufique Home",
    imageAlt: "This is the heroImage",
  };
  return (
    <div>
      <HeroSection myData={data} />
      <FeatureProduct />
      <Services />
      <Trusted />
    </div>
  );
};

export default Home;

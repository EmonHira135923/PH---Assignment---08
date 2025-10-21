import React from "react";
import Banner from "../../Compontets/HeroComponets/Banner";
import Marketing from "../../Compontets/HeroComponets/Marketing";
import TrendingApps from "../../Compontets/HeroComponets/TrendingApps";
import { useLoaderData } from "react-router";

const Home = () => {
  const HomeApp = useLoaderData();
  return (
    <div>
      <Banner></Banner>
      <Marketing></Marketing>
      <TrendingApps HomeApp={HomeApp}></TrendingApps>
    </div>
  );
};

export default Home;

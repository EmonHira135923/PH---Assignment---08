import React from "react";
import ShowCard from "./ShowCard";
import { useNavigate } from "react-router";

const TrendingApps = ({ HomeApp }) => {
  const navigate = useNavigate();
  return (
    <section className="max-w-[1400px] mx-auto bg-gray-100 px-4 py-16">
      <div className="text-center mb-10">
        <h1 className="text-3xl md:text-5xl mt-2 font-bold mb-5">
          Trending Apps
        </h1>
        <p className="text-gray-600">
          Explore All Trending Apps on the Market developed by us
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {HomeApp.map((data) => (
          <ShowCard key={data.id} data={data}></ShowCard>
        ))}
      </div>
      <div className="flex justify-center items-center mt-10">
        <button
          onClick={() => navigate("/app")}
          className="btn text-white bg-gradient-to-r from-[#632ee3] to-[#9f62f2] text-xl py-6 px-5 md:p-7 md:w-40 hover:from-[#4b1fe0] hover:to-[#4b1fe0] "
        >
          Show All
        </button>
      </div>
    </section>
  );
};

export default TrendingApps;

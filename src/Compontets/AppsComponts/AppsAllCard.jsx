import React, { useState } from "react";
import AppsCardShow from "./AppsCardShow";
import { VscVscode } from "react-icons/vsc";
import { useNavigate } from "react-router";
const AppsAllCard = ({ AppsLoaddata }) => {
  const [text, setText] = useState("");
  const navigate = useNavigate();
  return (
    <section className="bg-gray-100 py-12">
      <div className="max-w-7xl mx-auto px-4 space-y-10">
        <div className="text-center space-y-2">
          <h1 className="text-3xl font-bold flex justify-center items-center   gap-2">
            Our All Applications
            <VscVscode className="text-purple-600 text-4xl" />
          </h1>
          <p className="text-gray-600">
            Explore All Apps on the Market developed by us. We code for Millions
          </p>
        </div>
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <h1 className="text-xl font-semibold">
            <span className="text-blue-600">({AppsLoaddata.length})</span> Apps
            Found
          </h1>

          <input
            type="search"
            placeholder="Search apps"
            className={`input input-bordered  ${
              text ? "input-success" : ""
            } w-full max-w-xs`}
            onChange={(e) => setText(e.target.value)}
          />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {AppsLoaddata.map((Data) => (
            <AppsCardShow
              onClick={() => navigate(`/app/app-details/${Data.id}`)}
              key={Data.id}
              Data={Data}
            ></AppsCardShow>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AppsAllCard;

import React from "react";
import download from "../../assets/All Image/icon-downloads.png";
import ratings from "../../assets/All Image/icon-ratings.png";
const AppsCardShow = ({ Data, onClick }) => {
  return (
    <div
      onClick={onClick}
      className="bg-white rounded-lg shadow-md p-4 flex flex-col hover:shadow-xl transition-shadow duration-300"
    >
      <img
        src={Data.image}
        alt={Data.title}
        className="w-full h-40 object-contain mb-4 rounded-3xl"
      />
      <h2 className="font-bold text-lg mb-4 text-start">{Data.title}</h2>
      <div className="flex justify-between text-gray-600">
        <p className="flex items-center gap-1">
          <img src={download} alt={Data.title} className="w-4 h-4" />
          {Data.downloads}
        </p>
        <p className="flex items-center gap-1">
          <img src={ratings} alt="Ratings" className="w-4 h-4" />
          {Data.ratingAvg}
        </p>
      </div>
    </div>
  );
};

export default AppsCardShow;

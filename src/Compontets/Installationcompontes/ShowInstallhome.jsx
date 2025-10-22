import React from "react";
import { IoMdDownload } from "react-icons/io";
import { FaStar } from "react-icons/fa";
const ShowInstallhome = ({ app, handleUninstall }) => {
  return (
    <div
      key={app.id}
      className="flex flex-col sm:flex-row justify-between items-start sm:items-center border border-gray-300 rounded-xl p-4 bg-white shadow-sm hover:shadow-md transition-shadow duration-300"
    >
      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 w-full sm:w-auto">
        <img
          src={app.image}
          alt={app.title}
          className="w-[100px] h-[100px] object-cover rounded-xl flex-shrink-0"
        />
        <div className="flex flex-col mt-2 sm:mt-0">
          <h1 className="text-2xl font-bold text-gray-800">{app.title}</h1>
          <div className="flex flex-wrap gap-4 mt-2 text-gray-500 font-semibold text-sm sm:text-base">
            <div className="flex flex-wrap gap-6 text-gray-600 mt-2">
              <p className="flex items-center gap-1 text-sm sm:text-base">
                <IoMdDownload className="text-blue-600" /> {app.downloads}
              </p>

              <p className="flex items-center gap-1 text-sm sm:text-base">
                <FaStar className="text-yellow-500" /> {app.ratingAvg}
              </p>

              <p className="text-sm sm:text-base">Size: {app.size}MB</p>
            </div>
          </div>
        </div>
      </div>

      {/* Right: Uninstall Button */}
      <div className="mt-3">
        <button
          onClick={() => handleUninstall(app.id)}
          className="btn btn-red-500 text-xl text-white bg-purple-600 p-6 w-full md:p-8 rounded-lg hover:bg-red-700 transition-colors duration-300"
        >
          Uninstall
        </button>
      </div>
    </div>
  );
};

export default ShowInstallhome;

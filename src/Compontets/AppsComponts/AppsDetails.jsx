import React, { useState, useEffect } from "react";
import { IoMdDownload } from "react-icons/io";
import { AiFillLike } from "react-icons/ai";
import { FaStar } from "react-icons/fa";
import { useLoaderData, useParams } from "react-router";
import AppsNotFound from "../../Pages/404ErrorPages/AppsNotFound.jsx";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";
import { toast } from "react-toastify";

const AppsDetails = () => {
  const dataArray = useLoaderData();
  const { id } = useParams();
  const appId = parseInt(id);

  const data = dataArray.find((item) => item.id === appId);

  if (!data) {
    return <AppsNotFound />;
  }

  const ratings = [...data.ratings].reverse();
  const [installed, setInstalled] = useState(false);

  useEffect(() => {
    const installedApps =
      JSON.parse(localStorage.getItem("installedApps")) || [];
    if (installedApps.find((app) => app.id === data.id)) {
      setInstalled(true);
    }
  }, [data.id]);

  const handleInstall = () => {
    const installedApps =
      JSON.parse(localStorage.getItem("installedApps")) || [];
    if (!installedApps.find((app) => app.id === data.id)) {
      installedApps.push(data);
      localStorage.setItem("installedApps", JSON.stringify(installedApps));
      setInstalled(true);
      toast.success(`${data.title} Installed Successfully!`);
    }
  };

  return (
    <section className="max-w-[1400px] mx-auto bg-gray-100 p-6 md:p-8 lg:p-12 text-black">
      {/* Main App Details */}
      <div className="shadow-sm flex flex-col md:flex-row bg-white rounded-lg overflow-hidden p-4 md:p-6 lg:p-8 space-y-6 md:space-y-0 md:space-x-8">
        <figure className="md:w-1/3 lg:w-1/4">
          <img
            src={data.image}
            alt={data.title}
            className="w-full h-full rounded-lg"
          />
        </figure>

        <div className="md:w-2/3 lg:w-3/4 flex flex-col space-y-6">
          <h2 className="card-title text-2xl md:text-3xl lg:text-4xl font-bold">
            {data.title}
          </h2>

          <p className="text-gray-700 text-lg md:text-xl lg:text-2xl leading-relaxed">
            {data.companyName}
          </p>

          <hr className="border-gray-300" />

          <div className="flex justify-start space-x-6 md:space-x-10 lg:space-x-12">
            <div className="flex flex-col items-center">
              <IoMdDownload className="text-2xl md:text-3xl lg:text-3xl text-blue-600" />
              <p className="text-base md:text-lg lg:text-xl mt-1">Download</p>
              <h5 className="font-bold text-2xl md:text-4xl lg:text-5xl mt-1">
                {data.downloads}
              </h5>
            </div>

            <div className="flex flex-col items-center">
              <FaStar className="text-2xl md:text-3xl lg:text-3xl text-yellow-500" />
              <p className="text-base md:text-lg lg:text-xl mt-1">
                Average Ratings
              </p>
              <h5 className="font-bold text-2xl md:text-4xl lg:text-5xl mt-1">
                {data.ratingAvg}
              </h5>
            </div>

            <div className="flex flex-col items-center">
              <AiFillLike className="text-2xl md:text-3xl lg:text-3xl text-red-500" />
              <p className="text-base md:text-lg lg:text-xl mt-1">Likes</p>
              <h5 className="font-bold text-2xl md:text-4xl lg:text-5xl mt-1">
                {data.reviews}
              </h5>
            </div>
          </div>

          <div className="mt-6">
            <button
              disabled={installed}
              onClick={handleInstall}
              className={`btn btn-primary text-lg md:text-xl lg:text-2xl px-6 py-2 md:px-10 md:py-10 lg:px-9 lg:py-9 ${
                installed ? "bg-purple-700 text-white" : ""
              }`}
            >
              {installed ? "Installed" : `Install Now (${data.size}MB)`}
            </button>
          </div>
        </div>
      </div>

      {/* Ratings */}
      <hr className="mt-8 mb-5 border-gray-400" />
      <div className="max-w-[1400px] mx-auto">
        <h1 className="text-2xl font-semibold mb-4">Ratings</h1>
        <div className="w-full h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={ratings} layout="vertical">
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis type="number" />
              <YAxis type="category" dataKey="name" />
              <Tooltip />
              <Bar dataKey="count" barSize={25} fill="#ff8811" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Description */}
      <hr className="mt-8 mb-5 border-gray-400" />
      <div className="max-w-[1400px] mx-auto">
        <h1 className="text-2xl font-bold mb-4">Description</h1>
        <div className="flex flex-col  space-y-5 gap-8 text-gray-700">
          <p>{data.description}</p>
          <p>{data.description}</p>
          <p>{data.description}</p>
          <p>
            Most modern applications now come with advanced features powered by
            AI to enhance user experience in various ways. These features
            include personalized suggestions, smart automation, adaptive
            learning, and even offline intelligence for better usability. The
            integration of AI allows users to perform complex tasks with minimal
            effort and improved accuracy.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AppsDetails;

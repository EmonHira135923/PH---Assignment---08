import React from "react";
import { IoMdDownload } from "react-icons/io";
import { AiFillLike } from "react-icons/ai";
import { FaStar } from "react-icons/fa";
import { useLoaderData, useParams } from "react-router";

const AppsDetails = () => {
  const dataarray = useLoaderData();
  const { id } = useParams();
  const data = dataarray.find((item) => item.id === parseInt(id));
  console.log(data);

  return (
    <section className="max-w-[1400px] mx-auto bg-gray-100 p-6 md:p-8 lg:p-12 text-black">
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
            {data.description}
          </p>

          <hr className="border-gray-300" />

          <div className="flex justify-start  space-x-6 md:space-x-10 lg:space-x-12">
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

          {/* Button and Toast and Other Functionality */}
          <div className="mt-6">
            <button className="btn btn-primary text-lg md:text-xl lg:text-2xl px-6 py-2 md:px-10 md:py-10 lg:px-9 lg:py-9">
              Install Now (291 MB)
            </button>
          </div>
        </div>
      </div>
      <hr className="mt-8 border-gray-400" />
    </section>
  );
};

export default AppsDetails;

import React from "react";
import ErrorImg from "../../assets/All Image/App-Error.png";
import { useNavigate } from "react-router";

const AppsNotFound = () => {
  const navigation = useNavigate();
  return (
    <div>
      <section>
        <div>
          <img
            src={ErrorImg}
            alt="404-image"
            className="md:h-130 md:w-130 w-85 h-85 mt-5 mb-5 p-3 mx-auto "
          ></img>
          <h1 className="text-[22px] md:text-4xl font-bold text-center mt-5">
            OPPS!! APP NOT FOUND
          </h1>
          <p className="text-[18px] md:text-lg text-gray-500 font-semibold text-center mt-3 ">
            The App you are requesting is not found on our system. please try
            another apps
          </p>
          <div className="flex items-center justify-center mb-5 mt-3">
            <button
              onClick={() => navigation("/")}
              className="btn text-lg bg-gradient-to-r from-[#632ee3] to-[#9f62f2] text-white w-3.5/5 p-6   md:p-10 md:w-2.5/12 rounded-2xl hover:to-[#4b1fe0]"
            >
              Go Back
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AppsNotFound;

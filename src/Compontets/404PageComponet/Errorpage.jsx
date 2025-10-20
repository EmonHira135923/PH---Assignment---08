import React from "react";
import ErrorImg from "../../assets/All Image/error-404.png";
import { useNavigate } from "react-router";
import Navvar from "../NavComponets/Navvar";
import Footer from "../FooterComponets/Footer";

const ErrorPage = () => {
  const navigation = useNavigate();
  return (
    <div>
      <Navvar></Navvar>
      <section>
        <div>
          <img
            src={ErrorImg}
            alt="404-image"
            className="md:h-130 md:w-130 w-85 h-85 mt-5 mb-5 p-3 mx-auto "
          ></img>
          <h1 className="text-[22px] md:text-4xl font-bold text-center mt-5">
            Oops, page not found!
          </h1>
          <p className="text-[18px] md:text-lg text-gray-500 font-semibold text-center mt-3 ">
            The page you are looking for is not available.
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
      <Footer></Footer>
    </div>
  );
};

export default ErrorPage;

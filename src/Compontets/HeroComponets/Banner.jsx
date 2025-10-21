import React from "react";
import HeroImg from "../../assets/All Image/hero.png";
import { Play } from "lucide-react";
import { NavLink } from "react-router";

const Banner = () => {
  return (
    <section className="flex flex-col items-center max-w-[1400px] justify-center px-4">
      {/* Text Section */}
      <div className="text-center max-w-md space-y-6 mt-10">
        <h1 className="text-4xl sm:text-5xl font-bold">
          We Build <br />
          <span className="text-[#9f62f2]">Productive</span> Apps
        </h1>
        <p className="text-gray-600 text-base sm:text-lg">
          At HERO.IO, we craft innovative apps designed to make everyday life
          simpler, smarter, and more exciting. Our goal is to turn your ideas
          into digital experiences that truly make an impact.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="btn btn-default w-full sm:w-auto flex items-center gap-2 justify-center">
            <NavLink
              to={`https://play.google.com/store/apps?hl=en`}
              target="_blank"
              className="flex items-center gap-2 justify-center w-full"
            >
              <img
                src="https://i.ibb.co.com/FbKpYSZM/fi-16076057.png"
                alt="Play-Store"
                className="w-6 h-6"
              />
              Google Play
            </NavLink>
          </button>
          <button className="btn btn-default w-full sm:w-auto flex items-center gap-2 justify-center">
            <NavLink
              to={`https://www.apple.com/app-store/`}
              target="_blank"
              className="flex items-center gap-2 justify-center w-full"
            >
              <img
                src="https://i.ibb.co.com/nsnkP9cv/fi-5977575.png"
                alt="Apple-Store"
                className="w-6 h-6"
              />
              App Store
            </NavLink>
          </button>
        </div>
      </div>

      {/* Image Section */}
      <div className="mt-10 w-full">
        <img
          src={HeroImg}
          alt="Hero-Img"
          className="w-full h-full object-cover"
        />
      </div>
    </section>
  );
};

export default Banner;

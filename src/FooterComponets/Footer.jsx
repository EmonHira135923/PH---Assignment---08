import React from "react";
import HeroIcon from "..//assets/All Image/logo.png";
import { Facebook, Linkedin, Twitter } from "lucide-react";
const Footer = () => {
  return (
    <footer className="max-w-[1400px] mx-auto bg-[#001931] p-6 md:p-12 text-white">
      <div className="flex flex-col md:flex-row justify-between items-center gap-6 md:gap-0">
        <div className="flex items-center gap-2">
          <img
            src={HeroIcon}
            alt="Hero-Icon"
            className="w-7 h-7 md:w-12 md:h-12 object-cover"
          />
          <span className="text-xl md:text-2xl bg-clip-text bg-gradient-to-r from-[#632ee3] to-[#9f62f2] text-transparent font-bold">
            HERO.IO
          </span>
        </div>

        <div className="flex flex-col items-center md:items-end">
          <p className="mb-2 md:mb-3 text-center text-lg md:text-xl font-bold md:text-right">
            Social Icon
          </p>
          <div className="flex gap-4 mt-2">
            <Twitter />
            <Facebook />
            <Linkedin />
          </div>
        </div>
      </div>
      <div className="mt-6 md:mt-10 flex items-center justify-center text-sm md:text-xl">
        <p>Copyright © 2025 - All rights reserved</p>
      </div>
    </footer>
  );
};

export default Footer;

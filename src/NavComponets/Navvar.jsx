import React, { useState } from "react";
import { Menu, X, Github } from "lucide-react";
import { NavLink } from "react-router";
import HeroIcon from "../assets/All Image/logo.png";

const Navvar = () => {
  const [toggle, settoggle] = useState(true);

  return (
    <nav className="p-5 bg-gray-50 shadow-md ">
      <div className="flex justify-between gap-5 items-center mt-3 text-xl font-bold ">
        {/* start */}
        <div className="flex items-center gap-2">
          <div className="md:hidden flex">
            <button onClick={() => settoggle(!toggle)}>
              {toggle ? <Menu /> : <X />}
            </button>
          </div>
          <NavLink className="flex gap-2 items-center" to="/">
            <img
              src={HeroIcon}
              alt="Hero-Icon"
              className="md:w-15 md:h-15 object-cover w-7 h-7"
            />
            <span className="md:text-2xl bg-clip-text bg-gradient-to-r from-[#632ee3] to-[#9f62f2] text-transparent">
              HERO.IO
            </span>
          </NavLink>
        </div>
        <div
          className={` flex flex-col md:hidden mt-1 ml-1 absolute bg-gray-300 p-5 rounded-xl ${
            toggle ? "-top-80 " : " top-22 -left-0 space-y-3"
          }`}
        >
          <NavLink to="/">Home</NavLink>
          <NavLink to="/app">Apps</NavLink>
          <NavLink to="/install">Installation</NavLink>
        </div>
        <div className="md:flex items-center gap-5 hidden">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/app">Apps</NavLink>
          <NavLink to="/install">Installation</NavLink>
        </div>
        {/* end */}
        <div className="flex">
          <button className="btn text-white bg-gradient-to-r from-[#632ee3] to-[#9f62f2] text-xl py-6 px-5 md:p-7 md:w-40 ">
            <NavLink
              target="_blank"
              className="flex items-center gap-2"
              to="https://github.com/EmonHira135923"
            >
              <Github /> Contribute
            </NavLink>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navvar;

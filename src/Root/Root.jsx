import React from "react";
import { Outlet } from "react-router";
import Navvar from "../Compontets/NavComponets/Navvar.jsx";
import Footer from "../Compontets/FooterComponets/Footer.jsx";

const Root = () => {
  return (
    <div>
      <Navvar></Navvar>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Root;

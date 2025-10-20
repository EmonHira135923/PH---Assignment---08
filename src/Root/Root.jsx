import React from "react";
import { Outlet } from "react-router";
import Navvar from "../NavComponets/Navvar";
import Footer from "../FooterComponets/Footer";

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

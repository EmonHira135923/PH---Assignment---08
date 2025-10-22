import React from "react";
import { Outlet, useNavigation } from "react-router";
import Navvar from "../Compontets/NavComponets/Navvar.jsx";
import Footer from "../Compontets/FooterComponets/Footer.jsx";
import loadingimg from "../assets/All Image/logo.png";

const Root = () => {
  const navigation = useNavigation();

  return (
    <div className="relative min-h-screen">
      <Navvar />
      {navigation.state === "loading" && (
        <section className="max-w-[1400px] mx-auto">
          <div className="fixed inset-0 flex flex-col justify-center items-center z-50 pointer-events-none">
            <p className="text-gray-500  text-5xl font-semibold flex items-center gap-2">
              L
              <span className="inline-block animate-spin">
                <img src={loadingimg} alt="o" className="w-12 h-12" />
              </span>
              ading...
            </p>
          </div>
        </section>
      )}

      <Outlet />
      <Footer />
    </div>
  );
};

export default Root;

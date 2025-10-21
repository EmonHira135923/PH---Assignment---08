import React from "react";

const Marketing = () => {
  return (
    <section className="max-w-[1400px] mx-auto bg-gradient-to-r from-[#632ee3] to-[#9f62f2] text-white px-4 py-16">
      <div className="flex flex-col items-center justify-center text-center space-y-10">
        <h1 className="text-3xl md:text-5xl font-bold">
          Trusted by Millions, Built for You
        </h1>
        <div className="flex flex-col md:flex-row items-center justify-center gap-10 md:gap-20 w-full">
          {/* Total Downloads */}
          <div className="flex flex-col items-center px-4 py-6">
            <p className="text-gray-300 text-base">Total Downloads</p>
            <h1 className="text-5xl font-bold mt-3 mb-3">29.6M</h1>
            <p className="text-gray-300 text-base">21% more than last month</p>
          </div>

          {/* Total Reviews */}
          <div className="flex flex-col items-center px-4 py-6">
            <p className="text-gray-300 text-base">Total Reviews</p>
            <h1 className="text-5xl font-bold mt-3 mb-3">906K</h1>
            <p className="text-gray-300 text-base">46% more than last month</p>
          </div>

          {/* Active Apps */}
          <div className="flex flex-col items-center px-4 py-6">
            <p className="text-gray-300 text-base">Active Apps</p>
            <h1 className="text-5xl font-bold mt-3 mb-3">132+</h1>
            <p className="text-gray-300 text-base">31 more will Launch</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Marketing;

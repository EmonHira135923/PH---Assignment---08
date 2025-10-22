import React, { useState, useEffect } from "react";
import AppsCardShow from "./AppsCardShow";
import { VscVscode } from "react-icons/vsc";
import { useNavigate } from "react-router";
import loadingimg from "../../assets/All Image/logo.png";

const AppsAllCard = ({ AppsLoaddata }) => {
  const [text, setText] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const filtered = AppsLoaddata.filter(
    (app) =>
      app.id.toString().includes(text) ||
      app.title.toLowerCase().includes(text.toLowerCase())
  );

  const handleSearchChange = (e) => {
    setText(e.target.value);
    setLoading(true);
  };

  useEffect(() => {
    setLoading(false);
  }, [filtered]);

  return (
    <section className="bg-gray-100 py-12 relative">
      <div className="max-w-7xl mx-auto px-4 space-y-10">
        {/* Title */}
        <div className="text-center space-y-2">
          <h1 className="text-3xl font-bold flex justify-center items-center gap-2">
            Our All Applications
            <VscVscode className="text-purple-600 text-4xl" />
          </h1>
          <p className="text-gray-600">
            Explore All Apps on the Market developed by us. We code for Millions
          </p>
        </div>

        {/* Search */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <h1 className="text-xl font-semibold">
            <span className="text-blue-600">({filtered.length})</span> Apps
            Found
          </h1>
          <input
            type="search"
            placeholder="Search apps"
            className={`input input-bordered ${
              text ? "input-success" : ""
            } w-full max-w-xs`}
            onChange={handleSearchChange}
            value={text}
          />
        </div>

        {/* Loading Spinner */}
        {loading && (
          <div className="fixed inset-0 flex flex-col justify-center items-center z-50 pointer-events-none bg-white/50">
            <p className="text-gray-500 text-5xl font-semibold flex items-center gap-2">
              L
              <span className="inline-block animate-spin">
                <img src={loadingimg} alt="o" className="w-12 h-12" />
              </span>
              ading...
            </p>
          </div>
        )}

        {/* Apps Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {!loading &&
            (filtered.length === 0 ? (
              <div className="flex flex-col justify-center items-center col-span-full gap-4">
                <p className="text-center text-gray-500 text-5xl">
                  No apps found
                </p>
                <button
                  className="btn mt-3 btn-outline bg-purple-600 text-xl text-white p-8 w-3.5/12"
                  onClick={() => setText("")}
                >
                  Reset Search
                </button>
              </div>
            ) : (
              filtered.map((Data) => (
                <AppsCardShow
                  onClick={() => navigate(`/app/app-details/${Data.id}`)}
                  key={Data.id}
                  Data={Data}
                />
              ))
            ))}
        </div>
      </div>
    </section>
  );
};

export default AppsAllCard;

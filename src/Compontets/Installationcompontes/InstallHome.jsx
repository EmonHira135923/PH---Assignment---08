import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";
import ShowInstallhome from "./ShowInstallhome";
import { useNavigate } from "react-router";
const InstallHome = () => {
  const [installedApps, setInstalledApps] = useState([]);
  const [sortOrder, setSortOrder] = useState("");
  const navigate = useNavigate();
  useEffect(() => {
    const apps = JSON.parse(localStorage.getItem("installedApps")) || [];
    setInstalledApps(apps);
  }, []);

  const handleUninstall = (id) => {
    const appToUninstall = installedApps.find((app) => app.id === id);
    const updatedApps = installedApps.filter((app) => app.id !== id);
    setInstalledApps(updatedApps);
    localStorage.setItem("installedApps", JSON.stringify(updatedApps));
    toast.success(`${appToUninstall.title} Uninstall Successfully!!!`);
  };

  const sortedApps = [...installedApps].sort((a, b) => {
    if (sortOrder === "High to Low") return b.size - a.size;
    if (sortOrder === "Low to High") return a.size - b.size;
    return 0;
  });

  return (
    <section className="bg-gray-100 py-12">
      <div className="max-w-7xl mx-auto px-4 space-y-10">
        {/* Header */}
        <div className="text-center space-y-2">
          <h1 className="text-3xl font-bold flex justify-center items-center gap-2">
            Your Installed Apps
          </h1>
          <p className="text-gray-600">
            Explore All Trending Apps on the Market developed by us
          </p>
        </div>

        {/* Filter & count */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <h1 className="text-xl font-semibold">
            <span> ({installedApps.length}) </span> Apps Found
          </h1>

          <select
            value={sortOrder}
            onChange={(e) => setSortOrder(e.target.value)}
            className="select"
          >
            <option value="">Sort By Size</option>
            <option value="High to Low">High to Low</option>
            <option value="Low to High">Low to High</option>
          </select>
        </div>

        {/* Installed Apps List */}
        <div className="space-y-5">
          {sortedApps.length === 0 ? (
            <div className="flex flex-col justify-center items-center col-span-full gap-4">
              <p className="text-center text-gray-500 text-5xl">
                No apps found
              </p>
              <button
                onClick={() => navigate("/app")}
                className="btn mt-3 btn-outline bg-purple-600 text-xl text-white p-8 w-3.5/12"
              >
                Install App
              </button>
            </div>
          ) : (
            sortedApps.map((app) => (
              <ShowInstallhome
                key={app.id}
                app={app}
                handleUninstall={handleUninstall}
              ></ShowInstallhome>
            ))
          )}
        </div>
      </div>
    </section>
  );
};

export default InstallHome;

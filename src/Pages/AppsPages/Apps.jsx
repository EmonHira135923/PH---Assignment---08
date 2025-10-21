import React from "react";
import AppsAllCard from "../../Compontets/AppsComponts/AppsAllCard";
import { useLoaderData } from "react-router";

const Apps = () => {
  const AppsLoaddata = useLoaderData();
  return (
    <div>
      <AppsAllCard AppsLoaddata={AppsLoaddata}></AppsAllCard>
    </div>
  );
};

export default Apps;

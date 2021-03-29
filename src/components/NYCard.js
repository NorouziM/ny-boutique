import { CardBody } from "@windmill/react-ui";

import React from "react";
import { Link } from "react-router-dom";

export default function NYCard({ size, title, imageUrl, linkUrl }) {
  var classString = "mx-3 md:ml-3 border-2 rounded-md shadow-lg mb-3 ";
  if (size === "large") classString += "col-span-6";
  else classString += "col-span-4";

  return (
    <div className={classString}>
      <CardBody
        style={{ padding: "0px" }}
        className="justify-center flex items-center overflow-hidden"
      >
        <div
          style={{
            filter: "grayscale(30%)",
            opacity: "0.92",
            height: "25rem",
            backgroundImage: `url(${imageUrl})`,
          }}
          className=" group w-full h-full bg-cover bg-gray-900 bg-opacity-50 bg-no-repeat bg-center transform rounded-md"
        ></div>

        <div className="flex flex-col justify-center rounded-md items-center w-64 h-32 absolute">
          <h1 className="text-5xl mb-1 font-bold text-white">
            {title.toUpperCase()}
          </h1>
          <Link to={process.env.PUBLIC_URL + `/${linkUrl}`}>
            <span className="text-lg text-white">SHOP NOW</span>
          </Link>
        </div>
      </CardBody>
    </div>
  );
}

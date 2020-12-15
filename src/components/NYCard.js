import { CardBody } from "@windmill/react-ui";

import React from "react";

export default function NYCard({ size, title, imageUrl, linkUrl }) {
  var classString = "mx-3 md:ml-3 border-2 border-black shadow-lg mb-3 ";
  if (size == "large") classString += "col-span-6";
  else classString += "col-span-4";

  return (
    <div className={classString}>
      <CardBody
        style={{ padding: "0px" }}
        className=" justify-center flex items-center overflow-hidden"
      >
        <div
          style={{
            height: "25rem",
            backgroundImage: `url(${imageUrl})`,
          }}
          className=" group w-full h-full bg-cover bg-no-repeat bg-center transform hover:scale-110 transition duration-6000 ease-out"
        ></div>

        <div className="flex flex-col justify-center border-gray-800 border-2 bg-gray-300 opacity-80	items-center w-64 h-32 absolute">
          <h1 className="text-3xl mb-1 font-bold">{title.toUpperCase()}</h1>
          <span className="text-lg">SHOP NOW</span>
        </div>
      </CardBody>
    </div>
  );
}

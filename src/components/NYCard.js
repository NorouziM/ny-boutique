import { CardBody } from "@windmill/react-ui";

import React from "react";

export default function NYCard() {
  return (
    <div className="flex flex-col flex-shrink-0 md:grid md:grid-cols-12 gap-4 w-full mt-14 h-64">
      <div className="mx-3 md:ml-3 border-2 border-black col-span-4 shadow-lg">
        <CardBody className="p-12 justify-center flex items-center h-64">
          <div className="flex flex-col justify-center bg-gray-300 items-center w-1/3 h-1/3">
            <h1>HATS</h1>
            <span>SHOP NOW</span>
          </div>
        </CardBody>
      </div>
      <div className="mx-3 col-span-4 border-2 border-black shadow-lg">
        <CardBody className="p-12 justify-center flex items-center h-64">
          <div className="flex flex-col justify-center bg-gray-300 items-center w-1/3 h-1/3">
            <h1>HATS</h1>
            <span>SHOP NOW</span>
          </div>
        </CardBody>
      </div>
      <div className="mx-3 md:mr-3 border-2 border-black col-span-4 shadow-lg">
        <CardBody className="p-12 justify-center flex items-center h-64">
          <div className="flex flex-col justify-center bg-gray-300 items-center w-1/3 h-1/3">
            <h1>HATS</h1>
            <span>SHOP NOW</span>
          </div>
        </CardBody>
      </div>
    </div>
  );
}

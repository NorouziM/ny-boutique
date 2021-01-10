import React from "react";
import PulseLoader from "react-spinners/PulseLoader";

export const Spinner = ({ size }) => {
  return (
    <div className="flex justify-center items-center absolute mx-auto h-full w-full">
      <PulseLoader color={"#1f2937"} loading={true} size={size} />
    </div>
  );
};

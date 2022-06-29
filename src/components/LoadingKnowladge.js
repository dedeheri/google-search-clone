import React from "react";

function LoadingKnowladge() {
  return (
    <div className="w-full lg:w-[23rem] animate-pulse">
      <div className="border border-[#3e3f41] rounded-2xl w-full space-y-3">
        <div className="w-full h-60 bg-blue-600 rounded-t-xl" />
        <div className="p-1 space-y-2">
          <div className="w-full h-7 bg-gray-600 rounded-xl" />
          <div className="w-full h-7 bg-gray-600 rounded-xl" />
          <div className="w-full h-7 bg-gray-600 rounded-xl" />
          <div className="w-full h-7 bg-gray-600 rounded-xl" />
          <div className="w-full h-7 bg-gray-600 rounded-xl" />
          <div className="w-full h-7 bg-gray-600 rounded-xl" />
          <div className="w-full h-7 bg-gray-600 rounded-xl" />
        </div>
      </div>
    </div>
  );
}

export default LoadingKnowladge;

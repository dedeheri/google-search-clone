import React from "react";

function LoadingResult() {
  return (
    <div className="animate-pulse  w-full lg:w-[40rem] col-span-2 space-y-8">
      <div className="grid grid-cols-1 gap-2">
        <div className="w-1/2 h-5 bg-gray-600 rounded-md" />
        <div className="w-full h-7 bg-blue-600 rounded-md" />
        <div className="w-full h-7 bg-gray-600 rounded-md" />
        <div className="w-1/2 h-7 bg-gray-600 rounded-md" />
        <div className="w-1/3 h-7 bg-gray-600 rounded-md" />
      </div>

      <div className="grid grid-cols-1 gap-2">
        <div className="w-1/2 h-5 bg-gray-600 rounded-md" />
        <div className="w-full h-7 bg-blue-600 rounded-md" />
        <div className="w-full h-7 bg-gray-600 rounded-md" />
        <div className="w-1/2 h-7 bg-gray-600 rounded-md" />
        <div className="w-1/3 h-7 bg-gray-600 rounded-md" />
      </div>

      <div className="grid grid-cols-1 gap-2">
        <div className="w-1/2 h-5 bg-gray-600 rounded-md" />
        <div className="w-full h-7 bg-blue-600 rounded-md" />
        <div className="w-full h-7 bg-gray-600 rounded-md" />
        <div className="w-1/2 h-7 bg-gray-600 rounded-md" />
        <div className="w-1/3 h-7 bg-gray-600 rounded-md" />
      </div>
    </div>
  );
}

export default LoadingResult;

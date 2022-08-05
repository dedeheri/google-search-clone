import React from "react";

function LoadingImage() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 animate-pulse mt-5 gap-5">
      {[...Array(50)].map((_, i) => (
        <div key={i} className="w-full h-40 bg-gray-600 rounded-md" />
      ))}
    </div>
  );
}

export default LoadingImage;

import React from "react";

function Footer() {
  return (
    <div className="h-auto w-full mt-10 bg-[#171717] text-gray-400 py-6 items-center space-y-2 ">
      <h1 className="px-5 ">Build by DH for comedy</h1>
      <div className="border-t border-[#5F6368]" />
      <div className="px-5 md:flex  md:justify-between space-y-5 md:space-y-0">
        <div className="flex justify-center space-x-4">
          <h1 className="hover:underline cursor-pointer">About</h1>
          <h1 className="hover:underline cursor-pointer">Advertising</h1>
          <h1 className="hover:underline cursor-pointer">Business</h1>
          <h1 className="hover:underline cursor-pointer">How Search Work</h1>
        </div>
        <div className="flex justify-center space-x-4">
          <h1 className="hover:underline cursor-pointer">Privacy</h1>
          <h1 className="hover:underline cursor-pointer">Terms</h1>
          <h1 className="hover:underline cursor-pointer">Settings</h1>
        </div>
      </div>
    </div>
  );
}

export default Footer;

import React from "react";

import { NavLink, useLocation } from "react-router-dom";
import { IoCloseSharp } from "react-icons/io5";
// icons
import {
  search,
  playBtn,
  newspaper,
  cardImage,
  searchColor,
  videoColor,
  newsColor,
  imageColor,
  searchGray,
  videoGray,
  newsGray,
  imageGray,
} from "../assets";

function Nav() {
  const location = useLocation();

  return (
    <>
      <div className="flex items-center space-x-5 max-w-[42rem] px-4 lg:mx-[10.25rem]">
        <NavLink to={"/search" + location.search}>
          {({ isActive }) =>
            isActive ? (
              <div className="flex items-center space-x-2 border-b-[0.2rem] border-[#8ab4f8] pb-2">
                <img src={searchColor} alt={searchColor} className="h-4" />
                <h1 className="text-sm pb-1 text-[#8ab4f8]">All</h1>
              </div>
            ) : (
              <div className="flex items-center space-x-2 border-b-[0.2rem] border-transparent pb-2">
                <img src={searchGray} alt={searchGray} className="h-4" />
                <h1 className="text-sm pb-1 text-[#969BA1]">All</h1>
              </div>
            )
          }
        </NavLink>

        <NavLink to={"/video" + location.search}>
          {({ isActive }) =>
            isActive ? (
              <div className="flex items-center space-x-2 border-b-[0.2rem] border-[#8ab4f8] pb-2">
                <img src={videoColor} alt={videoColor} className="h-4" />
                <h1 className="text-sm pb-1 text-[#8ab4f8]">Video</h1>
              </div>
            ) : (
              <div className="flex items-center space-x-2 border-b-[0.2rem] border-transparent pb-2">
                <img src={videoGray} alt={videoGray} className="h-4" />
                <h1 className="text-sm pb-1 text-[#969BA1]">Video</h1>
              </div>
            )
          }
        </NavLink>

        <NavLink to={"/image" + location.search}>
          {({ isActive }) =>
            isActive ? (
              <div className="flex items-center space-x-2 border-b-[0.2rem] border-[#8ab4f8] pb-2">
                <img src={imageColor} alt={imageColor} className="h-4" />
                <h1 className="text-sm pb-1 text-[#8ab4f8]">Image</h1>
              </div>
            ) : (
              <div className="flex items-center space-x-2 border-b-[0.2rem] border-transparent pb-2">
                <img src={imageGray} alt={imageGray} className="h-4" />
                <h1 className="text-sm pb-1 text-[#969BA1]">Image</h1>
              </div>
            )
          }
        </NavLink>

        <NavLink to={"/news" + location.search}>
          {({ isActive }) =>
            isActive ? (
              <div className="flex items-center space-x-2 border-b-[0.2rem] border-[#8ab4f8] pb-2">
                <img src={newsColor} alt={newsColor} className="h-4" />
                <h1 className="text-sm pb-1 text-[#8ab4f8]">News</h1>
              </div>
            ) : (
              <div className="flex items-center space-x-2 border-b-[0.2rem] border-transparent pb-2">
                <img src={newsGray} alt={newsGray} className="h-4" />
                <h1 className="text-sm pb-1 text-[#969BA1]">News</h1>
              </div>
            )
          }
        </NavLink>
      </div>

      <div className="border-b border-[#3e3f41]" />
    </>
  );
}

export default Nav;

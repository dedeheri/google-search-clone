import React, { useState } from "react";
import { BiSearch } from "react-icons/bi";
import { IoCloseSharp } from "react-icons/io5";

import {
  createSearchParams,
  Link,
  useLocation,
  useNavigate,
} from "react-router-dom";
import { banner, google, mic } from "../assets";
import Popover from "./Popover";

function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();

  const params = new URLSearchParams(location.search);

  const [clearSearchTerm, setClearSearchTerm] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [histroySearch, setHistorySearch] = useState(params.get("q"));

  function handleSearchTerm(e) {
    const term = e.target.value;
    term ? setClearSearchTerm(true) : setClearSearchTerm(false);
    term ? setSearchTerm(term) : setSearchTerm("");
  }

  console.log(histroySearch);

  function handleClearSearchTerm() {
    setClearSearchTerm(false);
    setSearchTerm("");
    setHistorySearch("");
  }

  function handleResult(e) {
    e.preventDefault();
    if (searchTerm) {
      navigate({
        search: `${createSearchParams({
          q: searchTerm.split("%2B").join("+"),
        })}`,
        pathname: "/search",
      });
    }
  }

  return (
    <form onSubmit={handleResult} className="py-7 md:px-6 px-4 w-full">
      <div className="flex items-center md:justify-between ">
        {/* logo */}
        <div className="space-x-3 md:space-x-6 lg:space-x-10 w-full flex items-center">
          <Link to="/">
            <img
              src={banner}
              alt={banner}
              className="w-[5.5rem] hidden md:block"
            />
            <img src={google} alt={google} className="w-7 block md:hidden" />
          </Link>

          {/* input */}

          <div className="h-12 bg-[#2F3034] w-full sm:w-[30rem] md:w-[35rem] lg:w-[43rem] rounded-full px-7">
            <div className="flex space-x-1 md:space-x-3 items-center h-full w-full">
              <input
                value={searchTerm ? searchTerm : histroySearch}
                onChange={handleSearchTerm}
                className=" bg-transparent outline-none text-white w-full  text-lg"
              />

              {clearSearchTerm && (
                <div className="flex space-x-3 cursor-pointer">
                  <div onClick={handleClearSearchTerm}>
                    <IoCloseSharp fontSize={25} className="text-gray-400" />
                  </div>
                  <div className="border-r border-[#5F6368]" />
                </div>
              )}

              <img src={mic} alt={mic} className="w-8 cursor-pointer" />
              <BiSearch fontSize={25} className="text-blue-300" />
            </div>
          </div>
        </div>

        {/* add */}
        <Popover />
      </div>
    </form>
  );
}

export default Navbar;

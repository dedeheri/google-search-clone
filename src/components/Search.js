import React, { useState } from "react";

// icons
import { BiSearch } from "react-icons/bi";
import { IoCloseSharp } from "react-icons/io5";
import { useNavigate, createSearchParams, Link } from "react-router-dom";

import { banner, mic } from "../assets";
import Button from "./Button";

function Search() {
  const navigate = useNavigate();
  const [clearSearchTerm, setClearSearchTerm] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  function handleSearchTerm(e) {
    const term = e.target.value;
    term ? setClearSearchTerm(true) : setClearSearchTerm(false);
    term ? setSearchTerm(term) : setSearchTerm("");
  }

  function handleClearSearchTerm() {
    setClearSearchTerm(false);
    setSearchTerm("");
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
    <form
      onSubmit={handleResult}
      className=" flex flex-col items-center space-y-4 px-6 md:px-0"
    >
      <img src={banner} />

      <div className="border border-[#5F6368] h-11 rounded-full w-full md:w-[36rem] bg-transparent hover:bg-[#2F3034] hover:border-transparent">
        <div className="flex items-center justify-between h-full space-x-4 px-6">
          <div className="flex space-x-3 items-center w-full h-full">
            <BiSearch fontSize={25} className="text-gray-400" />
            <input
              value={searchTerm}
              className=" bg-transparent outline-none text-white w-full h-full text-lg"
              onChange={handleSearchTerm}
            />
          </div>

          <div className="flex items-center relative">
            {clearSearchTerm && (
              <div className="flex space-x-3 absolute right-9">
                <div onClick={handleClearSearchTerm}>
                  <IoCloseSharp fontSize={25} className="text-gray-400" />
                </div>
                <div className="border-r border-[#5F6368]" />
              </div>
            )}
            <img src={mic} alt={mic} className="w-9 cursor-pointer" />
          </div>
        </div>
      </div>

      <div className="space-x-4">
        <Button name={"Google Search"} type="Submit" />

        <a
          href="https://www.google.com/doodles"
          className="px-5 py-2 rounded-md bg-[#303134] text-white border border-transparent text-sm  hover:border-[#5F6368]"
        >
          I'm Feeling Lucky
        </a>
      </div>
    </form>
  );
}

export default Search;

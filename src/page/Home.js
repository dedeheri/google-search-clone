import React from "react";

import Footer from "../components/Footer";
import PopoverApp from "../components/Popover";
import Search from "../components/Search";

function Home() {
  return (
    <div className="flex flex-col justify-between h-screen">
      {/* section 1 */}
      <nav className="flex space-x-5 items-center p-4 justify-end relative">
        <button className="text-white hover:underline">Gmail</button>
        <button className="text-white hover:underline">Image</button>
        <PopoverApp />
      </nav>

      {/* section 2 */}

      <Search />

      {/* section 3 */}
      <Footer />
    </div>
  );
}

export default Home;

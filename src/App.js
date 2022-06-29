import React from "react";
import { Routes, Route } from "react-router-dom";

// page
import Home from "./page/Home";
import Results from "./page/Results";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} index />
      {["search", "image", "news", "video"].map((path, i) => {
        return <Route path={path} element={<Results />} key={i} />;
      })}
    </Routes>
  );
}

export default App;

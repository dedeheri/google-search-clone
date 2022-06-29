import React from "react";

function Button({ name, ...rest }) {
  return (
    <button
      {...rest}
      className="px-5 py-2 rounded-md bg-[#303134] text-white border border-transparent text-sm  hover:border-[#5F6368]"
    >
      {name}
    </button>
  );
}

export default Button;

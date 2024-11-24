import React from "react";
import { BiHide, BiShow } from "react-icons/bi";

const HiddenElement = ({ value, handleClick }) => {
  return (
    <div
      value={value}
      onClick={handleClick}
      className="bg-transparent right-3 top-4 absolute cursor-pointer text-xl"
    >
      {value ? <BiHide /> : <BiShow />}
    </div>
  );
};

export default HiddenElement;

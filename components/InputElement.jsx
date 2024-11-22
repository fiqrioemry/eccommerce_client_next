import React from "react";
import { BiHide, BiShow } from "react-icons/bi";

const InputElement = ({
  name,
  value,
  style,
  onChange,
  placeholder,
  type = "text",
  hidden = false,
  handleClick = null,
}) => {
  return (
    <div className="flex-center relative ">
      <input
        type={type}
        name={name}
        value={value}
        className={style}
        onChange={onChange}
        placeholder={placeholder}
        required
      />

      {handleClick && (
        <div className="right-3 top-4 absolute cursor-pointer text-xl">
          {hidden ? (
            <BiHide onClick={handleClick} />
          ) : (
            <BiShow onClick={handleClick} />
          )}
        </div>
      )}
    </div>
  );
};

export default InputElement;

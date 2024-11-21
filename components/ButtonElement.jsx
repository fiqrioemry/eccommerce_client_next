import React from "react";
import { Button } from "./ui/button";

const ButtonElement = ({ title, style, handleClick = null }) => {
  return (
    <Button type="submit" className={style} onClick={handleClick}>
      {title}
    </Button>
  );
};

export default ButtonElement;

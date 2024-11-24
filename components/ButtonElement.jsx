import React from "react";
import { Button } from "./ui/button";
import LoadingSpinner from "./LoadingSpinner";

const ButtonElement = ({
  title,
  style,
  loading,
  loadingStyle,
  handleClick = null,
  variant = "primary",
  disabled = false,
}) => {
  return (
    <Button
      type="submit"
      variant={variant}
      className={loading ? loadingStyle : style}
      onClick={handleClick}
      disabled={loading}
    >
      {loading ? <LoadingSpinner /> : <>{title}</>}
    </Button>
  );
};

export default ButtonElement;

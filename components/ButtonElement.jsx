import React from "react";
import { Button } from "./ui/button";
import LoadingSpinner from "./LoadingSpinner";

const ButtonElement = ({
  title,
  style,
  loading,
  loadingStyle,
  handleClick = null,
}) => {
  return (
    <Button
      type="submit"
      variant="primary"
      className={loading ? loadingStyle : style}
      onClick={handleClick}
      disabled={loading}
    >
      {loading ? <LoadingSpinner /> : <>{title}</>}
    </Button>
  );
};

export default ButtonElement;

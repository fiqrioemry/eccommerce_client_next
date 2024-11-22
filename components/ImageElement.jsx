import Image from "next/image";
import React from "react";

const ImageElement = ({ width, height, style, path, alt }) => {
  return (
    <div className={style}>
      <Image width={width} height={height} src={path} alt={alt} />
    </div>
  );
};

export default ImageElement;

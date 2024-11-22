import Link from "next/link";
import React from "react";

const TabsLink = ({ title, path, style }) => {
  return (
    <>
      <Link href={path} className={style}>
        {title}
      </Link>
    </>
  );
};

export default TabsLink;

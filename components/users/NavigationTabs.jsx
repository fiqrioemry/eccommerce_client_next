"use client";
import React from "react";
import TabsLink from "./TabsLink";
import { usePathname } from "next/navigation";
const userPath = [
  {
    title: "user profile",
    path: "/users/settings",
    style: "py-[18px] pr-5 borders-b border-b-4",
  },
  {
    title: "address",
    path: "/users/address",
    style: "py-[18px] pr-5 borders-b border-b-4",
  },
  {
    title: "transaction",
    path: "/users/transaction",
    style: "py-[18px] pr-5 borders-b border-b-4",
  },
];
const NavigationTabs = () => {
  const pathname = usePathname();
  return (
    <div>
      {userPath.map((item, index) => (
        <TabsLink
          title={item.title}
          path={item.path}
          style={pathname === item.path ? item.style : "py-[18px] pr-5"}
          key={index}
        />
      ))}
    </div>
  );
};

export default NavigationTabs;

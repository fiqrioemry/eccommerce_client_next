import React from "react";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

const Layout = ({ children }) => {
  return (
    <div className="nondashboard-layout">
      <main className="dashboard-layout_main">{children}</main>
    </div>
  );
};

export default Layout;

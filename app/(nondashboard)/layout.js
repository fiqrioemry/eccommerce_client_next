import React from "react";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

const Layout = ({ children }) => {
  return (
    <div className="nondashboard-layout">
      <Header />
      <main className="dashboard-layout_main">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;

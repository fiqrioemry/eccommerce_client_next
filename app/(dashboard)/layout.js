import React from "react";

const Layout = ({ children }) => {
  return (
    <div className="dashboard-layout">
      <main className="dashboard-layout_main">{children}</main>
    </div>
  );
};

export default Layout;

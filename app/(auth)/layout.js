import React from "react";

const Layout = ({ children }) => {
  return (
    <div className="auth-layout">
      <main className="auth-layout_main">{children}</main>
    </div>
  );
};

export default Layout;

import React from "react";

const Layout = ({ children }) => {
  return (
    <div className="cart-layout">
      <main className="cart-layout_main">{children}</main>
    </div>
  );
};

export default Layout;

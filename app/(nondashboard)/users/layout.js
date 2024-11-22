import React from "react";
import SectionHead from "@/components/common/SectionHead";
import NavigationTabs from "@/components/users/NavigationTabs";

const Layout = ({ children }) => {
  return (
    <div className="nondashboard-layout">
      <main className="dashboard-layout_main container mx-auto py-6">
        <div className="py-6">
          <SectionHead title="Your Account" />
        </div>
        <NavigationTabs />
        <div className="py-4">{children}</div>
      </main>
    </div>
  );
};

export default Layout;

import React, { useEffect, useState } from "react";
import Header from "./Header";
import OpenToWorkTag from "@/components/Opentowork";
import BackToTop from "@/components/ScrollToggle";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <div>
        <Header/>
        <main>
          {children}
        </main>
        <BackToTop/>
      </div>
    </>
  );
};

export default Layout;

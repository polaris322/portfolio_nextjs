"use client";
import { noxfolioUtilits } from "@/utility";
import { useEffect } from "react";
import Footer from "./Footer";
import Header from "./Header";

const NoxfolioLayout = ({
  children,
  header,
  footer,
  noFooter,
  noHeader = false
}) => {
  useEffect(() => {
    noxfolioUtilits.animaiton();
  }, []);

  return (
    <div className="page-wrapper">
      {!noHeader && <Header header={header} />}
      {children}
      {!noFooter && <Footer footer={footer} />}
    </div>
  );
};
export default NoxfolioLayout;

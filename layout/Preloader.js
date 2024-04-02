"use client";
import { noxfolioUtilits } from "@/utility";
import { useEffect } from "react";

const Preloader = () => {
  useEffect(() => {
    noxfolioUtilits.preloader();
  }, []);

  return <div className="preloader" />;
};
export default Preloader;

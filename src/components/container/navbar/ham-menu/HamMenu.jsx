"use client";
import React from "react";

import { useDispatch, useSelector } from "react-redux";
import { menuHandler } from "@/Redux/reducers/menu";
export default function HamMenu() {
  const menuMode = useSelector((state) => state.menu);
  const dispatch = useDispatch();
  return (
    <>
      <button
        onClick={() => {
          dispatch(menuHandler());
          console.log("menu is ", menuMode);
        }}
        className="block lg:hidden scale"
      >
        <img src="\icons\navbar-icons\hamburger.png" alt="menu" />
      </button>
      {/* ___________ */}
      {menuMode && <p>open</p>}
    </>
  );
}

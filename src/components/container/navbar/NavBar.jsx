"use client";
import React from "react";
import LeftNav from "./left/LeftNav";
import RightNav from "./right/RightNav";
import HamMenu from "./ham-menu/HamMenu";

export default function NavBar() {
  return (
    <nav className="padding bg-primary_bg flex-between border-b">
      <LeftNav />
      <RightNav />
      {/* ham icon*/}
      <HamMenu />
    </nav>
  );
}

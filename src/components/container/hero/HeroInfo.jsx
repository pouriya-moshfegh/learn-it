import React from "react";
import BtnStart from "@/components/details/buttons/BtnStart";

export default function HeroInfo() {
  return (
    <>
      <p className="my-10 text-purple_b font-bold">
        <span className="text-black relative bottom-1">_______</span> What We Do
      </p>
      {/*______________ */}
      <p className="text-gray_c ">
        A Virtual Academy for Lifelong Learning
        <br />
        Welcome to Academix, the premier virtual academy designed to empower
        individuals on their journey of lifelong learning
      </p>
      {/* ____________ */}
      <div className="flex gap-x-8 mt-14">
        <BtnStart />
        <button className="text-purple_b text-base font-bold hover:text-purple_b/90 duration-200">
          Read more
        </button>
      </div>
    </>
  );
}

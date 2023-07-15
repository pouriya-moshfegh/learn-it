import React from "react";

export default function HeroTitle() {
  return (
    <>
      {/* _________ welcome title ___________ */}
      <p
        className={`hero__title bg-white   pr-2 py-2 w-max rounded-full text-gray_c font-semibold `}
      >
        Welcome to learniT
      </p>
      {/*_________  main title ___________ */}
      <div className="lg:text-6xl text-5xl font-black whitespace-nowrap">
        <p>
          A Virtual
          <span className="text-orange_c inline-block z-10 relative title__bg">
            &nbsp;Academy
          </span>
          <br />
          For Lifelong
          <br />
          <span className="text-purple_b inline-block z-10 relative title__bg">
            {" "}
            Learning
          </span>
        </p>
      </div>
    </>
  );
}

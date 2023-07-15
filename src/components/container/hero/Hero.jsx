import React from "react";
import Image from "next/image";
import "./hero.css";
import HeroTitle from "./HeroTitle";
import HeroInfo from "./HeroInfo";
import SocialMedia from "./SocialMedia";

export default function Hero() {
  return (
    <section className="padding bg-primary_bg flex">
      {/* left */}
      <div className=" lg:mt-16 flex-1 h-full">
        <HeroTitle />
        <HeroInfo />
        <SocialMedia />
      </div>
      {/* photo */}
      <div className="lg:mt-16 flex-1 hidden lg:block">
        <Image
          src="/images/hero.png"
          width={700}
          height={500}
          alt="Picture of the author"
        />
      </div>
    </section>
  );
}

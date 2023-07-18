import React from "react";
import Image from "next/image";
import "./info.css";
export default function Info() {
  return (
    <section className="flex justify-center gap-x-12 bg-white relative lg:bottom-20 lg:max-w-xl mx-auto p-8 shadow-lg">
      <div className="flex items-center w-1/3">
        <div className="info__btn bg-green-600 ">
          <Image width={24} height={24} src="/icons/info/Vector.png" />
        </div>
        <p className=" ml-2 text-xl md:text-2xl font-bold text-left text-stone-900">
          20K + <hr /> <p className="text-sm"> Hour tuition</p>
        </p>
      </div>
      {/* ____________ */}
      <div className="flex items-center w-1/3">
        <div className="info__btn bg-orange-500 ">
          <Image width={24} height={24} src="/icons/info/Vector.png" />
        </div>
        <p className="ml-2 text-xl md:text-2xl font-bold text-left text-stone-900">
         250 +<hr /> <p className="text-sm">  Award </p>
        </p>
      </div>
      {/* ____________ */}
      <div className="flex items-center w-1/3">
        <div className="info__btn bg-rose-500 ">
          <Image width={24} height={24} src="/icons/info/Vector.png" />
        </div>
        <p className="ml-2 text-xl md:text-2xl font-bold text-left text-stone-900">
          20K + <hr /> <p className="text-sm"> Hour tuition</p>
        </p>
      </div>
    </section>
  );
}

import React from "react";
import Image from "next/image";
import "./info.css";
export default function Info() {
  return (
    <section className="flex justify-center gap-x-12 bg-white relative lg:bottom-20 lg:max-w-xl mx-auto p-8 shadow-lg">
      <div className="flex items-center ">
        <div className="info__btn bg-green-600 ">
          <Image width={24} height={24} 
            alt="a nice photo"
            src="/icons/info/Vector.png" />
        </div>
        <div className=" ml-2 text-xl md:text-2xl font-bold text-left text-stone-900">
          20K + <p className="text-sm"> Hour tuition</p>
        </div>
      </div>
      {/* ____________ */}
      <div className="flex items-center ">
        <div className="info__btn bg-orange-500 ">
      
          <Image width={24} height={24} 
            alt="a nice photo"
            src="/icons/info/Vector.png" />
        </div>
        <div className="ml-2 text-xl md:text-2xl font-bold text-left text-stone-900">
          250 + <p className="text-sm"> Award </p>
        </div>
      </div>
      {/* ____________ */}
      <div className="flex items-center ">
        <div className="info__btn bg-rose-500 ">
          <Image
            width={24}
            height={24}
            alt="a nice photo"
            src="/icons/info/Vector.png"
          />
        </div>
        <div className="ml-2 text-xl md:text-2xl font-bold text-left text-stone-900">
          20K + <p className="text-sm"> Hour tuition</p>
        </div>
      </div>
    </section>
  );
}

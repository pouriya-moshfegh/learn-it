import React from "react";
import BtnRegister from "@/components/details/buttons/BtnRegister";
import Link from "next/link";


export default function RightNav() {
  return (
    <ul className="hidden lg:flex flex-1 items-center flex-row-reverse whitespace-nowrap gap-x-6 font-bold ">
      {/* register */}
      <li>
        <BtnRegister />
      </li>
      {/* sign in */}
      <li>
        <button> Sign in</button>
      </li>
      {/* search */}
      <li>
        <Link href="#" className="group relative top-[2px]">
          <img
            className="scale"
            src="\icons\navbar-icons\search.png"
            alt="search"
          />
        </Link>
      </li>
      {/* shopping cart*/}
      <li>
        <Link href="#" className="group  relative top-[2px]">
          <img
            className="scale"
            src="\icons\navbar-icons\bag.png"
            alt="search"
          />
        </Link>
      </li>
    </ul>
  );
}

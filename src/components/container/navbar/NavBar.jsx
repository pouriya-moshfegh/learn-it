import React from "react";
import { BsChevronDown } from "react-icons/bs";
import Link from "next/link";
import BtnRegister from "@/components/details/buttons/BtnRegister";

export default function NavBar() {
  return (
    <nav className="padding bg-primary_bg flex-between">
      {/* left side */}
      <div className="flex lg:flex-1 gap-x-6 items-center whitespace-nowrap">
        {/* ___________ title _________ */}

        <p className="font-bold text-3xl  ">
          Learn
          <span className="text-orange_c">iT</span>
        </p>
        {/* __________ nav list  ________ */}

        <ul className="font-semibold  gap-x-8 lg:flex hidden">
          <li>
            <Link href="#">Pricing</Link>
          </li>
          <li>
            <Link href="#">Categories </Link>
            <BsChevronDown className="inline-block text-sm relative top-[1px]" />
          </li>
          <li>
            <Link href="#">Blog</Link>
          </li>
          <li>
            <Link href="#">About us</Link>
          </li>
        </ul>
      </div>
      {/* _________ right side ____________ */}

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
      <Link href="#" className="block  lg:hidden scale">
        <img src="\icons\navbar-icons\hamburger.png" alt="menu" />
      </Link>
    </nav>
  );
}

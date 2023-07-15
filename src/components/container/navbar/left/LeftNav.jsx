import React from 'react'
import { BsChevronDown } from "react-icons/bs";
import Link from "next/link";

export default function LeftNav() {
  return (
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
  )
}

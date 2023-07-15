
import { FaYoutube, FaTwitter, FaFacebookF } from "react-icons/fa";
import Link from "next/link";
import React from "react";

export default function SocialMedia() {
  return (
    <>
   <div className="mt-10 flex gap-x-4">
          <Link
            className="bg-orange_c hover:bg-orange_c/90 duration-200 w-11 h-11 text-xl  rounded-full text-white  flex-center"
            href="#"
          >
            <FaYoutube />
          </Link>
          <Link
            className="bg-orange_c hover:bg-orange_c/90 duration-200 w-11 h-11 text-xl  rounded-full text-white  flex-center"
            href="#"
          >
            <FaTwitter />
          </Link>
          <Link
            className="bg-orange_c hover:bg-orange_c/90 duration-200 w-11 h-11 text-xl  rounded-full text-white  flex-center"
            href="#"
          >
            <FaFacebookF />
          </Link>
        </div>
    </>
  );
}

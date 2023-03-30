/** @format */
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-white shadow">
      <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
        <span className="text-sm sm:text-center ">
          made with 🔥 by Vignesh k
        </span>
        <ul className="flex flex-wrap items-center mt-3 text-sm font-medium sm:mt-0">
          <li>
            <div className="mr-4 hover:underline md:mr-6 ">About</div>
          </li>
          <li>
            <div className="hover:underline">Contact</div>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;

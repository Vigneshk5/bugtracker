/** @format */
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-white shadow">
      <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
        <span className="text-sm sm:text-center ">
          made with 🔥 by Vignesh k
        </span>
        <ul className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
          <li className="text-gray-600 hover:text-blue-600">
            <a
              target="_blank"
              rel="noreferrer"
              href="https://github.com/Vigneshk5/bugtracker"
            >
              source code
            </a>
          </li>
          <li className="text-gray-600 hover:text-blue-600">
            <a
              target="_blank"
              rel="noreferrer"
              href="https://github.com/Vigneshk5"
            >
              profile
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;

import React from "react";
import brandIcon from "../images/brandlogo.png";
import hIcon from "../images/h.png";
import yIcon from "../images/y.png";
import gIcon from "../images/g.png";
import eIcon from "../images/e.png";
import xIcon from "../images/x.png";
function Header() {
  return (
    <div className=" w-full flex justify-between items-center lg:px-28 lg:py-6 sm:px-10 sm:py-4 px-4 py-2">
      <div className="flex ">
        <img
          src={brandIcon}
          alt="brandIcon"
          className=" md:mr-4 sm:w-6 md:w-10 lg:w-12 lg:h-10 w-8 h-8 mr-3"
        />
        <div className="flex justify-center items-center">
          <img
            src={hIcon}
            alt="brandName"
            className="sm:w-3 sm:h- md:w-4 md:h-6 lg:w-5 lg:h-7 h-5"
          />
          <img src={yIcon} alt="brandName" className=" md:h-5 mt-2 h-5" />
          <img src={gIcon} alt="brandName" className=" h-5 mt-2" />
          <img src={gIcon} alt="brandName" className=" h-5 mt-2" />
          <img src={eIcon} alt="brandName" className=" h-5 mt-2" />
          <img src={xIcon} alt="brandName" className=" md:h-7 h-5" />
        </div>
      </div>
      <div>
        <ul className=" flex items-center">
          <li className="sm:mx-3 mx-2 lg:mx-5  text-base sm:text-base lg:text-lg text-black font-medium">
            Home
          </li>
          <li className="sm:mx-3 mx-2 lg:mx-5  text-base sm:text-base lg:text-lg text-black font-medium">
            Flashcard
          </li>
          <li className="sm:mx-3 mx-2 lg:mx-5  text-base sm:text-base lg:text-lg text-black font-medium">
            Contact
          </li>
          <li className="sm:mx-3 mx-2 lg:mx-5  text-base sm:text-base lg:text-lg text-black font-medium">
            FAQ
          </li>
          <button className="w-[40px] h-[28px] sm:w-[80px] sm:h-[38px] lg:w-[128px] lg:h-[48px] border rounded-3xl bg-gradient-to-b from-blue-900 to-blue-400 text-white text-sm">
            Login
          </button>
        </ul>
      </div>
    </div>
  );
}

export default Header;

import React from "react";
import downArrow from "../images/downArrow.png";
function Dropdown() {
  return (
    <div className="lg:px-28 md:px-28 sm:px-28 px-4">
      <div className=" border rounded-lg mb-6 h-12 font-medium flex justify-between items-center px-4 lg:w-[900px] md:w-[650px] sm:w-[450px] w-[450px] border-blue-700">
        <h1>Can education flashcards be used for all age groups?</h1>
        <img src={downArrow} alt="downArrow" />
      </div>
      <div className=" border rounded-lg mb-6 h-12 font-medium flex justify-between items-center px-4 lg:w-[900px] md:w-[650px] sm:w-[450px] w-[450px] border-blue-700">
        <h1>How do education flashcards work?</h1>
        <img src={downArrow} alt="downArrow" />
      </div>
      <div className=" border rounded-lg mb-6 h-12 font-medium flex justify-between items-center px-4 lg:w-[900px] md:w-[650px] sm:w-[450px] w-[450px] border-blue-700">
        <h1>Can education flashcards be used for test preparation?</h1>
        <img src={downArrow} alt="downArrow" />
      </div>
    </div>
  );
}

export default Dropdown;

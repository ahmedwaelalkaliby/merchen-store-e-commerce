import React, { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const Accordion = ({ title, children, lastOne = false }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="">
      <hr className=" border-gray-200 h-2 " />
      <button
        className="flex justify-between items-center w-full p-4 focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-sm font-bold text-gray-800 tracking-wider">
          {title}
        </span>
        <span>
          {isOpen ? <FaChevronUp size={10} /> : <FaChevronDown size={10} />}
        </span>
      </button>
      <div
        className={`overflow-hidden transition-[max-height] duration-300 ${
          isOpen ? "max-h-screen" : "max-h-0"
        }`}
      >
        <div className="p-2 text-xs leading-5" />
        {children}
      </div>
      {lastOne ? <hr className=" border-gray-200 h-2" /> : null}
    </div>
  );
};

export default Accordion;

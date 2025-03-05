import React, { useState, useRef, useEffect } from "react";

const CustomDropdown = ({ options, selected, onSelect }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Close the dropdown if clicked outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSelect = (option) => {
    onSelect(option);
    setIsOpen(false);
  };

  return (
    <div ref={dropdownRef} className="relative inline-block w-full ">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-white border border-gray-300 p-2 w-full text-left focus:outline-none "
      >
        {selected?.toUpperCase() || options[0].toUpperCase()}
      </button>
      {isOpen && (
        <div className="absolute bg-white border border-gray-300 -top-[200%]  shadow-md w-full mt-1">
          {options.map((option) => (
            <div
              key={option}
              onClick={() => handleSelect(option)}
              className="p-2 uppercase  cursor-pointer hover:bg-gray-200"
            >
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CustomDropdown;

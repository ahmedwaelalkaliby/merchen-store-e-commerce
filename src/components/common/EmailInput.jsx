import React from "react";

export default function EmailInput({
  id,
  onChange,
  value,
  className,
  onBlur,
  onFocus,
}) {
  return (
    <div>
      <label
        htmlFor={id}
        className="block mb-2 text-sm font-medium text-gray-900 "
      >
        Your email
      </label>
      <input
        // type="email"
        name={id}
        id={id}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        onFocus={onFocus}
        className={`bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 ${className} `}
        // placeholder="name@company.com"
        required=""
      />
    </div>
  );
}

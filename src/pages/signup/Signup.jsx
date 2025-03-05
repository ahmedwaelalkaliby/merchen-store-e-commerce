import React from "react";
import Register from "../../components/forms/Register";

export default function Signup() {
  return (
    <section>
      <div className="mt-[40px] sm:mt-[0px] flex flex-col w-11/12 lg:w-2/3 2xl:w-1/2 items-center justify-center px-4 md:px-6 py-8 mx-auto h-screen lg:py-0">
        <div className="w-full rounded-lg shadow-lg px-3 md:px-10 py-5">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8 ">
            <h1 className="text-xl font-bold leading-tight mb-10 tracking-tight text-gray-900 md:text-2xl">
              Create an account
            </h1>
            <Register />
          </div>
        </div>
      </div>
    </section>
  );
}

import React from "react";
import SigninForm from "../../components/forms/SigninForm";

export default function Login() {
  return (
    <section className="bg-gray-50 ">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto h-screen lg:py-0">
        <div className="w-full bg-white rounded-lg shadow md:mt-0 sm:max-w-md p-10">
          <div className=" space-y-4 md:space-y-6  mb-5">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
              Sign in to your account
            </h1>
          </div>
          <SigninForm />
        </div>
      </div>
    </section>
  );
}

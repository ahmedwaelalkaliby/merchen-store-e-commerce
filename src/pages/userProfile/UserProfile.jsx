import React from "react";
import { handleLogout } from "../../store/slices/authSlice";
import { useDispatch } from "react-redux";

export default function UserProfile({ user }) {
  const dispatch = useDispatch();

  const logout = () => {
    dispatch(handleLogout());
  };
  console.log(user);

  return (
    <div className="h-screen pt-60 w-1/2 mx-auto text-center mb-10 flex flex-col items-start">
      <div className="bg-white overflow-hidden shadow rounded-lg border self-center w-full">
        <div className="border-t border-gray-200 px-4 py-5 sm:p-0">
          <dl className="sm:divide-y sm:divide-gray-200">
            <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6 ">
              <dt className="text-sm font-medium text-gray-500 text-start ">
                Full name
              </dt>
              <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                {user.name}
              </dd>
            </div>
            <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500 text-start">
                Email address
              </dt>
              <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                {user.email}
              </dd>
            </div>
            <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500 text-start">
                Phone number
              </dt>
              <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                (123) 456-7890
              </dd>
            </div>
            <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500 text-start">
                Address
              </dt>
              <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                123 Main St
                <br />
                Anytown, USA 12345
              </dd>
            </div>
          </dl>
        </div>
      </div>
      <button
        className="mt-10 text-white bg-black hover:bg-primary-700 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center"
        onClick={logout}
      >
        Sign out
      </button>
    </div>
  );
}

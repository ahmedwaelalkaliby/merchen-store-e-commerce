import React from "react";

export default function Footer() {
  return (
    <footer className="bg-white font-sans">
      <hr className="mb-6 border-gray-200 md:mb-8 h-2" />
      <div className="container px-6 py-12 mx-auto">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-y-10 lg:grid-cols-4">
          <div className="sm:col-span-2">
            <h1 className="max-w-lg text-xl font-semibold tracking-tight text-gray-800 xl:text-2xl">
              Get ready to discover all the latest trends, collabs and exclusive
              promotions!
            </h1>

            <div className="flex flex-col mx-auto mt-6 space-y-3 md:space-y-0 md:flex-row">
              <input
                id="email"
                type="text"
                className="px-4 py-2 text-gray-700 bg-white border rounded-md   focus:border-blue-400  focus:outline-none focus:ring focus:ring-opacity-40 focus:ring-blue-300"
                placeholder="Email Address"
              />

              <button className="w-full px-6 py-2.5 text-sm font-medium tracking-wider text-white transition-colors duration-300 transform md:w-auto md:mx-4 focus:outline-none bg-gray-800 rounded-lg hover:bg-gray-700 focus:ring focus:ring-gray-300 focus:ring-opacity-80">
                Subscribe
              </button>
            </div>
          </div>

          <div>
            <p className="font-semibold text-gray-800 ">Help</p>

            <div className="flex flex-col items-start mt-5 space-y-2">
              <p className="text-gray-600 transition-colors duration-300  hover:underline hover:cursor-pointer hover:text-blue-500 text-sm">
                Frequently asked questions
              </p>
              <p className="text-gray-600 transition-colors duration-300  hover:underline hover:cursor-pointer hover:text-blue-500 text-sm">
                My order status
              </p>
              <p className="text-gray-600 transition-colors duration-300  hover:underline hover:cursor-pointer hover:text-blue-500 text-sm">
                How to return items
              </p>
              <p className="text-gray-600 transition-colors duration-300  hover:underline hover:cursor-pointer hover:text-blue-500 text-sm">
                Processing a return
              </p>
              <p className="text-gray-600 transition-colors duration-300  hover:underline hover:cursor-pointer hover:text-blue-500 text-sm">
                Delivery
              </p>
              <p className="text-gray-600 transition-colors duration-300  hover:underline hover:cursor-pointer hover:text-blue-500 text-sm">
                How to avoid scams when shopping
              </p>
              <p className="text-gray-600 transition-colors duration-300  hover:underline hover:cursor-pointer hover:text-blue-500 text-sm">
                online
              </p>
              <p className="text-gray-600 transition-colors duration-300  hover:underline hover:cursor-pointer hover:text-blue-500 text-sm">
                Gift card
              </p>
            </div>
          </div>

          <div>
            <p className="font-semibold text-gray-800 ">Company</p>

            <div className="flex flex-col items-start mt-5 space-y-2">
              <p className="text-gray-600 transition-colors duration-300  hover:underline hover:cursor-pointer hover:text-blue-500 text-sm">
                About us
              </p>
              <p className="text-gray-600 transition-colors duration-300  hover:underline hover:cursor-pointer hover:text-blue-500 text-sm">
                Store locator
              </p>
              <p className="text-gray-600 transition-colors duration-300  hover:underline hover:cursor-pointer hover:text-blue-500 text-sm">
                Franchises
              </p>
              <p className="text-gray-600 transition-colors duration-300  hover:underline hover:cursor-pointer hover:text-blue-500 text-sm">
                Work with us
              </p>
              <p className="text-gray-600 transition-colors duration-300  hover:underline hover:cursor-pointer hover:text-blue-500 text-sm">
                California Transparency Act
              </p>
              <p className="text-gray-600 transition-colors duration-300  hover:underline hover:cursor-pointer hover:text-blue-500 text-sm">
                Interest Based Advertiding
              </p>
            </div>
          </div>
        </div>

        <hr className="my-6 border-gray-200 md:my-8  h-2" />

        <div className="sm:flex sm:items-center sm:justify-between">
          <div className="flex flex-1 gap-4 hover:cursor-pointer">
            <img
              src="https://www.svgrepo.com/show/303139/google-play-badge-logo.svg"
              width="130"
              height="110"
              alt=""
            />
            <img
              src="https://www.svgrepo.com/show/303128/download-on-the-app-store-apple-logo.svg"
              width="130"
              height="110"
              alt=""
            />
          </div>

          <div className="flex gap-4 hover:cursor-pointer">
            <a href="https://www.facebook.com/profile.php?id=100040384219317" target="_blank">
              <img
                src="https://www.svgrepo.com/show/303114/facebook-3-logo.svg"
                width="30"
                height="30"
                alt="fb"
              />
            </a>
            <a
              href="https://x.com/A7mWael"
              target="_blank"
            >
              <img
                src="https://www.svgrepo.com/show/303115/twitter-3-logo.svg"
                width="30"
                height="30"
                alt="tw"
              />
            </a>

            <a
              href="https://www.instagram.com/a7mwael/"
              target="_blank"
            >
              <img
                src="https://www.svgrepo.com/show/303145/instagram-2-1-logo.svg"
                width="30"
                height="30"
                alt="inst"
              />
            </a>
            <a href="https://github.com/ahmedwaelalkaliby" target="_blank">
              <img
                src="https://www.svgrepo.com/show/94698/github.svg"
                className=""
                width="30"
                height="30"
                alt="gt"
              />
            </a>
           
            <a
              href="https://www.linkedin.com/in/ahmed-wael-al-kaliby-61b202212/"
              target="_blank"
            >
              <img
                src="https://www.svgrepo.com/show/28145/linkedin.svg"
                width="30"
                height="30"
                alt="in"
              />
            </a>
          </div>
        </div>
        <p className="font-sans p-8 text-start md:text-center md:text-lg md:p-4">
          © 2023 You Company Inc. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

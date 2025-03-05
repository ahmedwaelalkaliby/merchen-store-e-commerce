import { Link, useNavigate } from "react-router-dom";
import { IoIosArrowRoundBack } from "react-icons/io";

export default function NotFoundPage() {
  const navigate = useNavigate();
  return (
    <section className="h-screen flex items-center justify-center">
      <div className=" px-6 py-12 mx-auto flex flex-col lg:flex-row items-center justify-center lg:gap-12 ">
        <div className="w-full lg:w-1/2 ">
          <h1 className="mt-3 text-2xl font-semibold text-gray-800  md:text-3xl">
            Page not found
          </h1>
          <p className="mt-4 text-gray-500 ">
            Sorry, the page you are looking for doesn't exist.Here are some
            helpful links:
          </p>

          <div className="flex items-center mt-6 gap-x-3">
            <button
              onClick={() => navigate(-1)}
              className="flex items-center justify-center w-1/2 px-5 py-2 text-sm text-gray-700 transition-colors duration-200 bg-white border rounded-lg gap-x-2 sm:w-auto "
            >
              <IoIosArrowRoundBack size={30} />
              <span>Go back</span>
            </button>

            <Link
              to={"/"}
              className="w-1/2 px-5 py-2 text-sm tracking-wide text-white transition-colors duration-200 bg-black rounded-lg shrink-0 sm:w-auto  "
            >
              Take me home
            </Link>
          </div>
        </div>

        <div className="relative w-full mt-12 lg:w-1/2 lg:mt-0">
          <img
            className="w-full max-w-lg lg:mx-auto"
            src="https://merakiui.com/images/components/illustration.svg"
          />
        </div>
      </div>
    </section>
  );
}

import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { getPopUp, getLinkOptions } from "./NavBar.util";

/**
 *
 * @param {{arrOptions: {
 *    title: string;
 *    to: string;
 * }[], strPortalDivId:string}} param0
 * @returns
 */
const NavBar = ({ arrOptions, strPortalDivId }) => {
  const [isPopUpOpen, setIsPopUpOpen] = useState(false);

  const openSideMenu = () => {
    setIsPopUpOpen(true);
  };

  const closeSideMenu = () => {
    setIsPopUpOpen(false);
  };

  return (
    <>
      <header className="relative bg-white">
        <p className="bg-color_primary h-10 flex items-center justify-center text-sm font-medium text-white px-4 sm:px-6 lg:px-8">
          Get free delivery on orders over $100
        </p>

        <nav
          aria-label="Top"
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        >
          <div className="border-b border-gray-200">
            <div className="h-16 flex items-center">
              {/* Hamburguer Menu */}
              <button
                type="button"
                onClick={openSideMenu}
                className="bg-white p-2 rounded-md text-gray-400 lg:hidden"
              >
                <svg
                  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  ></path>
                </svg>
              </button>

              {/* <!-- Logo --> */}
              <div className="ml-4 flex lg:ml-0">
                <Link to={"/"}>
                  <img
                    className="h-8 w-auto"
                    src="https://tailwindui.com/img/logos/workflow-mark.svg?color=blue&amp;shade=600"
                    alt="Shopping App"
                  />
                </Link>
              </div>

              {/* <!-- Dynamic options --> */}

              <div className="hidden lg:ml-8 lg:block lg:self-stretch">
                <div className="h-full flex space-x-8">
                  {getLinkOptions(arrOptions)}
                </div>
              </div>

              {/* Static Options */}
              <div className="ml-auto flex items-center">
                <div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6">
                  <a
                    href="#"
                    className="text-sm font-medium text-gray-700 hover:text-gray-800"
                  >
                    Sign in
                  </a>
                  <span
                    className="h-6 w-px bg-gray-200"
                    aria-hidden="true"
                  ></span>
                  <a
                    href="#"
                    className="text-sm font-medium text-gray-700 hover:text-gray-800"
                  >
                    Create account
                  </a>
                </div>

                {/* <!-- Search --> */}
                <div className="flex lg:ml-6">
                  <a href="#" className="p-2 text-gray-400 hover:text-gray-500">
                    <svg
                      className="w-6 h-6"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="2"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                      ></path>
                    </svg>
                  </a>
                </div>

                {/* <!-- Cart --> */}
                <div className="ml-4 flow-root lg:ml-6">
                  <a href="#" className="group -m-2 p-2 flex items-center">
                    <svg
                      className="flex-shrink-0 h-6 w-6 text-gray-400 group-hover:text-gray-500"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="2"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                      ></path>
                    </svg>
                    <span className="ml-2 text-sm font-medium text-gray-700 group-hover:text-gray-800">
                      0
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>
      {getPopUp(isPopUpOpen, strPortalDivId, closeSideMenu)}
    </>
  );
};

export { NavBar };

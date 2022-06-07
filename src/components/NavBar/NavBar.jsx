import { Link } from "react-router-dom";
import { ShoppingCart } from "./components/ShoppingCart";
import { HamburgerMenu } from "./components/HambugerMenu";
import { NavBarMenu } from "./components/NavBarMenu/NavBarMenu";

/**
 *
 * Main page navigation horizontal bar
 * @param {Object} props
 * @param {string} props.strPortalDivId
 * @param {Object[]} props.arrOptions
 * @param {string} props.arrOptions.title
 * @param {string} props.arrOptions.to
 * @returns {JSX.Element}
 */
const NavBar = ({ arrOptions, strPortalDivId }) => {
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
              <HamburgerMenu
                strPortalDivId={strPortalDivId}
                arrOptions={arrOptions}
              />
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
                <NavBarMenu arrOptions={arrOptions} />
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
                  <ShoppingCart strPortalDivId={strPortalDivId} />
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

export { NavBar };

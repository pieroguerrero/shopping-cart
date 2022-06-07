import { NavLink } from "react-router-dom";

/**
 *
 * @module Util_NavBarMenu
 */

/**
 *
 * @param {Object[]} arrOptions
 * @param {string} arrOptions.title
 * @param {string} arrOptions.to
 * @returns {JSX.Element[]}
 */
const getMainBarOptions = (arrOptions) => {
  return arrOptions.map((objOption, index) => {
    return (
      <div
        key={index}
        className="relative z-10 flex items-center transition-colors ease-out duration-200 border-b-2 -mb-px pt-px border-transparent"
      >
        <NavLink
          to={objOption.to}
          className={({ isActive }) =>
            "text-sm font-medium h-full flex justify-center items-center text-gray-700 hover:text-color_primary border-b-2" +
            (isActive
              ? " border-b-color_primary text-color_primary"
              : " border-b-transparent")
          }
        >
          {objOption.title}
        </NavLink>
      </div>
    );
  });
};

export { getMainBarOptions };

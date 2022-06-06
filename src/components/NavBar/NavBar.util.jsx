import { SidePopUp } from "../SidePopUp";
import { NavLink } from "react-router-dom";
/**
 *
 * @module ComponentUtil_NavBar
 */

/**
 *
 * @param {string} strPortalDivId
 * @param {function():void} closeSideMenu
 * @param {Object[]} arrOptions
 * @param {string} arrOptions.title
 * @param {string} arrOptions.to
 * @param {function(string):void} navigateTo
 * @param {any} location
 * @returns {JSX.Element}
 *
 */
const getSideMenu = (
  strPortalDivId,
  closeSideMenu,
  arrOptions,
  navigateTo,
  location
) => {
  return (
    <SidePopUp
      side="left"
      strPortalDivId={strPortalDivId}
      strMaxWidth={"250px"}
      onClosePopUp={closeSideMenu}
      strTitle=""
    >
      {getPopUpContent(
        arrOptions,
        navigateTo,
        closeSideMenu,
        location.pathname
      )}
    </SidePopUp>
  );
};

/**
 *
 * @param {Object[]} arrOptions
 * @param {string} arrOptions.title
 * @param {string} arrOptions.to
 * @param {function(string):void} navigateTo
 * @param {string} currentLocationPath
 * @param {function():void} closeSideMenu
 * @returns {JSX.Element}
 */
const getPopUpContent = (
  arrOptions,
  navigateTo,
  closeSideMenu,
  currentLocationPath
) => {
  return (
    <div className="flex flex-col gap-6">
      {arrOptions.map((objOption, index) => (
        <button
          key={index}
          type="button"
          onClick={() => {
            closeSideMenu();
            navigateTo(objOption.to);
          }}
          className={
            "whitespace-nowrap text-base font-medium text-left w-full border-r-4 text-color_primary" +
            (currentLocationPath.includes(objOption.to)
              ? " border-r-color_primary"
              : " border-r-transparent")
          }
        >
          {objOption.title}
        </button>
      ))}
    </div>
  );
};

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

export { getSideMenu, getMainBarOptions };

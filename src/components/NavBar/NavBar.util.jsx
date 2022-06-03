import { SidePopUp } from "../SidePopUp";
import { NavLink, useLocation } from "react-router-dom";
/**
 *
 * @param {string} strPortalDivId
 * @param {()=>void} closeSideMenu
 * @param {{
 *    title: string;
 *    to: string;
 * }[]} arrOptions
 * @param {(strPath: string)=>void} navigateTo
 * @param {any} location
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
 * @param {{
 *    title: string;
 *    to: string;
 * }[]} arrOptions
 * @param {(strPath: string)=>void} navigateTo
 * @param {string} currentLocationPath
 * @param {()=>void} closeSideMenu
 * @returns
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
 * @param {{
 *    title: string;
 *    to: string;
 * }[]} arrOptions
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

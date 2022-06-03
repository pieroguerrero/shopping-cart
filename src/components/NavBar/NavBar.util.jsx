import { SidePopUp } from "../SidePopUp";
import { NavLink } from "react-router-dom";
/**
 *
 * @param {boolean} booIsOpen
 * @param {string} strPortalDivId
 * @param {()=>void} closeSideMenu
 */
const getPopUp = (booIsOpen, strPortalDivId, closeSideMenu) => {
  if (booIsOpen) {
    return (
      <SidePopUp
        side="left"
        strPortalDivId={strPortalDivId}
        strMaxWidth={"250px"}
        onClosePopUp={closeSideMenu}
      >
        <div className="flex flex-col gap-6 whitespace-nowrap text-base font-medium text-color_primary">
          <p>{"Women's Clothing"}</p>
          <p>{"Men's Clothing"}</p>
          <p>{"Electronics"}</p>
          <p>{"Jewerly"}</p>
        </div>
      </SidePopUp>
    );
  }
  return null;
};

/**
 *
 * @param {{
 *    title: string;
 *    to: string;
 * }[]} arrOptions
 */
const getLinkOptions = (arrOptions) => {
  return arrOptions.map((objOption, index) => {
    return (
      <div
        key={index}
        className="relative z-10 flex items-center transition-colors ease-out duration-200 border-b-2 -mb-px pt-px border-transparent"
      >
        <NavLink
          to={objOption.to}
          className="text-sm font-medium text-gray-700 hover:text-color_primary"
        >
          {objOption.title}
        </NavLink>
      </div>
    );
  });
};

export { getPopUp, getLinkOptions };

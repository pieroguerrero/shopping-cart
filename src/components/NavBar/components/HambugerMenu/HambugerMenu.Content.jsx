import { useNavigate } from "react-router-dom";
import { SidePopUp } from "../../../SidePopUp";
import { getPopUpContent } from "./HambugerMenu.util";

/**
 *
 * @param {Object} props
 * @param {string} props.strPortalDivId
 * @param {function():void} props.closeSideMenu
 * @param {Object[]} props.arrOptions
 * @param {string} props.arrOptions.title
 * @param {string} props.arrOptions.to
 * @param {any} props.location
 * @returns {JSX.Element}
 *
 */
const HamburgerMenuContent = ({
  strPortalDivId,
  closeSideMenu,
  arrOptions,
  location,
}) => {
  const navigateTo = useNavigate();
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

export { HamburgerMenuContent };

import { SidePopUp } from "../SidePopUp";

/**
 *
 * @module ComponentUtil_ShoppingCart
 */

/**
 *
 * @param {string} strPortalDivId
 * @param {function():void} closeSideMenu
 * @param {function(string):void} navigateTo
 * @returns {JSX.Element}
 */
const getCartMenu = (strPortalDivId, closeSideMenu, navigateTo) => {
  const testJSX = <div>Hola mundo!</div>;

  return (
    <SidePopUp
      side="rigth"
      strPortalDivId={strPortalDivId}
      strMaxWidth={"300px"}
      onClosePopUp={closeSideMenu}
      strTitle="Shopping Cart"
    >
      {testJSX}
    </SidePopUp>
  );
};

export { getCartMenu };

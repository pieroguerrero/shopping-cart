import { SidePopUp } from "../SidePopUp";

/**
 *
 * @param {string} strPortalDivId
 * @param {()=>void} closeSideMenu
 * @param {(strPath: string)=>void} navigateTo
 *
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

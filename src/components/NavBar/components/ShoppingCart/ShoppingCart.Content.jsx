import { useContext } from "react";
import { CartContext } from "../../../../contexts/CartContext";
import { SidePopUp } from "../../../SidePopUp";
import { getCartContent } from "./ShoppingCart.util";

/**
 *
 * @param {Object} props
 * @param {string} props.strPortalDivId
 * @param {function():void} props.closeSideMenu
 * @param {function(string):void} props.navigateTo
 * @returns {JSX.Element}
 */
const ShoppingCartContent = ({ strPortalDivId, closeSideMenu, navigateTo }) => {
  const { addCartItem, getCartSubTotal, deleteCartItem, getCartItems } =
    useContext(CartContext);

  return (
    <SidePopUp
      side="rigth"
      strPortalDivId={strPortalDivId}
      strMaxWidth={"300px"}
      onClosePopUp={closeSideMenu}
      strTitle="Shopping Cart"
    >
      {getCartContent(
        getCartItems(),
        getCartSubTotal(),
        addCartItem,
        deleteCartItem
      )}
    </SidePopUp>
  );
};

export { ShoppingCartContent };

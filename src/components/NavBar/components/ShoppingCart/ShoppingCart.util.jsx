import { SidePopUp } from "./../../../SidePopUp";
import { ShoppingCartItem } from "./ShoppingCartItem";
import { CartItem } from "../../../../models/models.cart";

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

/**
 *
 * @param {import("../../../../models/models.cart").CartItem[]} arrCartItems
 */
const countItems = (arrCartItems) => {
  return arrCartItems.reduce((prev, curr) => {
    prev += 1;
    return prev;
  }, 0);
};

/**
 *
 * @param {CartItem[]} arrCartItems
 * @param {number} dblCartSubTotal
 * @param {function(CartItem):void} addCartItem
 * @param {function(string):boolean} deleteCartItem
 */
const getCartContent = (
  arrCartItems,
  dblCartSubTotal,
  addCartItem,
  deleteCartItem
) => {
  return (
    <>
      {arrCartItems.length > 0 ? (
        <div className="flex flex-col">
          <div className="flex flex-col">
            {arrCartItems.map((cartItem) => (
              <div key={cartItem.strId}>
                <ShoppingCartItem
                  cartItem={cartItem}
                  addCartItem={addCartItem}
                  deleteCartItem={deleteCartItem}
                />
              </div>
            ))}
          </div>
          <div>
            <p>{dblCartSubTotal}</p>
          </div>
        </div>
      ) : (
        <div className="-m-2 p-2 py-6 text-center text-gray-900">
          {"The Shopping Cart is empty."}
        </div>
      )}
    </>
  );
};

export { getCartMenu, countItems, getCartContent };

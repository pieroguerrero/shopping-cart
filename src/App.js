import "./App.css";
import { getProductById } from "./services";
import { Outlet, NavLink } from "react-router-dom";
import { NavBar } from "./components/NavBar";
import { useState } from "react";
import { CartContext } from "./contexts/CartContext";
import { createCart } from "./models/models.cart";
import { CartItem } from "./models";
import uniqid from "uniqid";

/**
 *
 * @param {{strPortalDivId:string}} param0
 * @returns
 */
function App({ strPortalDivId }) {
  // getProductById("1")
  //   .then(function (response) {
  //     console.log("Response!!", response);
  //   })
  //   .catch(function (error) {
  //     console.log("ERROR!!", error);
  //   });

  /* className={(isActive)=>{return ""}} */

  const arrOptions = [
    { title: "Google", to: "/expenses" },
    { title: "Amazon", to: "/invoices" },
  ];

  const [cart, setCart] = useState(createCart(uniqid(), new Date(), 0, 0, []));

  /**
   *
   * @param {CartItem[]} arrCartItems
   * @param {CartItem} objItem
   * @returns {CartItem[]}
   */
  const includeItemInCartArray = (arrCartItems, objItem) => {
    const index = arrCartItems.findIndex(
      (cartItem) => cartItem.strId === objItem.strId
    );

    if (index === -1) {
      return [...arrCartItems, objItem];
    } else {
      return arrCartItems.map((cartItem) => {
        if (cartItem.strId === objItem.strId) {
          objItem.intQuatity += cartItem.intQuatity;
          return objItem;
        }

        return cartItem;
      });
    }
  };

  /**
   *
   * @param {CartItem} objItem
   * @returns {void}
   */
  const addCartItem = (objItem) => {
    const newCart = { ...cart };
    const newCartItems = includeItemInCartArray(cart.arrItems, objItem);
    newCart.arrItems = newCartItems;

    newCart.dblSubTotal = newCartItems.reduce((prev, current) => {
      prev += current.intQuatity * current.dblUnitPrice;
      return prev;
    }, 0);

    console.log("App.addCartItem:", objItem);
    setCart(newCart);
  };

  /**
   *
   * @returns {number}
   */
  const getCartSubTotal = () => {
    return cart.dblSubTotal;
  };

  /**
   *
   * @param {string} strCartItemId
   * @returns {boolean}
   */
  const deleteCartItem = (strCartItemId) => {
    const newCartItems = cart.arrItems.filter(
      (cartItem) => cartItem.strId !== strCartItemId
    );

    if (newCartItems.length < cart.arrItems.length) {
      const newCart = {
        ...cart,
        dblSubTotal: newCartItems.reduce(
          (subTotal, carItem) =>
            (subTotal += carItem.dblUnitPrice * carItem.intQuatity),
          0
        ),
      };
      newCart.arrItems = newCartItems;
      setCart(newCart);
      return true;
    }

    return false;
  };

  /**
   *
   * @returns {import("./models/models.cart").CartItem[]}
   */
  const getCartItems = () => {
    return cart.arrItems;
  };

  return (
    <CartContext.Provider
      value={{ addCartItem, getCartSubTotal, deleteCartItem, getCartItems }}
    >
      <div className="flex flex-col h-screen">
        <NavBar strPortalDivId={strPortalDivId} arrOptions={arrOptions} />
        <div className="flex-1">
          <Outlet />
        </div>
      </div>
    </CartContext.Provider>
  );
}

export default App;

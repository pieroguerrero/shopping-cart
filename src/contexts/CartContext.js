import { createContext } from "react";

/**
 * @typedef {Object} CartContextObject
 * @property {function():number} getCartSubTotal
 * @property {function(import("../models/models.cart").CartItem):void} addCartItem
 * @property {function(string):boolean} deleteCartItem
 * @property {function():import("../models/models.cart").CartItem[]} getCartItems
 */

/**
 * @type {React.Context<CartContextObject>}
 */
const CartContext = createContext(null);

export { CartContext };

/**
 *
 * @param {object} props
 * @param {import("../../../../models/models.cart").CartItem} props.cartItem
 * @param {function(import("../../../../models/models.cart").CartItem):void} props.addCartItem
 * @param {function(string):boolean} props.deleteCartItem
 * @returns
 */
const ShoppingCartItem = ({ cartItem, addCartItem, deleteCartItem }) => {
  return <div>{cartItem.strProductName}</div>;
};
export { ShoppingCartItem };

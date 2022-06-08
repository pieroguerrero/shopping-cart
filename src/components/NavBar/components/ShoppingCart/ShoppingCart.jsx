import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "./../../../../contexts/CartContext";
import { ShoppingCartContent } from "./ShoppingCart.Content";
import { countItems } from "./ShoppingCart.util";

/**
 *
 * @param {Object} props
 * @param {string} props.strPortalDivId
 * @returns {JSX.Element}
 */
const ShoppingCart = ({ strPortalDivId }) => {
  const [isCartMenuOpen, setIsCartMenuOpen] = useState(false);
  const { addCartItem, getCartSubTotal, deleteCartItem, getCartItems } =
    useContext(CartContext);
  const navigate = useNavigate();

  console.log("getCartSubTotal", getCartSubTotal());

  const openCartMenu = () => {
    setIsCartMenuOpen(true);
  };

  const closeCartMenu = () => {
    setIsCartMenuOpen(false);
  };

  return (
    <>
      <button
        type="button"
        className="group -m-2 p-2 flex items-center"
        onClick={openCartMenu}
      >
        <svg
          className="flex-shrink-0 h-6 w-6 text-gray-400 group-hover:text-gray-500"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="2"
          stroke="currentColor"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
          ></path>
        </svg>
        <span className="ml-2 text-sm font-medium text-gray-700 group-hover:text-gray-800">
          {countItems(getCartItems())}
        </span>
      </button>
      {isCartMenuOpen ? (
        <ShoppingCartContent
          strPortalDivId={strPortalDivId}
          closeSideMenu={closeCartMenu}
          navigateTo={navigate}
        />
      ) : null}
    </>
  );
};

export { ShoppingCart };

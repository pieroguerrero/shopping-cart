import { callGet, strBASE_URL } from "./services.util";

/**
 * @module Service_Product
 */

/**
 * RequestInit configuration options
 */
const objRequestInit = {
  mode: "cors",
};

/**
 *
 * @param {string} strId
 * @returns {Promise<Object>}
 */
const getProductById = (strId) => {
  const strURL = strBASE_URL + "/products/" + strId;

  return callGet(strURL, objRequestInit);
};

/**
 *
 * @param {string} strCategoryName
 * @returns {Promise<Object[]>}
 */
const getProductsByCategory = (strCategoryName) => {
  const strURL = strBASE_URL + "/category/" + strCategoryName;

  return callGet(strURL, objRequestInit);
};

/**
 *
 * @returns {Promise<Object[]>}
 */
const getProductsAll = () => {
  const strURL = strBASE_URL + "/products";

  return callGet(strURL, objRequestInit);
};

export { getProductById, getProductsByCategory, getProductsAll };

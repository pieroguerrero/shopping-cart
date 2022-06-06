/**
 * @module Service_Variation
 */

/**
 *
 * @typedef {Object} VariationObject
 * @property {string} id
 * @property {string} displayName
 * @property {string[]} values
 */

/**
 * Mockuping variations for products
 */
const objColors = {
  id: "color",
  displayName: "Color",
  values: ["#bbbbbb", "#0474fa", "#f7e940", "ffffff"],
};

const objSizes = {
  id: "size",
  displayName: "Size",
  values: ["xs", "s", "m", "l", "xl", "xxl"],
};

/**
 *
 * @param {string} strProductId
 * @returns {Promise<VariationObject[]>}
 */
const getProductVariations = (strProductId) => {
  objColors.productId = strProductId;
  objSizes.productId = strProductId;

  const arrVariations = [objColors, objSizes];
  return Promise.resolve(arrVariations);
};

export { getProductVariations };

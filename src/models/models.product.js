/**
 *
 * @module Factory_Product
 */

/**
 *
 * @param {string} strId
 * @param {string} strGender
 * @param {string} strCategoryId
 * @param {string} strDescription
 * @param {number} fltPrice
 * @param {string} strImagePath
 * @param {string} strTitle
 * @returns {Object}
 */
const createProduct = (
  strId,
  strGender,
  strCategoryId,
  strDescription,
  fltPrice,
  strImagePath,
  strTitle
  //,arrVariations
) => ({
  strId,
  strGender,
  strCategoryId,
  strDescription,
  fltPrice,
  strImagePath,
  strTitle,
  //,arrVariations,
});

export { createProduct };

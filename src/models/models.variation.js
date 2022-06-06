/**
 *
 * @module Factory_Variation
 */

/**
 *
 * @param {string} strVariationId
 * @param {string} strProductId
 * @param {string} strName
 * @param {string[]} arrValues
 * @returns {Object}
 */
const createVariation = (strVariationId, strProductId, strName, arrValues) => ({
  strVariationId,
  strProductId,
  strName,
  arrValues,
});

export { createVariation };

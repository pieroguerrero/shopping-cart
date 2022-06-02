/**
 *
 * @param {string} strVariationId
 * @param {string} strProductId
 * @param {string} strName
 * @param {string[]} arrValues
 * @returns
 */
const createVariation = (strVariationId, strProductId, strName, arrValues) => ({
  strVariationId,
  strProductId,
  strName,
  arrValues,
});

export { createVariation };

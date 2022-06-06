/**
 *
 * @module Factory_Category
 */

/**
 * Returns the basic structure of a Category
 * @param {string} strId
 * @param {string} strDisplayName
 * @param {string} strURLValue
 * @returns {{strId:string,strDisplayName:string,strURLValue:string }}
 */
const createCategory = (strId, strDisplayName, strURLValue) => ({
  strId,
  strDisplayName,
  strURLValue,
});

export { createCategory };

import { createProduct } from "../models";

/**
 *
 * @module Adapter_Product
 */

/**
 *
 * @param {string} strCategory
 */
const getGender = (strCategory) => {
  if (strCategory.toLowerCase().trim() === "women's clothing") {
    return "f";
  }

  if (strCategory.toLowerCase().trim() === "men's clothing") {
    return "m";
  }

  return "";
};

/**
 *
 * @param {*} objResponse
 * @returns
 */
const adaptProduct = (objResponse) => {
  try {
    return createProduct(
      objResponse.id.toString(),
      getGender(objResponse.category),
      objResponse.category,
      objResponse.description,
      !isNaN(objResponse.price) ? Number(objResponse.price) : 0,
      objResponse.image,
      objResponse.title
    );
  } catch (error) {
    throw error;
  }
};

export { adaptProduct };

import { createProduct } from "../models";

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

const adapProduct = (objResponse) => {
  if (objResponse) {
    return createProduct(
      objResponse.id.toString(),
      getGender(objResponse.category),
      objResponse.category,
      objResponse.description,
      !isNaN(objResponse.price) ? Number(objResponse.price) : 0,
      objResponse.image,
      objResponse.title
    );
  } else return null;
};

export { adapProduct };

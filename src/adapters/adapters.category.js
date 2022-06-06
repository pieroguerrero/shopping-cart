import { createCategory } from "../models/models.category";

/**
 *
 * @module Adapter_Category
 */

/**
 *
 * @param {Object} objResponse
 * @returns
 */

const adaptCategory = (objResponse) => {
  try {
    return createCategory(
      objResponse.id,
      objResponse.displayName,
      objResponse.value
    );
  } catch (error) {
    throw error;
  }
};

export { adaptCategory };

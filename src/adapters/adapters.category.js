import { createCategory } from "../models/models.category";

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

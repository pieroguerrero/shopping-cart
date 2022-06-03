import { createVariation } from "../models/models.variation";

const adaptVariation = (objResponse) => {
  try {
    return createVariation(
      objResponse.id,
      objResponse.productId,
      objResponse.displayName,
      objResponse.values
    );
  } catch (error) {
    throw error;
  }
};

export { adaptVariation };

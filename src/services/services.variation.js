//Mockuping variations for products
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

const getProductVariations = (strProductId) => {
  objColors.productId = strProductId;
  objSizes.productId = strProductId;

  const arrVariations = [objColors, objSizes];
  return Promise.resolve(arrVariations);
};

export { getProductVariations };

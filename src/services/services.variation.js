const objColors = {
  id: 1,
  name: "color",
  values: ["#bbbbbb", "#0474fa", "#f7e940", "ffffff"],
};

const objSizes = {
  id: 2,
  name: "size",
  values: ["xs", "s", "m", "l", "xl", "xxl"],
};

const getProductVariations = (strProductId) => {
  const arrVariations = [objColors, objSizes];
  return Promise.resolve(arrVariations);
};

export { getProductVariations };

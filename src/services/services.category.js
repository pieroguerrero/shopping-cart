//Mockuping the categories, since there is no testing API service by the time this app was build.
const objCategories = [
  {
    id: "electronics",
    displayName: "Electronics",
    value: "electronics",
  },
  {
    id: "jewelery",
    displayName: "Jewelery",
    value: "jewelery",
  },
  {
    id: "men's clothing",
    displayName: "Men's Clothing",
    value: "men's%20clothing",
  },
  {
    id: "women's clothing",
    displayName: "Women's Clothing",
    value: "women's%20clothing",
  },
];

const getCategoryAll = () => {
  return Promise.resolve(objCategories);
};

export { getCategoryAll };

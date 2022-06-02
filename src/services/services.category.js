//Mockuping the categories, since there is no testing API service by the time this app was build.
const objCategories = [
  {
    id: 1,
    displayName: "Electronics",
    value: "electronics",
  },
  {
    id: 2,
    displayName: "Jewelery",
    value: "jewelery",
  },
  {
    id: 3,
    displayName: "Men's Clothing",
    value: "men's%20clothing",
  },
  {
    id: 4,
    displayName: "Women's Clothing",
    value: "women's%20clothing",
  },
];

const getCategoryAll = () => {
  return Promise.resolve(objCategories);
};

export { getCategoryAll };

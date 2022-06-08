import { adaptProduct } from "../../../../adapters";
import { getProductsAll, getProductsByCategory } from "../../../../services";
import { ProductListPaths } from "../../../../utilities/constants";
import { ProductListItem } from "./../ProductListItem";

/**
 *
 * @module ComponentUtil_ProductListContent
 */

/**
 *
 * @param {string} strBranch
 * @param {URLSearchParams} searchParams
 * @returns {Promise<object[]>}
 */
const getProducts = (strBranch, searchParams) => {
  if (strBranch.toLowerCase() === ProductListPaths.MOST_VIWED) {
    return getProductsAll();
  }

  if (strBranch.toLowerCase() === ProductListPaths.CATEGORY) {
    console.log(
      "getProducts - ProductListPaths.CATEGORY.Parameter: ",
      searchParams.get("value")
    );
    return getProductsByCategory(searchParams.get("value"));
  }

  if (strBranch.toLowerCase() === ProductListPaths.SEARCH) {
    return Promise.resolve(["no value"]);
  }
};

/**
 *
 * @param {object[]} arrProductListRaw
 * @returns {JSX.Element[]}
 */
const paraseProductList = (arrProductListRaw) => {
  return arrProductListRaw.map((objProductRaw) => {
    const objProduct = adaptProduct(objProductRaw);
    return (
      <div key={objProduct.strId}>
        <ProductListItem objProduct={objProduct} />
      </div>
    );
  });
};

export { getProducts, paraseProductList };

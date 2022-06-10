import { useEffect, useState } from "react";
import { LoadingShade } from "../../../../components/LoadingShade/LoadingShade";
import { CartContext } from "./../../../../contexts/";
import { getProducts, paraseProductList } from "./ProductListContent.util";

/**
 *
 * @param {object} props
 * @param {string} props.strBranch
 * @param {URLSearchParams} props.searchParams
 * @returns {JSX.Element}
 */
const ProductListContent = ({ strBranch, searchParams }) => {
  const [arrProductList, setArrProductList] = useState(null);
  const [stateSearchParams, setStateSearchParams] = useState(searchParams);

  useEffect(() => {
    getProducts(strBranch, searchParams).then(function (response) {
      setArrProductList(paraseProductList(response));
      setStateSearchParams(searchParams);
    });
  }, [strBranch, searchParams]);

  if (arrProductList === null) {
    console.log("arrProductList is NULL");
  }

  return (
    <>
      {(() => {
        if (arrProductList === null || stateSearchParams !== searchParams) {
          return <LoadingShade />;
        }

        if (arrProductList.length > 0) {
          return (
            <div className="grid grid-cols-2 gap-y-10 gap-x-6 sm:grid-cols-3 lg:grid-cols-4 xl:gap-x-8">
              {arrProductList}
            </div>
          );
        } else {
          <p>There are no results.</p>;
        }
      })()}
    </>
  );
};
export { ProductListContent };

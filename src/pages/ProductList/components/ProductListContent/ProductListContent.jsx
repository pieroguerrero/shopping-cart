import { useEffect, useState } from "react";
import { Location, useLocation } from "react-router-dom";
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

  useEffect(() => {
    console.log("ProductListContent.useEffect executed!");
    getProducts(strBranch, searchParams).then(function (response) {
      setArrProductList(paraseProductList(response));
    });
  }, [strBranch, searchParams]);

  return (
    <>
      {(() => {
        if (arrProductList === null) {
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

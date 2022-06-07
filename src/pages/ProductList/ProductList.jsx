import { useLocation, useParams, useSearchParams } from "react-router-dom";
import { getListTitle } from "./ProductList.util";

/**
 *
 * @returns {JSX.Element}
 */
const ProductList = () => {
  const location = useLocation();
  const params = useParams();
  const [searchParams, setSearchParams] = useSearchParams();

  return (
    <main className="h-full bg-white overflow-hidden">
      <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
        {getListTitle(params.listId ?? "all", searchParams)}
      </div>
      <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8"></div>

      {/* create a new component called ProductListContent, este component will call the API based on the parameters in the URL passed by its parent ProductList component. If tere are no records to show it will return the proper message */}
    </main>
  );
};

export { ProductList };

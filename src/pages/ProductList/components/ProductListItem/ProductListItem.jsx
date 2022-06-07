import { Link } from "react-router-dom";

/**
 *
 * @param {object} props
 * @param {import("../../../../models/models.product").Product} props.objProduct
 * @returns {JSX.Element}
 */
const ProductListItem = ({ objProduct }) => {
  return (
    <div className="group relative">
      <div className="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
        <img
          src={objProduct.strImagePath}
          alt={objProduct.strTitle}
          className="w-full h-full object-center object-cover lg:w-full lg:h-full"
        />
      </div>
      <div className="mt-4 flex justify-between">
        <div>
          <h3 className="text-sm text-gray-700">
            <Link to={"../product/" + objProduct.strId}>
              <span aria-hidden="true" className="absolute inset-0"></span>
              {objProduct.strTitle}
            </Link>
          </h3>
          {/* <p className="mt-1 text-sm text-gray-500">Black</p> */}
        </div>
        <p className="text-sm font-medium text-gray-900">
          {"$ " + objProduct.fltPrice.toString()}
        </p>
      </div>
    </div>
  );
};
export { ProductListItem };
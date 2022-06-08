import { useLocation, useParams, useSearchParams } from "react-router-dom";
import { Product } from "../../models";
import { createCartItem } from "../../models";
import { ColorPicker } from "./components/ColorPicker";
import { ProductReview } from "./components/ProductReview/ProductReview";
import { SizePicker } from "./components/SizePicker/SizePicker";

/**
 * @returns {JSX.Element}
 */
const ProductPage = () => {
  const params = useParams();
  /**
   * @type Product
   */
  const objProduct = useLocation().state;

  //TODO: Add the infomation about the colors in the adapter, so the color has the values. There is aservice for that
  const objColorOptions = [
    {
      value: "White",
      name: "#ffffff",
    },
    {
      value: "Black",
      name: "#000000",
    },
    {
      value: "Gray",
      name: "#808080",
    },
    {
      value: "Wine Red",
      name: "#b11226",
    },
  ];

  let strChoosenColor = "";
  let strChoosenSize = "";

  /**
   *
   * @param {string} strValue
   * @param {string} strName
   * @returns {void}
   */
  const handleRadioButtonClick = (strValue, strName) => {
    strChoosenColor = strValue;
  };

  /**
   *
   * @param {string} strValue
   * @param {string} strName
   * @returns {void}
   */
  const handleRadioButtonSizeClick = (strValue, strName) => {
    console.log("handleRadioButtonSizeClick", strChoosenSize);
    strChoosenSize = strValue;
  };

  const objColorVariation = objProduct.arrVariations.find(
    (objVariation) => objVariation.strVariationId === "color"
  );

  const objSizeVariation = objProduct.arrVariations.find(
    (objVariation) => objVariation.strVariationId === "size"
  );

  const randomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min);
  };

  console.log("ProductPage.objProduct:", objProduct);
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2">
      <div>
        <div className="pt-10 max-w-2xl mx-auto sm:px-6 lg:max-w-7xl lg:px-8 lg:pt-16">
          <div className="sm:rounded-lg sm:overflow-hidden">
            <img
              src={objProduct.strImagePath}
              alt={objProduct.strTitle}
              className="w-full h-full object-center object-cover"
            />
          </div>
        </div>
      </div>
      <div className="max-w-2xl mx-auto pt-10 pb-16 px-4 sm:px-6 lg:max-w-7xl lg:pt-16 lg:pb-24 lg:px-8 lg:grid  lg:grid-rows-[auto,auto,1fr] lg:gap-x-8">
        {/* Title */}
        <div className=" lg:border-r lg:border-gray-200 lg:pr-8">
          <h1 className="text-2xl font-extrabold tracking-tight text-gray-900 sm:text-3xl">
            {objProduct.strTitle}
          </h1>
        </div>
        {/* <!-- Options --> */}
        <div className="mt-4 lg:mt-3">
          <h2 className="sr-only">Product information</h2>
          <p className="text-3xl text-gray-900">{"$" + objProduct.fltPrice}</p>

          {/* <!-- Reviews --> */}
          <div className="mt-6">
            <h3 className="sr-only">Reviews</h3>
            <ProductReview
              intAverageStars={randomNumber(2, 5)}
              intQuantity={randomNumber(15, 160)}
            />
          </div>
          {/* Variations */}
          <form className="mt-10">
            {/* <!-- Colors --> */}
            {objColorVariation ? (
              <div>
                <h3 className="text-sm text-gray-900 font-medium">Color</h3>
                <ColorPicker
                  arrColorOptions={objColorVariation.arrValues}
                  handleClick={handleRadioButtonClick}
                />
              </div>
            ) : null}

            {/* <!-- Sizes --> */}
            {objSizeVariation ? (
              <div className="mt-10">
                <h3 className="text-sm text-gray-900 font-medium">Size</h3>
                <SizePicker
                  arrSizeOptions={objSizeVariation.arrValues}
                  handleClick={handleRadioButtonSizeClick}
                />
              </div>
            ) : null}

            <button
              type="submit"
              className="mt-10 w-full bg-color_primary border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-white hover:bg--color_primary_dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Add to bag
            </button>
          </form>
        </div>
        {/* Description */}
        <div className="py-10 lg:pt-6 lg:pb-16 lg:border-r lg:border-gray-200 lg:pr-8">
          {/* <!-- Description and details --> */}
          <div>
            <h3 className="sr-only">Description</h3>

            <div className="space-y-6">
              <p className="text-base text-gray-900">
                {objProduct.strDescription}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export { ProductPage };

import { useLocation, useParams, useSearchParams } from "react-router-dom";
import { Product } from "../../models";
import { createCartItem } from "../../models";
import { ColorPicker } from "./components/ColorPicker";

/**
 * @returns {JSX.Element}
 */
const ProductPage = () => {
  const params = useParams();
  const objProduct = useLocation().state;

  //TODO: Add the infomation about the colors in the adapter, so the color has the values. There is aservice for that
  const objColorOptions = [
    {
      value: "white",
      colorCodeHEX: "#ffffff",
      displayName: "White",
    },
    {
      value: "black",
      colorCodeHEX: "#000000",
      displayName: "Black",
    },
    {
      value: "gray",
      colorCodeHEX: "#808080",
      displayName: "Gray",
    },
    {
      value: "redwine",
      colorCodeHEX: "#b11226",
      displayName: "Wine Red",
    },
  ];

  let strChoosenColor = "";
  let strChoosenSize = "";

  /**
   *
   * @param {string} strValue
   * @param {string} strDisplayName
   * @returns {void}
   */
  const handleRadioButtonClick = (strValue, strDisplayName) => {
    strChoosenColor = strValue;
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
            <div className="flex items-center">
              <div className="flex items-center">
                <svg
                  className="text-gray-900 h-5 w-5 flex-shrink-0"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                </svg>

                <svg
                  className="text-gray-900 h-5 w-5 flex-shrink-0"
                  x-state-description='undefined: "text-gray-900", undefined: "text-gray-200"'
                  x-description="Heroicon name: solid/star"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                </svg>

                <svg
                  className="text-gray-900 h-5 w-5 flex-shrink-0"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                </svg>

                <svg
                  className="text-gray-900 h-5 w-5 flex-shrink-0"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                </svg>

                <svg
                  className="text-gray-200 h-5 w-5 flex-shrink-0"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                </svg>
              </div>
              <p className="ml-3 text-sm font-medium text-color_primary">
                117 reviews
              </p>
            </div>
          </div>
          {/* Variations */}
          <form className="mt-10">
            {/* <!-- Colors --> */}
            <div>
              <h3 className="text-sm text-gray-900 font-medium">Color</h3>

              <ColorPicker
                arrColorOptions={objColorOptions}
                handleClick={handleRadioButtonClick}
              />
            </div>

            {/* <!-- Sizes --> */}
            <div className="mt-10">
              <div className="flex items-center">
                <h3 className="text-sm text-gray-900 font-medium">Size</h3>
              </div>

              <fieldset className="mt-4">
                <legend className="sr-only">Choose a size</legend>
                <div className="grid grid-cols-4 gap-4 sm:grid-cols-8 lg:grid-cols-4">
                  <label
                    x-radio-group-option=""
                    className="group relative border rounded-md py-3 px-4 flex items-center justify-center text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none sm:flex-1 sm:py-6 bg-gray-50 text-gray-200 cursor-not-allowed undefined"
                  >
                    <input
                      type="radio"
                      name="size-choice"
                      value="XXS"
                      className="sr-only"
                      aria-labelledby="size-choice-0-label"
                    />
                    <span id="size-choice-0-label">XXS</span>

                    <span
                      aria-hidden="true"
                      className="absolute -inset-px rounded-md border-2 border-gray-200 pointer-events-none"
                    >
                      <svg
                        className="absolute inset-0 w-full h-full text-gray-200 stroke-2"
                        viewBox="0 0 100 100"
                        preserveAspectRatio="none"
                        stroke="currentColor"
                      >
                        <line
                          x1="0"
                          y1="100"
                          x2="100"
                          y2="0"
                          vectorEffect="non-scaling-stroke"
                        ></line>
                      </svg>
                    </span>
                  </label>

                  <label className="group relative border rounded-md py-3 px-4 flex items-center justify-center text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none sm:flex-1 sm:py-6 bg-white shadow-sm text-gray-900 cursor-pointer undefined">
                    <input
                      className=" sr-only"
                      type="radio"
                      name="size-choice"
                      value="XS"
                      aria-labelledby="size-choice-1-label"
                    />
                    <span id="size-choice-1-label">XS</span>

                    <span
                      className="absolute -inset-px rounded-md pointer-events-none border-2 border-transparent"
                      aria-hidden="true"
                    ></span>
                  </label>

                  <label className="group relative border rounded-md py-3 px-4 flex items-center justify-center text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none sm:flex-1 sm:py-6 bg-white shadow-sm text-gray-900 cursor-pointer undefined">
                    <input
                      type="radio"
                      name="size-choice"
                      value="S"
                      className="sr-only"
                      aria-labelledby="size-choice-2-label"
                    />
                    <span id="size-choice-2-label">S</span>

                    <span
                      className="absolute -inset-px rounded-md pointer-events-none border-2 border-indigo-500"
                      aria-hidden="true"
                    ></span>
                  </label>

                  <label className="group relative border rounded-md py-3 px-4 flex items-center justify-center text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none sm:flex-1 sm:py-6 bg-white shadow-sm text-gray-900 cursor-pointer undefined">
                    <input
                      type="radio"
                      name="size-choice"
                      value="M"
                      className="sr-only"
                      aria-labelledby="size-choice-3-label"
                    />
                    <span id="size-choice-3-label">M</span>

                    <span
                      className="absolute -inset-px rounded-md pointer-events-none border-2 border-transparent"
                      aria-hidden="true"
                    ></span>
                  </label>

                  <label className="group relative border rounded-md py-3 px-4 flex items-center justify-center text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none sm:flex-1 sm:py-6 bg-white shadow-sm text-gray-900 cursor-pointer undefined">
                    <input
                      type="radio"
                      name="size-choice"
                      value="L"
                      className="sr-only"
                      aria-labelledby="size-choice-4-label"
                    />
                    <span id="size-choice-4-label">L</span>

                    <span
                      className="absolute -inset-px rounded-md pointer-events-none border-2 border-transparent"
                      aria-hidden="true"
                    ></span>
                  </label>

                  <label className="group relative border rounded-md py-3 px-4 flex items-center justify-center text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none sm:flex-1 sm:py-6 bg-white shadow-sm text-gray-900 cursor-pointer undefined">
                    <input
                      type="radio"
                      name="size-choice"
                      value="XL"
                      className="sr-only"
                      aria-labelledby="size-choice-5-label"
                    />
                    <span id="size-choice-5-label">XL</span>

                    <span
                      className="absolute -inset-px rounded-md pointer-events-none border-2 border-transparent"
                      aria-hidden="true"
                    ></span>
                  </label>

                  <label className="group relative border rounded-md py-3 px-4 flex items-center justify-center text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none sm:flex-1 sm:py-6 bg-white shadow-sm text-gray-900 cursor-pointer undefined">
                    <input
                      type="radio"
                      name="size-choice"
                      value="2XL"
                      className="sr-only"
                      aria-labelledby="size-choice-6-label"
                    />
                    <span id="size-choice-6-label">2XL</span>

                    <span
                      className="absolute -inset-px rounded-md pointer-events-none border-2 border-transparent"
                      aria-hidden="true"
                    ></span>
                  </label>

                  <label className="group relative border rounded-md py-3 px-4 flex items-center justify-center text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none sm:flex-1 sm:py-6 bg-white shadow-sm text-gray-900 cursor-pointer undefined">
                    <input
                      type="radio"
                      name="size-choice"
                      value="3XL"
                      className="sr-only"
                      aria-labelledby="size-choice-7-label"
                    />
                    <span id="size-choice-7-label">3XL</span>

                    <span
                      className="absolute -inset-px rounded-md pointer-events-none border-2 border-transparent"
                      aria-hidden="true"
                    ></span>
                  </label>
                </div>
              </fieldset>
            </div>

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

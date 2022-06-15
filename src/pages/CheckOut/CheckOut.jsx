import {
  EmailInput,
  TextInput,
  SelectField,
  TelInput,
} from "../../components/FormControls";
import { getCountries } from "./ChekOut.util";
import { CartContext } from "../../contexts/CartContext";
import { useContext } from "react";
import { CheckOutSummary } from "./components/CheckOutSummary";

const CheckOut = () => {
  const { getCartSubTotal, getCartItems } = useContext(CartContext);
  const handleTextChange = (strFieldId, strNewValue) => {
    console.log(
      "CheckOut.handleTextChange.strNewValue:",
      strFieldId,
      strNewValue
    );
  };

  return (
    <main className="h-full bg-white overflow-hidden">
      <form
        autoComplete="none"
        className="max-w-7xl mx-auto py-10 px-4 sm:pt-16 sm:pb-24 sm:px-6 lg:px-8"
      >
        <h2 className="text-2xl font-extrabold tracking-tight text-gray-900">
          Checkout
        </h2>
        <div className="mt-5 sm:mt-8 flex flex-col items-center sm:items-start justify-center sm:flex-row gap-8 sm:gap-16">
          <div>
            <h3 className="text-xl tracking-tight text-gray-900">
              Please, complete the following information for the delivery:
            </h3>
            <div className="mt-7 flex flex-col gap-4">
              <EmailInput
                strFieldName="Email"
                booIsRequired={true}
                onValueChange={handleTextChange.bind(null, "email")}
                strInitialValue={""}
                strHelpText={
                  "This email will be used to send you order status updates."
                }
                strPlaceHolder={"yourname@domain.com"}
              />

              <div className="flex flex-col sm:flex-row gap-4">
                <TextInput
                  strFieldName="First Name"
                  booIsRequired={true}
                  onValueChange={handleTextChange.bind(null, "firstname")}
                  strInitialValue={""}
                  strHelpText={""}
                  strPlaceHolder={""}
                  booDisabled={false}
                />

                <TextInput
                  strFieldName="Last Name"
                  booIsRequired={true}
                  onValueChange={handleTextChange.bind(null, "lastname")}
                  strInitialValue={""}
                  strHelpText={""}
                  strPlaceHolder={""}
                  booDisabled={false}
                />
              </div>
              <div className="flex gap-4">
                <div className="w-[70%]">
                  <TextInput
                    strFieldName="Street name and number"
                    booIsRequired={true}
                    onValueChange={handleTextChange.bind(
                      null,
                      "street-name-number"
                    )}
                    strInitialValue={""}
                    strHelpText={""}
                    strPlaceHolder={"e.g. 1210 Elm St."}
                    booDisabled={false}
                  />
                </div>
                <div className="w-[30%]">
                  <TextInput
                    strFieldName="Aprt./Int./Block"
                    booIsRequired={false}
                    onValueChange={handleTextChange.bind(
                      null,
                      "apartment-number"
                    )}
                    strInitialValue={""}
                    strHelpText={""}
                    strPlaceHolder={"e.g. 201"}
                    booDisabled={false}
                  />
                </div>
              </div>

              <SelectField
                strFieldName="Country"
                booIsRequired={true}
                strHelpText=""
                strSelectedValue=""
                strUnselectedText="-- Select a Country --"
                arrValues={getCountries()}
                onValueChange={handleTextChange.bind(null, "country")}
              />
              <div className="flex gap-4">
                <TextInput
                  strFieldName="City"
                  booIsRequired={true}
                  onValueChange={handleTextChange.bind(null, "city")}
                  strInitialValue={""}
                  strHelpText={""}
                  strPlaceHolder={""}
                  booDisabled={false}
                />
                <TextInput
                  strFieldName="State"
                  booIsRequired={true}
                  onValueChange={handleTextChange.bind(null, "state")}
                  strInitialValue={""}
                  strHelpText={""}
                  strPlaceHolder={""}
                  booDisabled={false}
                />
              </div>
              <div className="flex gap-4">
                <TextInput
                  strFieldName="Zip code"
                  booIsRequired={true}
                  onValueChange={handleTextChange.bind(null, "zip")}
                  strInitialValue={""}
                  strHelpText={""}
                  strPlaceHolder={""}
                  booDisabled={false}
                />
                <TelInput
                  strFieldName="Phone number"
                  booIsRequired={false}
                  onValueChange={handleTextChange.bind(null, "phone")}
                  strInitialValue={""}
                  strHelpText={""}
                  strPlaceHolder={""}
                />
              </div>
            </div>
          </div>
          <div>
            {/* Summary */}
            <CheckOutSummary
              dblOrderTotal={getCartSubTotal()}
              arrCartItems={getCartItems()}
            />
            {/* Payment info */}
            <div>
              <h3 className="mt-8 text-xl tracking-tight text-gray-900">
                Credit Card Information:
              </h3>
              <div className="mt-6 flex flex-col gap-4">
                <TextInput
                  strFieldName="Credit Card number"
                  booDisabled={true}
                  booIsRequired={true}
                  strHelpText={""}
                  strPlaceHolder={"4242 4242 4242 4242"}
                  onValueChange={handleTextChange.bind(
                    null,
                    "credit-card-number"
                  )}
                  strInitialValue={""}
                />
                <div className="flex gap-4">
                  <TextInput
                    strFieldName="Expiration"
                    booDisabled={true}
                    booIsRequired={true}
                    strHelpText={""}
                    strPlaceHolder={"MM/YY"}
                    onValueChange={handleTextChange.bind(
                      null,
                      "credit-card-expiration"
                    )}
                    strInitialValue={""}
                  />
                  <TextInput
                    strFieldName="CCV"
                    booDisabled={true}
                    booIsRequired={true}
                    strHelpText={""}
                    strPlaceHolder={"***"}
                    onValueChange={handleTextChange.bind(
                      null,
                      "credit-card-ccv"
                    )}
                    strInitialValue={""}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-10 flex justify-center items-center">
          <button
            onClick={(e) => {
              e.preventDefault();
            }}
            type="submit"
            className="group relative w-[250px] flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-color_primary hover:bg-color_primary_darker focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-color_primary_softer"
          >
            <span className="absolute left-0 inset-y-0 flex items-center pl-3">
              <svg
                className="h-5 w-5 text-color_primary_softer group-hover:text-blue-400"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </span>
            Place Order
          </button>
        </div>
      </form>
    </main>
  );
};

export { CheckOut };

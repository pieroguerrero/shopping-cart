import ReactDOM from "react-dom";

/**
 *
 * @param {{ side:string,
 * children:any,
 * strPortalDivId:string,
 * strMaxWidth:string,
 * onClosePopUp:()=>void}} param0
 * @returns
 */
const SidePopUp = ({
  side = "left",
  children,
  strPortalDivId,
  strMaxWidth = "fit-content",
  onClosePopUp,
}) => {
  return ReactDOM.createPortal(
    <div
      className={
        " absolute top-0 left-0 w-full h-full bg-gray-600 bg-opacity-50 z-50 flex " +
        (side === "left" ? "justify-start" : "justify-end")
      }
    >
      <div
        className={
          "relative w-full bg-white shadow-xl pb-12 flex flex-col overflow-y-auto"
        }
        style={{ maxWidth: strMaxWidth }}
      >
        <div className="px-4 pt-5 pb-6 flex  ">
          {/* Close button */}
          <button
            onClick={onClosePopUp}
            type="button"
            className="-m-2 p-2 rounded-md inline-flex items-center justify-center text-gray-400"
          >
            <svg
              className="h-6 w-6"
              x-description="Heroicon name: outline/x"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              ></path>
            </svg>
          </button>
        </div>
        <div className=" flex flex-col px-4  py-4 ">{children}</div>

        <div className="border-t border-gray-200 py-6 px-4 space-y-6">
          <div>
            <p className="-m-2 p-2 block font-medium text-gray-900">Sign in</p>
          </div>
          <div>
            <p className="-m-2 p-2 block font-medium text-gray-900">
              Create account
            </p>
          </div>
        </div>
      </div>
    </div>,
    document.getElementById(strPortalDivId)
  );
};

export { SidePopUp };

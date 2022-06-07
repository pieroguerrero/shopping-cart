/**
 *
 * @module "Util_HambugerMenu"
 */

/**
 *
 * @param {Object[]} arrOptions
 * @param {string} arrOptions.title
 * @param {string} arrOptions.to
 * @param {function(string):void} navigateTo
 * @param {string} currentLocationPath
 * @param {function():void} closeSideMenu
 * @returns {JSX.Element}
 */
const getPopUpContent = (
  arrOptions,
  navigateTo,
  closeSideMenu,
  currentLocationPath
) => {
  return (
    <div className="flex flex-col gap-6">
      {arrOptions.map((objOption, index) => (
        <button
          key={index}
          type="button"
          onClick={() => {
            closeSideMenu();
            navigateTo(objOption.to);
          }}
          className={
            "whitespace-nowrap text-base font-medium text-left w-full border-r-4 text-color_primary" +
            (currentLocationPath.includes(objOption.to)
              ? " border-r-color_primary"
              : " border-r-transparent")
          }
        >
          {objOption.title}
        </button>
      ))}
    </div>
  );
};

export { getPopUpContent };

/**
 *
 * @module ComponentUtil_ColorPicker
 */

/**
 *
 * @param {number} index
 * @param {string} strValue
 * @param {string} strColorCodeHEX
 * @param {string} strDisplayName
 * @param {function(string,string):void} handleClick
 * @returns {JSX.Element}
 */
const getRadioButton = (
  index,
  strValue,
  strColorCodeHEX,
  strDisplayName,
  handleClick
) => {
  return (
    <label
      key={index}
      title={strDisplayName}
      className="-m-0.5 relative p-0.5 rounded-full flex items-center justify-center cursor-pointer focus:outline-none"
    >
      <input
        onClick={handleClick.bind(null, strValue, strDisplayName)}
        type="radio"
        name="color-choice"
        value={strValue}
        className="sr-only peer"
        aria-labelledby="color-choice-0-label"
      />
      <span
        aria-hidden="true"
        className="h-9 w-9 border border-black border-opacity-20 rounded-full peer-checked:border-white peer-checked:border-opacity-100 peer-checked:ring-gray-400 peer-checked:ring-2 "
        style={{ backgroundColor: strColorCodeHEX }}
      ></span>
    </label>
  );
};

export { getRadioButton };

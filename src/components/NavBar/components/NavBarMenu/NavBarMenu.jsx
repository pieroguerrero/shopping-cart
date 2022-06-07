import { useEffect, useState } from "react";
import { getMainBarOptions } from "./NavBarMenu.util";

/**
 *
 * @param {Object} props
 * @param {Object[]} props.arrOptions
 * @param {string} props.arrOptions.title
 * @param {string} props.arrOptions.to
 * @returns {JSX.Element}
 */
const NavBarMenu = ({ arrOptions }) => {
  const [mainLinkOptions, setMainLinkOptions] = useState(null);

  useEffect(() => {
    setMainLinkOptions(getMainBarOptions(arrOptions));
    console.log("NavBar.useEffect called!");
  }, [arrOptions]);

  return <div className="h-full flex space-x-8">{mainLinkOptions}</div>;
};

export { NavBarMenu };

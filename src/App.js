import "./App.css";
import { getProductById } from "./services";
import { Outlet, NavLink } from "react-router-dom";
import { NavBar } from "./components/NavBar";

/**
 *
 * @param {{strPortalDivId:string}} param0
 * @returns
 */
function App({ strPortalDivId }) {
  // getProductById("1")
  //   .then(function (response) {
  //     console.log("Response!!", response);
  //   })
  //   .catch(function (error) {
  //     console.log("ERROR!!", error);
  //   });

  /* className={(isActive)=>{return ""}} */

  const arrOptions = [
    { title: "Google", to: "https://www.google.com" },
    { title: "Amazon", to: "https://www.amazon.com" },
  ];

  return (
    <>
      <NavBar strPortalDivId={strPortalDivId} arrOptions={arrOptions} />
      <Outlet />
    </>
  );
}

export default App;

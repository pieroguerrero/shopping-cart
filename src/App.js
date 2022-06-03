import "./App.css";
import { getProductById } from "./services";
import { Outlet, NavLink } from "react-router-dom";
import { NavBar } from "./components/NavBar";
import { useState } from "react";

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
    { title: "Google", to: "/expenses" },
    { title: "Amazon", to: "/invoices" },
  ];

  return (
    <>
      <NavBar strPortalDivId={strPortalDivId} arrOptions={arrOptions} />
      <Outlet />
    </>
  );
}

export default App;

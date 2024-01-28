import React from "react";
import Links from "./links/Links";

function Navbar() {
  return (
    <div>
      <div className="logo">Logo</div>
      <Links />
      <div className="links"></div>
    </div>
  );
}

export default Navbar;

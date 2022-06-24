import React, { Fragment } from "react";
import ADN_Logo from "../../assets/ADN-Logo.png";

function AdnLogo({ width = 100 }) {
  return (
    <Fragment>
      <img src={ADN_Logo} alt="ADN Logo" width={width} />
    </Fragment>
  );
}

export default AdnLogo;

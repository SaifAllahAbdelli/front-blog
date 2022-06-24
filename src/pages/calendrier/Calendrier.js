import React, { Fragment } from "react";

import CalenderBody from "../../components/CalenderBody/CalenderBody";
import { Helmet } from "react-helmet";

function Calendrier() {
  return (
    <Fragment>
      <Helmet>
        <meta charSet="utf-8" />
        <meta
          name="description"
          content="Calendar page to see upcoming appointments."
        />
        <title>Ton Cv | Calendar</title>
      </Helmet>

      <CalenderBody />
    </Fragment>
  );
}

export default Calendrier;

import React from "react";

import SadIcon from "@mui/icons-material/SentimentVeryDissatisfied";
import { Col } from "reactstrap";

function NoOffers() {
  return (
    <Col className="d-flex flex-column justify-content-center align-items-center">
      <SadIcon fontSize="large" />
      <h4 className="mt-3 text-center">
        Malheureusement, on n'a pas d'offres pour le moment
      </h4>
      <h4 className="mt-2 text-center">Réessayer ultérieurement...</h4>
    </Col>
  );
}

export default NoOffers;

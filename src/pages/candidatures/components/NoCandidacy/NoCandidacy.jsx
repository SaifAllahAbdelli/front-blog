import React from "react";

import SadIcon from "@mui/icons-material/SentimentVeryDissatisfied";
import { Col } from "reactstrap";

function NoCandidacy() {
  return (
    <Col className="d-flex flex-column justify-content-center align-items-center mt-5">
      <SadIcon fontSize="large" />
      <h4 className="mt-3 text-center">
        Malheureusement, il n'y a pas des candidatures pour le moment
      </h4>
      <h4 className="mt-2 text-center">Réessayer ultérieurement...</h4>
    </Col>
  );
}

export default NoCandidacy;

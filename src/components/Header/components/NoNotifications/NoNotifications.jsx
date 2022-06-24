import React from "react";

import SadIcon from "@mui/icons-material/SentimentVeryDissatisfied";
import { Col } from "reactstrap";

function NoNotifications() {
  return (
    <Col className="d-flex flex-column justify-content-center align-items-center">
      <SadIcon fontSize="large" />
      <h6 className="mt-3 text-center">Pas de notifications pour le moment</h6>
      <h6 className="mt-2 text-center">Réessayer ultérieurement...</h6>
    </Col>
  );
}

export default NoNotifications;

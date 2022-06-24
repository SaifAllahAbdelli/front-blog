import React from "react";
import { Container, Spinner, Row } from "reactstrap";

function SpinnerSmall() {
  return (
    <Container>
      <Row className="d-flex justify-content-center align-itmes-center">
        <Spinner animation="border" role="status" />
        <p className="d-flex justify-content-center align-items-center ml-2">
          Chargement...
        </p>
      </Row>
    </Container>
  );
}

export default SpinnerSmall;

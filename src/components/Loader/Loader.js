import React from "react";
import { Container, Spinner, Row } from "reactstrap";

import s from "./Loader.module.css";

function Loader() {
  return (
    <Container className={s.row}>
      <Row>
        <Spinner animation="border" role="status" />
      </Row>

      <Row className="mt-5">
        <h1>Loading...</h1>
      </Row>
    </Container>
  );
}

export default Loader;

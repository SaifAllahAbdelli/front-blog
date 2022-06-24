import React from "react";

import { Card, CardBody, CardTitle, CardSubtitle, Col, Row } from "reactstrap";

import CancelIcon from "@mui/icons-material/Cancel";
import { IconButton } from "@mui/material";

import styles from "./favCard.module.css";

function FavCard() {
  return (
    <Row className="mt-2 mb-2">
      <Col>
        <Card>
          <CardBody>
            <Row className="d-flex justify-content-between align-items-center">
              <Col className="col-10">
                <CardTitle>Titre de l'offre</CardTitle>
                <CardSubtitle className="d-flex align-items-center">
                  <p className={`mr-2 ${styles.icon} ${styles.keyword__1}`}>
                    ReactJS
                  </p>
                  <p className={`mr-2 ${styles.icon} ${styles.keyword__2}`}>
                    NodeJS
                  </p>
                </CardSubtitle>
              </Col>

              <Col className="col-2 d-flex justify-content-center align-items-center">
                <IconButton>
                  <CancelIcon />
                </IconButton>
              </Col>
            </Row>
          </CardBody>
        </Card>
      </Col>
    </Row>
  );
}

export default FavCard;

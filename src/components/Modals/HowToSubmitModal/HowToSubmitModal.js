import React from "react";

import {
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  Row,
  Col,
} from "reactstrap";

import {
  IconButton,
  //Badge
} from "@mui/material";

import FavoriteOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import styles from "./howToSubmit.module.css";

function HowToSubmitModal({ isOpen, toggleShowModal }) {
  return (
    <Modal
      isOpen={isOpen}
      toggle={toggleShowModal}
      centered
      fullscreen="sm"
      size="lg"
    >
      <ModalHeader toggle={toggleShowModal}>Comment postuler ?</ModalHeader>
      <ModalBody>
        <p>
          Pour postuler à un emploi ou à un PFE, il suffit de suivre ces étapes
          :
        </p>

        {/* <section className="mt-4 border-top">
          <p className="mt-3">
            <i className="fa-solid fa-circle-check mr-2"></i>
            Dans un premier temps, en supposant que vous souhaitiez vous
            soumettre à une seule offre (Job ou PFE)
          </p>
          <Row className="mt-2 align-items-center">
            <Col sm="12" md="9" className="d-flex align-items-center">
              <p>
                Dans cette situation, tout ce que vous avez à faire est
                d'appuyer sur :
              </p>
            </Col>

            <Col className="d-flex justify-content-center justify-content-md-start mt-2 mt-md-0">
              <button className="btn btn-outline-info d-flex align-items-center">
                Voir plus <i className="fa-solid fa-angle-right ml-2"></i>
              </button>
            </Col>
          </Row>

          <Row className="mt-2 align-items-center">
            <Col sm="12" md="9" className="d-flex align-items-center">
              <p>
                Ensuite, une fenêtre modale s'affichera et en bas, vous
                trouverez:
              </p>
            </Col>

            <Col className="d-flex justify-content-center justify-content-md-start mt-2 mt-md-0">
              <Button color="success">Postuler</Button>
            </Col>
          </Row>

          <Row className="mt-2 align-items-center">
            <Col className="d-flex align-items-center">
              <p>
                Enfin, il ne vous reste plus qu'à remplir tous les champs avec
                vos informations...
              </p>
            </Col>
          </Row>
        </section> */}

        <section className="mt-4 border-top">
          <p className="mt-3">
            <i className="fa-solid fa-circle-check mr-2"></i>
            En supposant que vous souhaitiez soumettre plusieurs offres (Job ou
            PFE)
          </p>
          <Row className="mt-2 align-items-center">
            <Col sm="12" md="9" className="d-flex align-items-center">
              <p>
                Dans cette situation, tout ce que vous avez à faire est
                d'appuyer sur:
              </p>
            </Col>

            <Col
              md="1"
              className="d-flex justify-content-center justify-content-md-start"
            >
              <IconButton>
                <FavoriteOutlinedIcon className={`${styles.heart}`} />
              </IconButton>
            </Col>
          </Row>

          <Row className="mt-2 align-items-center">
            <Col sm="12" md="8" className="d-flex align-items-center">
              <p>
                Ensuite, l'offre sera ajoutée automatiquement à votre liste de
                souhaits.
              </p>
            </Col>
          </Row>

          {/* <Row className="mt-2 align-items-center">
            <Col sm="12" md="6" className="d-flex align-items-center">
              <p>Pour parcourir votre wishlist, vous pouvez cliquer sur:</p>
            </Col>

            <Col
              md="2"
              className="d-flex justify-content-center justify-content-md-start"
            >
              <IconButton>
                <Badge
                  badgeContent={5}
                  className={styles["css-whxibi-MuiBadge-badge"]}
                >
                  <FavoriteOutlinedIcon className={`${styles.heart}`} />
                </Badge>
              </IconButton>
            </Col>

            <Col sm="12" className="d-flex align-items-center">
              <small className="text-info">
                Le nombre <i>5</i> ici est uniquement pour expliquer les choses,
                il contiendra le nombre total d'articles dans votre liste de
                souhaits.
              </small>
            </Col>
          </Row> */}

          <Row className="mt-2 align-items-center">
            <Col sm="12" md="8" className="d-flex align-items-center">
              <p>
                Enfin, pour soumettre à toutes les offres de la wishlist, il
                vous suffit d'appuyer sur :
              </p>
            </Col>

            <Col
              md="4"
              className="d-flex justify-content-center justify-content-md-start mt-2 mt-md-0"
            >
              <button className="btn btn-primary">Déposer demande</button>
            </Col>
          </Row>
        </section>
      </ModalBody>
      <ModalFooter>
        <Button color="light" onClick={toggleShowModal}>
          Fermé
        </Button>
      </ModalFooter>
    </Modal>
  );
}

export default HowToSubmitModal;

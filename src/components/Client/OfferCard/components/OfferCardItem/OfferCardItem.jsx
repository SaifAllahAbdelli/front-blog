import React, { useState } from "react";

import {
  Card,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Col,
  CardFooter,
} from "reactstrap";

import FavoriteOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import { IconButton } from "@mui/material";

import styles from "./offersCardItem.module.css";
import ViewMoreOffer from "../../../../Modals/ViewMoreOffer/ViewMoreOffer";

function OfferCardItem({
  id,
  title,
  category,
  description,
  text,
  addedDate,
  lastModified,
}) {
  const [viewMoreOfferModalIsOpen, setViewMoreOfferModalIsOpen] =
    useState(false);

  const toggleShowViewMoreOfferModal = () => {
    setViewMoreOfferModalIsOpen(!viewMoreOfferModalIsOpen);
  };

  const data = {
    id,
    title,
    category,
    description,
    text,
    addedDate,
    lastModified,
   
  };


  return (
    <Col md="6" lg="4" className="mt-2 mb-2">
      <Card>
        <CardBody>
          <CardTitle
            className="text-info d-flex align-items-center justify-content-between"
            style={{ height: "4rem" }}
          >
            <span className="d-flex justify-content-between align-items-center">
              <h4 className="mb-0">{title}</h4>

              <IconButton>
                <FavoriteOutlinedIcon className={`${styles.heart}`} />
              </IconButton>
            </span>
            <div className={`${styles.icon} ${styles.status}`}>{category}</div>
          </CardTitle>

          <CardSubtitle className="text-info d-flex align-items-center">
           
          </CardSubtitle>
        </CardBody>

        <CardBody>
          <CardText className={`${styles.description}`}>
            {description}
          </CardText>
        </CardBody>

        <CardFooter className="d-flex justify-content-end bg-white">
          <button
            className="btn btn-outline-info d-flex align-items-center"
            onClick={toggleShowViewMoreOfferModal}
          >
            Voir plus <i className="fa-solid fa-angle-right ml-2"></i>
          </button>
        </CardFooter>
      </Card>

      {viewMoreOfferModalIsOpen && (
        <ViewMoreOffer
          isOpen={viewMoreOfferModalIsOpen}
          toggleShowModal={toggleShowViewMoreOfferModal}
          {...data}
        />
      )}
    </Col>
  );
}

export default OfferCardItem;

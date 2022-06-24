import React from "react";
import { useSelector } from "react-redux";
import { Container, Row } from "reactstrap";

import OfferCardItem from "./components/OfferCardItem/OfferCardItem";
import NoOffers from "./components/NoOffers/NoOffers";
import SpinnerSmall from "../../SpinnerSmall/SpinnerSmall";

function OfferCard({ jobTypeProp }) {
  const offres = useSelector((state) => state.postes).filter(
    ({ status, jobType }) => status !== "Fermé" && jobType === jobTypeProp
  );

  const { searchValue } = useSelector((state) => state.search);
  const loading = useSelector((state) => state.loading);

  const offersToBeRendred = searchValue
    ? offres.filter(
        ({ jobTitle }) =>
          jobTitle.toLowerCase().search(searchValue.toLowerCase()) !== -1
      )
    : offres;

  const renderOffers = offersToBeRendred.map(({ _id, ...rest }) => (
    <OfferCardItem key={_id} id={_id} {...rest} />
  ));

  const offersFound = offersToBeRendred.length ? renderOffers : <NoOffers />;

  const customClassName =
    offersToBeRendred.length < 3 ? "d-flex justify-content-center" : "";
  return (
    <Container className="m-auto">
      <Row className={customClassName}>
        {loading ? <SpinnerSmall /> : offersFound}
      </Row>
    </Container>
  );
}

export default OfferCard;

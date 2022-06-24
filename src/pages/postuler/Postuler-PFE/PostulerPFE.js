import React, { useCallback, useState } from "react";

import ClientHeader from "../../../components/Client/ClientHeader/ClientHeader";
import OfferCard from "../../../components/Client/OfferCard/OfferCard";
import HowToSubmitModal from "../../../components/Modals/HowToSubmitModal/HowToSubmitModal";

import { Helmet } from "react-helmet";

import styles from "../postuler.module.css";

function PostulerPFE() {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const toggleShowModal = useCallback(() => {
    setModalIsOpen(!modalIsOpen);
  }, [modalIsOpen]);

  // useEffect(() => {
  //   setModalIsOpen(true);
  // }, []);

  return (
    <div className={`${styles.container}`}>
      <Helmet>
        <meta charSet="utf-8" />
        <meta
          name="description"
          content="Internship page to see all available internship offers and apply for one."
        />
        <title>Ton CV | PFE</title>
      </Helmet>

      <ClientHeader />
      <OfferCard jobTypeProp="PFE" />

      {modalIsOpen && (
        <HowToSubmitModal
          isOpen={modalIsOpen}
          toggleShowModal={toggleShowModal}
        />
      )}
    </div>
  );
}

export default PostulerPFE;

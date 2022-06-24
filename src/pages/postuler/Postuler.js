import React, { useCallback, useEffect, useState } from "react";
import ClientHeader from "../../components/Client/ClientHeader/ClientHeader";
import OfferCard from "../../components/Client/OfferCard/OfferCard";
import HowToSubmitModal from "../../components/Modals/HowToSubmitModal/HowToSubmitModal";

import styles from "./postuler.module.css";

function Postuler() {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const toggleShowModal = useCallback(() => {
    setModalIsOpen(!modalIsOpen);
  }, [modalIsOpen]);

  useEffect(() => {
    setModalIsOpen(true);
  }, []);

  return (
    <div className={`${styles.container}`}>
      <ClientHeader />
      <OfferCard />

      {modalIsOpen && (
        <HowToSubmitModal
          isOpen={modalIsOpen}
          toggleShowModal={toggleShowModal}
        />
      )}
    </div>
  );
}

export default Postuler;

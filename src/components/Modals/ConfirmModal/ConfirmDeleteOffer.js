import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { Modal, ModalHeader, ModalBody, ModalFooter, Button } from "reactstrap";
import { deleteOffer } from "../../../redux/actions/admin/offresActions";

function ConfirmDeleteOffer({ isOpen, toggleShowModal, offerID }) {
  const dispatch = useDispatch();

  const { jobType } = useSelector((state) => state.postes).filter(
    (offer) => offer.id === offerID[0]
  )[0];

  const handleDelete = () => {
    dispatch(deleteOffer({ offerID, jobType }));

    toggleShowModal();
  };

  return (
    <Modal
      isOpen={isOpen}
      toggle={toggleShowModal}
      centered
      fullscreen="sm"
      size="lg"
    >
      <ModalHeader toggle={toggleShowModal}>Confirmer</ModalHeader>
      <ModalBody>
      <i class="fa-solid fa-triangle-exclamation btn-outline-danger"></i>
        Êtes-vous sûr de la suppresion de poste numéro {offerID}?
      </ModalBody>
      <ModalFooter>
        <Button color="light" onClick={toggleShowModal}>
          Non
        </Button>

        <Button color="danger" onClick={handleDelete}>
          Oui
        </Button>
      </ModalFooter>
    </Modal>
  );
}

export default ConfirmDeleteOffer;

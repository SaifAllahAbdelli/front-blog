import React from "react";

import { Modal, ModalHeader, ModalBody, ModalFooter, Button } from "reactstrap";

function ConfirmModal({ isOpen, toggleShowModal, userID }) {
  return (
    <Modal
      isOpen={isOpen}
      toggle={toggleShowModal}
      centered
      fullscreen="sm"
      size="lg"
    >
      <ModalHeader toggle={toggleShowModal}>Confirmer</ModalHeader>
      <ModalBody>Êtes-vous sûr?</ModalBody>
      <ModalFooter>
        <Button color="light" onClick={toggleShowModal}>
          Non
        </Button>

        <Button color="success" onClick={toggleShowModal}>
          Oui
        </Button>
      </ModalFooter>
    </Modal>
  );
}

export default ConfirmModal;

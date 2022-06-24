import React from "react";

import { Modal, ModalHeader, ModalBody, ModalFooter, Button } from "reactstrap";

function ChooseDateModal({ isOpen, toggleShowModal, userID }) {
  return (
    <Modal
      isOpen={isOpen}
      toggle={toggleShowModal}
      centered
      fullscreen="sm"
      size="lg"
    >
      <ModalHeader toggle={toggleShowModal}>Choose a date</ModalHeader>
      <ModalBody>Calender goes here</ModalBody>
      <ModalFooter>
        <Button color="success" onClick={toggleShowModal}>
          Done !
        </Button>
      </ModalFooter>
    </Modal>
  );
}

export default ChooseDateModal;

import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { Modal, ModalHeader, ModalBody, ModalFooter, Button } from "reactstrap";
import { deleteUser } from "../../../redux/actions/admin/usersActions";

function ConfirmDeleteUser({ isOpen, toggleShowModal, userID }) {
  const dispatch = useDispatch();

  const user = useSelector((state) => state.users).filter(
    (user) => user.id === userID[0]
  )[0];

  const handleDelete = () => {
    console.log("user", user);
    dispatch(deleteUser({ userID }));

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
        <i className="fa-solid fa-triangle-exclamation btn-outline-danger"></i>
        Êtes-vous sûr de la suppresion de l'utilisateur numéro {userID}?
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

export default ConfirmDeleteUser;

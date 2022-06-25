import React, { useState, useEffect } from "react";

import {
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
} from "reactstrap";

import { useDispatch, useSelector } from "react-redux";
import { modifyuser } from "../../../redux/actions/admin/usersActions";

function ModifyUserModal({ isOpen, toggleShowModal, user, userID }) {
  const dispatch = useDispatch();

  const [formIsValid, setFormIsValid] = useState(false);

  const oneUser = useSelector((state) => state.users).filter(
    (user) => user.id === userID[0]
  )[0];

  // Global input state
  const [state, setState] = useState({
    id: oneUser.id,
    LastName: oneUser.LastName,
    FirstName: oneUser.FirstName,
    email: oneUser.email,
    role: oneUser.role,
    addedDate:oneUser.addedDate,
    lastModified: oneUser.lastModified
  });

  useEffect(() => {
    if (state.FirstName && state.LastName && state.email && state.role) {
      setFormIsValid(true);
    } else {
      setFormIsValid(false);
    }
  }, [state, userID]);

  const changeCreds = (event) => {
    setState({ ...state, [event.target.name]: event.target.value });
  };

  const { id } = oneUser;

  const handleSubmit = () => {
    dispatch(modifyuser(state));

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
      <ModalHeader toggle={toggleShowModal}>Modifier Poste</ModalHeader>
      <ModalBody>
        <Form>
          <FormGroup>
            <Label for="FirstName">
               Nom {user} <strong className="text-danger">*</strong>
            </Label>
            <Input
              id="FirstName"
              name="FirstName"
              placeholder="nom de l'utilisateur"
              type="text"
              required
              value={state.FirstName}
              onChange={(event) => changeCreds(event)}
            />
          </FormGroup>
          <FormGroup>
            <Label for="LastName">
              Prénom<strong className="text-danger">*</strong>
            </Label>
            <Input
              id="LastName"
              name="LastName"
              type="text"
              placeholder="LastName"
              required
              value={state.LastName}
              onChange={(event) => changeCreds(event)}
            />
          </FormGroup>

          <FormGroup>
            <Label for="email">
              email{user} <strong className="text-danger">*</strong>
            </Label>
            <Input
              id="email"
              name="email"
              type="textarea"
              placeholder="email"
              required
              value={state.email}
              onChange={(event) => changeCreds(event)}
            />
          </FormGroup>

          <FormGroup>
            <Label for="text">
              Role<strong className="text-danger">*</strong>
            </Label>
            <Input
              id="role"
              name="role"
              placeholder="role"
              type="text "
              required
              value={state.role}
              onChange={(event) => changeCreds(event)}
            />
          </FormGroup>
        </Form>
      </ModalBody>

      <ModalFooter>
        <Button color="light" onClick={toggleShowModal}>
          Annuler
        </Button>

        <Button color="success" onClick={handleSubmit} disabled={!formIsValid}>
          Modifier
        </Button>
      </ModalFooter>
    </Modal>
  );
}

export default ModifyUserModal;

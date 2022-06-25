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
import { editUser } from "../../../actions/users";

function ModifyProfilModal({ isOpen, toggleShowModal, info }) {
  const dispatch = useDispatch();

  const [formIsValid, setFormIsValid] = useState(false);



  let { firstName, lastName, email, photo, id } = info

  const changeCreds = (event) => {
    setState({ ...state, [event.target.name]: event.target.value });
  };
  const editProfile = () => {
    dispatch(editUser(state));
    toggleShowModal()
  }

  const [state, setState] = useState({
    id,
    lastName,
    firstName,
    email,
    photo,

  });

  return (
    <Modal
      isOpen={isOpen}
      toggle={toggleShowModal}
      centered
      fullscreen="sm"
      size="lg"
    >
      <ModalHeader toggle={toggleShowModal}>Modifier Profile</ModalHeader>
      <ModalBody>
        <Form>
          <FormGroup>
            <Label for="FirstName">
              Nom  <strong className="text-danger">*</strong>
            </Label>
            <Input
              id="FirstName"
              name="firstName"
              placeholder={firstName}
              type="text"
              required
              onChange={(event) => changeCreds(event)}

            />
          </FormGroup>
          <FormGroup>
            <Label for="LastName">
              Prénom<strong className="text-danger">*</strong>
            </Label>
            <Input
              id="LastName"
              name="lastName"
              type="text"
              placeholder={lastName}
              required

              onChange={(event) => changeCreds(event)}

            />
          </FormGroup>

          <FormGroup>
            <Label for="email">
              email <strong className="text-danger">*</strong>
            </Label>
            <Input
              id="email"
              name="email"
              type="text"
              required
              placeholder={email}
              disabled
            />
          </FormGroup>

          <FormGroup>
            <Label for="Password">
              mot de passe
            </Label>
            <Input
              id="Password"
              name="password"
              type="Password"
              placeholder="Password"
              onChange={(event) => changeCreds(event)}

            />
          </FormGroup>

          <FormGroup>
            <Label for="text">
              Photo<strong className="text-danger">*</strong>
            </Label>
            <Input
              id="photo"
              name="photo"
              placeholder="photo"
              type="file"
              required
              onChange={(event) => changeCreds(event)}
            />
          </FormGroup>
        </Form>
      </ModalBody>

      <ModalFooter>
        <Button color="light" onClick={toggleShowModal}>
          Annuler
        </Button>
        <Button onClick={() => editProfile()} color="success">
          Modifier
        </Button>
      </ModalFooter>
    </Modal>
  );
}

export default ModifyProfilModal;

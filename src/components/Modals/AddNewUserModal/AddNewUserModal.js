import React, { useEffect, useState } from "react";

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

import ConfirmModal from "../ConfirmModal/ConfirmModal";
import { useDispatch, useSelector } from "react-redux";
import { adduser } from "../../../redux/actions/admin/usersActions";

// import { v4 as uuidv4 } from "uuid";

const today = new Date();

const date =
  today.getFullYear() + "-" + (today.getMonth() + 1) + "-" + today.getDate();

function AddNewUserModal({ isOpen, toggleShowModal, pfe }) {
  const [confirmModalIsOpen, setConfirmModalIsOpen] = useState(false);

  const [formIsValid, setFormIsValid] = useState(false);

  const dispatch = useDispatch();

  const offres = useSelector((state) => state.postes);

  // Global input state
  const [state, setState] = useState({
    firstName: "",
    lastName: "",
    email: "",
    roleId: "",
  });

  // Input states if touched
  const [FirstNamesTouched, setFirstNameIsTouched] = useState(false);
  const [LastNameIsTouched, setLastNameIsTouched] = useState(false);
  const [emailIsTouched, setEmailIsTouched] = useState(false);
  const [roleIsTouched, setRoleIsTouched] = useState(false);

  // Overall form validation
  useEffect(() => {
    if (state.lastName && state.firstName && state.email && state.role) {
      setFormIsValid(true);
    } else {
      setFormIsValid(false);
    }
  }, [state, pfe]);

  const changeCreds = (event) => {
    setState({ ...state, [event.target.name]: event.target.value });
  };

  const handleSubmit = () => {
    dispatch(adduser({ ...state, roleId: Number(state.roleId) }));

    // Reintialize state
    setState({
      firstName: "",
      lastName: "",
      email: "",
      roleId: "",
    });

    // Reintialize is touched
    setFirstNameIsTouched(false);
    setLastNameIsTouched(false);
    setEmailIsTouched(false);
    setRoleIsTouched(false);

    toggleShowModal();
  };

  const toggleShowConfirmeModal = () => {
    setConfirmModalIsOpen(!confirmModalIsOpen);
  };

  return (
    <Modal
      isOpen={isOpen}
      toggle={toggleShowModal}
      centered
      fullscreen="sm"
      size="lg"
    >
      <ModalHeader toggle={toggleShowModal}>Ajouter un utlisateur</ModalHeader>
      <ModalBody>
        <Form>
          <FormGroup>
            <Label for="FirstName">
              Nom
              <strong className="text-danger">*</strong>
            </Label>
            <Input
              id="FirstName"
              name="firstName"
              placeholder="FirstName"
              type="text"
              required
              value={state.FirstName}
              onChange={(event) => changeCreds(event)}
              onFocus={() => setFirstNameIsTouched(true)}
              className={
                !state.FirstName && FirstNamesTouched ? "is-invalid" : ""
              }
            />

            <div className="invalid-feedback">Ce champ est requis!</div>
          </FormGroup>
          <FormGroup>
            <Label for="LastName">
              Prénom
              <strong className="text-danger">*</strong>
            </Label>
            <Input
              id="LastName"
              name="lastName"
              placeholder="LastName"
              type="text"
              required
              value={state.LastName}
              onChange={(event) => changeCreds(event)}
              onFocus={() => setLastNameIsTouched(true)}
              className={
                !state.LastName && LastNameIsTouched ? "is-invalid" : ""
              }
            />

            <div className="invalid-feedback">Ce champ est requis!</div>
          </FormGroup>

          <FormGroup>
            <Label for="email">
              Email
              <strong className="text-danger">*</strong>
            </Label>
            <Input
              id="email"
              name="email"
              type="email"
              placeholder="email"
              required
              value={state.description}
              onChange={(event) => changeCreds(event)}
              onFocus={() => setEmailIsTouched(true)}
              className={!state.email && emailIsTouched ? "is-invalid" : ""}
            />
            <div className="invalid-feedback">Ce champ est requis!</div>
          </FormGroup>
          <FormGroup>
            <Label for="text">
              Role
              <strong className="text-danger">*</strong>
            </Label>
            <Input
              id="role"
              name="roleId"
              type="select"
              catregory
              placeholder="role"
              required
              value={state.role}
              onChange={(event) => changeCreds(event)}
              onFocus={() => setRoleIsTouched(true)}
              className={!state.role && roleIsTouched ? "is-invalid" : ""}
            >
              <option value="1">
                ADMIN
              </option>
              <option value="2">
                DEVELOPPEUR
              </option>
            </Input>

            <div className="invalid-feedback">Ce champ est requis!</div>
          </FormGroup>
        </Form>
      </ModalBody>

      <ModalFooter>
        <Button color="light" onClick={toggleShowModal}>
          Annuler
        </Button>

        <Button color="success" onClick={handleSubmit} >
          Ajouter
        </Button>
      </ModalFooter>

      <ConfirmModal
        isOpen={confirmModalIsOpen}
        toggleShowModal={toggleShowConfirmeModal}
      />
    </Modal>
  );
}

export default AddNewUserModal;

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
import { addOffer } from "../../../redux/actions/admin/offresActions";

// import { v4 as uuidv4 } from "uuid";

const today = new Date();

const date =
  today.getFullYear() + "-" + (today.getMonth() + 1) + "-" + today.getDate();

function AddNewOfferModal({ isOpen, toggleShowModal, pfe }) {
  const [confirmModalIsOpen, setConfirmModalIsOpen] = useState(false);

  const [formIsValid, setFormIsValid] = useState(false);

  const dispatch = useDispatch();

  const offres = useSelector((state) => state.postes);

  // Global input state
  const [state, setState] = useState({
    id: offres.length + 1,
    title: "",
    description: "",
    text: "",
    category: "",
    totalposts: 0,
    addedDate: date,
    lastModified: date,
  });

  // Input states if touched
  const [tileIsTouched, setTitleIsTouched] = useState(false);
  const [descriptionIsTouched, setDescriptionIsTouched] = useState(false);
  const [textIsTouched, setTextIsTouched] = useState(false);
  const [categoryIsTouched, setCategoryIsTouched] = useState(false);

  // Overall form validation
  useEffect(() => {
    if (state.title && state.category && state.description && state.text) {
      setFormIsValid(true);
    } else {
      setFormIsValid(false);
    }
  }, [state, pfe]);

  const changeCreds = (event) => {
    setState({ ...state, [event.target.name]: event.target.value });
  };

  const handleSubmit = () => {
    dispatch(addOffer(state));

    // Reintialize state
    setState({
      id: 0,
      title: "",
      category: "",
      description: "",
      text: "",
      totalposts: 0,
      addedDate: date,
      lastModified: date,
    });

    // Reintialize is touched
    setTitleIsTouched(false);
    setDescriptionIsTouched(false);
    setTextIsTouched(false);
    setCategoryIsTouched(false);

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
      <ModalHeader toggle={toggleShowModal}>
        Ajouter une nouvelle offre
      </ModalHeader>
      <ModalBody>
        <Form>
          <FormGroup>
            <Label for="jobTitle">
              Titre
              <strong className="text-danger">*</strong>
            </Label>
            <Input
              id="title"
              name="title"
              placeholder="Titre du post"
              type="text"
              required
              value={state.title}
              onChange={(event) => changeCreds(event)}
              onFocus={() => setTitleIsTouched(true)}
              className={!state.title && tileIsTouched ? "is-invalid" : ""}
            />

            <div className="invalid-feedback">Ce champ est requis!</div>
          </FormGroup>
          <FormGroup>
            <Label for="category">
              Category
              <strong className="text-danger">*</strong>
            </Label>
            <Input
              id="category"
              name="category"
              placeholder="category"
              type="text"
              required
              value={state.category}
              onChange={(event) => changeCreds(event)}
              onFocus={() => setCategoryIsTouched(true)}
              className={
                !state.category && categoryIsTouched ? "is-invalid" : ""
              }
            />

            <div className="invalid-feedback">Ce champ est requis!</div>
          </FormGroup>

          <FormGroup>
            <Label for="description">
              Description
              <strong className="text-danger">*</strong>
            </Label>
            <Input
              id="description"
              name="description"
              type="textarea"
              placeholder="description"
              required
              value={state.description}
              onChange={(event) => changeCreds(event)}
              onFocus={() => setDescriptionIsTouched(true)}
              className={
                !state.description && descriptionIsTouched ? "is-invalid" : ""
              }
            />
            <div className="invalid-feedback">Ce champ est requis!</div>
          </FormGroup>
          <FormGroup>
            <Label for="text">
              Text
              <strong className="text-danger">*</strong>
            </Label>
            <Input
              id="text"
              name="text"
              type="textarea"
              placeholder="text"
              required
              value={state.text}
              onChange={(event) => changeCreds(event)}
              onFocus={() => setTextIsTouched(true)}
              className={!state.text && textIsTouched ? "is-invalid" : ""}
            />
            <div className="invalid-feedback">Ce champ est requis!</div>
          </FormGroup>
        </Form>
      </ModalBody>

      <ModalFooter>
        <Button color="light" onClick={toggleShowModal}>
          Annuler
        </Button>

        <Button color="success" onClick={handleSubmit} disabled={!formIsValid}>
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

export default AddNewOfferModal;

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
import { modifyOffer } from "../../../redux/actions/admin/offresActions";

function ModifyPosteModal({ isOpen, toggleShowModal, poste, posteID }) {
  const dispatch = useDispatch();

  const [formIsValid, setFormIsValid] = useState(false);

  const { posts } = useSelector((state) => state.posts)
  const onePoste = posts.filter(res => res.id == posteID)[0]
  // Global input state
  const [state, setState] = useState({
    id: onePoste.id,
    title: onePoste.title,
    category: onePoste.category,
    description: onePoste.description,
    text: onePoste.text,
  });

  useEffect(() => {
    if (state.title && state.category && state.description && state.text) {
      setFormIsValid(true);
    } else {
      setFormIsValid(false);
    }
  }, [state, poste]);

  const changeCreds = (event) => {
    setState({ ...state, [event.target.name]: event.target.value });
  };



  const handleSubmit = () => {
    dispatch(modifyOffer(state));

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
            <Label for="Title">
              Titre {poste} <strong className="text-danger">*</strong>
            </Label>
            <Input
              id="Title"
              name="title"
              placeholder="Titre du poste"
              type="text"
              required
              value={state.title}
              onChange={(event) => changeCreds(event)}
            />
          </FormGroup>
          <FormGroup>
            <Label for="category">
              category <strong className="text-danger">*</strong>
            </Label>
            <Input
              id="category"
              name="category"
              type="text"
              placeholder="category"
              required
              value={state.category}
              onChange={(event) => changeCreds(event)}
            />
          </FormGroup>

          <FormGroup>
            <Label for="Description">
              Description {poste} <strong className="text-danger">*</strong>
            </Label>
            <Input
              id="Description"
              name="description"
              type="textarea"
              placeholder="Description du poste"
              required
              value={state.description}
              onChange={(event) => changeCreds(event)}
            />
          </FormGroup>

          <FormGroup>
            <Label for="text">
              text <strong className="text-danger">*</strong>
            </Label>
            <Input
              id="text"
              name="text"
              placeholder="text"
              type="text "
              required
              value={state.text}
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

export default ModifyPosteModal;

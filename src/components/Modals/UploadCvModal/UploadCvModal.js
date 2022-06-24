import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  Container,
} from "reactstrap";

//import { submitUserInfos } from "../../../redux/actions/client/postuler";
import { addCandidature } from "../../../redux/actions/admin/candidaturesActions";
import { invalidForm } from "../../../redux/actions/client/postulerFormActions";
import AboutTheJob from "./components/AboutTheJob/AboutTheJob";
import Contacts from "./components/Contacts/Contacts";
import FullName from "./components/FullName/FullName";
import Stepper from "./components/Stepper/Stepper";
import UploadCV from "./components/UploadCV/UploadCV";

import SpinnerSmall from "../../SpinnerSmall/SpinnerSmall";

function UploadCvModal({ isOpen, toggleShowModalCV, toggleViewMoreModal }) {
  const dispatch = useDispatch();
  const offre = useSelector((state) => state.postuler.offre[0]);
  const formIsValid = useSelector((state) => state.validateForm);
  const loading = useSelector((state) => state.loading);

  const changeCreds = (event, isFile = false) => {
    setUserInfos({
      ...userInfos,
      [event.target.name]: isFile ? event.target.files[0] : event.target.value,
    });
  };

  const [userInfos, setUserInfos] = useState({
    file: null,
    fullName: "",
    age: 0,
    email: "",
    phoneNumber: "",
    description: "",
    experienceYears: 0,
    skills: "",
    jobType: offre ? offre.jobType : "",
    jobID: [offre.id],
    status: "En attente",
    gender: "",
  });
  const [counter, setCounter] = useState(1);

  const totlaPages = 5;

  const notification = {
    seen: false,
    candidatName: userInfos.fullName,
  };

  const nextPage = () => {
    setCounter((prevState) => prevState + 1);
    dispatch(invalidForm());
  };

  const { id, jobType } = offre;

  const handleSubmit = () => {
    dispatch(
      addCandidature({
        userInfos,
        id,
        jobType,
        notification,
        jobTitle: offre.jobTitle,
      })
    );

    if (!loading) {
      toggleShowModalCV();

      if (toggleViewMoreModal) {
        toggleViewMoreModal();
      }
    }
  };

  const goBack = () => {
    setCounter((prevState) => prevState - 1);
  };

  const buttons = (
    <div>
      {counter > 1 && (
        <Button color="light" onClick={goBack} className="mr-2">
          Arrière
        </Button>
      )}
      {counter !== totlaPages && (
        <Button color="success" onClick={nextPage} disabled={!formIsValid}>
          Suivant
        </Button>
      )}
    </div>
  );

  const submitBtns = (
    <div>
      <Button color="light" onClick={goBack} className="mr-2">
        Arrière
      </Button>
      <Button color="primary" onClick={handleSubmit} className="mr-2">
        Envoyer
      </Button>
    </div>
  );

  const switchCounter = () => {
    switch (counter) {
      case 1:
        return <UploadCV handleInput={changeCreds} userInfos={userInfos} />;

      case 2:
        return <FullName handleInput={changeCreds} userInfos={userInfos} />;

      case 3:
        return <Contacts handleInput={changeCreds} userInfos={userInfos} />;

      case 4:
        return <AboutTheJob handleInput={changeCreds} userInfos={userInfos} />;

      case 5:
        return (
          <div className="d-flex justify-content-center align-items-center mt-5 mb-5">
            <h5>Merci pour votre temps et bonne chance. 🤞</h5>
          </div>
        );

      default:
        <UploadCV />;
    }
  };
  return (
    <Modal
      isOpen={isOpen}
      toggle={toggleShowModalCV}
      centered
      fullscreen="md"
      size="lg"
    >
      <ModalHeader toggle={toggleShowModalCV}>
        <span className="d-flex justify-content-between align-items-center">
          {offre ? (
            <h4 className="mb-0">Postuler à: {offre.jobTitle}</h4>
          ) : (
            <h4 className="mb-0">Postuler</h4>
          )}

          <small className="d-block d-sm-none ml-2">
            ({counter}/{totlaPages})
          </small>
        </span>
      </ModalHeader>

      <ModalBody>
        <Container>
          {switchCounter()}
          <Stepper activeStep={counter} />
        </Container>
      </ModalBody>

      {counter < totlaPages && <ModalFooter>{buttons}</ModalFooter>}

      {counter === totlaPages && (
        <ModalFooter>{loading ? <SpinnerSmall /> : submitBtns}</ModalFooter>
      )}
    </Modal>
  );
}

export default UploadCvModal;

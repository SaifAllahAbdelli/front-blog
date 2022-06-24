import React, { Fragment, useState } from "react";

import {
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  Row,
  Container,
  Col,
} from "reactstrap";

import { useDispatch, useSelector } from "react-redux";
import { addInterviewDate } from "../../../redux/actions/admin/candidaturesActions";

import DateTimePicker from "@mui/lab/DateTimePicker";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import TextField from "@mui/material/TextField";

import SpinnerSmall from "../../SpinnerSmall/SpinnerSmall";

function ClientInfosModal({ isOpen, toggleShowModal, userID, job }) {
  const candidature = useSelector((state) => state.candidatures).filter(
    ({ _id, jobType }) => _id === userID[0] && jobType === job
  )[0];

  const loading = useSelector((state) => state.loading);

  const dispatch = useDispatch();

  const [startingDateAndTime, setStartingDateAndTime] = useState(new Date());
  const [endDateAndTime, setEndDateAndTime] = useState(new Date());

  const [openDateTimePicker, setOpenDateTimePicker] = useState(false);

  const {
    fullName,
    email,
    phoneNumber,
    age,
    jobID,
    description,
    status,
    experienceYears,
    jobType,
  } = candidature;

  const skills = candidature.skills.split(",");

  const dateInterview = {
    title: `Entretien ${fullName}`,
    startDate: startingDateAndTime,
    endDate: endDateAndTime,
    location: "Salle de réunuion",
  };

  const addHours = (dateTimeValue) => {
    const newDate = new Date(dateTimeValue);

    newDate.setTime(newDate.getTime() + 1 * 60 * 60 * 1000);

    setEndDateAndTime(newDate);
  };

  const toggleOpenDateTimePicker = () => {
    setOpenDateTimePicker(true);
  };

  const sendDateAndTime = () => {
    dispatch(
      addInterviewDate({
        candidature,
        startingDateAndTime,
        dateInterview,
        status: "Approuvé",
        jobType,
      })
    );

    if (!loading) {
      toggleShowModal();
    }
  };

  const handleRejection = () => {
    dispatch(
      addInterviewDate({
        candidature,
        startingDateAndTime: "",
        dateInterview,
        status: "Rejeté",
        jobType,
      })
    );

    if (!loading) {
      toggleShowModal();
    }
  };

  const submitButton = (
    <Button color="success" onClick={sendDateAndTime}>
      Envoyé
    </Button>
  );

  const chooseDateButton = (
    <Button color="primary" onClick={toggleOpenDateTimePicker}>
      Choisissez une date
    </Button>
  );

  const buttonToDisplay = openDateTimePicker ? submitButton : chooseDateButton;

  return (
    <Modal
      isOpen={isOpen}
      toggle={toggleShowModal}
      centered
      fullscreen="sm"
      size="lg"
    >
      <ModalHeader toggle={toggleShowModal}>{fullName}</ModalHeader>
      <ModalBody>
        <Container>
          <Row className="d-flex align-items-center mb-2">
            <h5 className="mr-2 mb-0 text-info">Email:</h5>
            <p>{email}</p>
          </Row>

          <Row className="d-flex align-items-center mb-2">
            <h5 className="mr-2 mb-0 text-info">Numéro de téléphone:</h5>
            <p>{phoneNumber}</p>
          </Row>

          <Row className="d-flex align-items-center mb-2">
            <h5 className="mr-2 mb-0 text-info">Age:</h5>
            <p>{age}</p>
          </Row>

          <Row className="d-flex align-items-center mb-2">
            <h5 className="mr-2 mb-0 text-info">Poste:</h5>
          </Row>

          <Row className="d-flex align-items-center mb-2">
            <ul className="w-100">
              <Container>
                <Row>
                  {jobID.map((job, key) => (
                    <Col
                      key={key}
                      className="col-12 d-flex justify-content-start align-items-center mt-2"
                    >
                      <i className="fa-solid fa-check"></i>
                      <li className="ml-2">{job.jobTitle}</li>
                    </Col>
                  ))}
                </Row>
              </Container>
            </ul>
          </Row>

          {job === "Job" && (
            <Row className="d-flex align-items-center mb-2">
              <h5 className="mr-2 mb-0 text-info">Années d'expérience:</h5>
              <p>{experienceYears}</p>
            </Row>
          )}

          {description && (
            <Fragment>
              <Row className="d-flex align-items-center mb-2">
                <h5 className="mr-2 mb-0 text-info">Description:</h5>
              </Row>

              <Row className="d-flex align-items-center mb-2">
                <p>{description}</p>
              </Row>
            </Fragment>
          )}

          <Row className="d-flex align-items-center mb-2">
            <h5 className="mr-2 mb-0 text-info">Compétences:</h5>
          </Row>

          <Row className="d-flex align-items-center mb-2">
            <ul className="w-100">
              <Container>
                <Row>
                  {skills.map((skillName, key) => (
                    <Col
                      key={key}
                      className="col-12 d-flex justify-content-start align-items-center mt-2"
                    >
                      <i className="fa-solid fa-check"></i>
                      <li className="ml-2">{skillName}</li>
                    </Col>
                  ))}
                </Row>
              </Container>
            </ul>
          </Row>

          {/* Choose date Fragment */}
          {openDateTimePicker && (
            <Fragment>
              <Row className="d-flex align-items-center mb-4">
                <h5 className="mr-2 mb-0 text-info">Date d'entretien:</h5>
              </Row>

              <Row>
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                  <DateTimePicker
                    renderInput={(props) => <TextField {...props} />}
                    label="Date"
                    value={startingDateAndTime}
                    onChange={(newValue) => {
                      setStartingDateAndTime(newValue);
                      addHours(newValue);
                    }}
                    minDate={new Date()}
                  />
                </LocalizationProvider>
              </Row>
            </Fragment>
          )}
        </Container>
      </ModalBody>

      {loading ? (
        <SpinnerSmall />
      ) : (
        <ModalFooter>
          {status !== "Rejeté" && (
            <Button color="light" onClick={handleRejection}>
              Rejeter
            </Button>
          )}
          {buttonToDisplay}
        </ModalFooter>
      )}
    </Modal>
  );
}

export default ClientInfosModal;

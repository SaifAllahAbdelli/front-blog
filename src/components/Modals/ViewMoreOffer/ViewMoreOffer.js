import React, { useState } from "react";

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

import FavoriteOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import CalendarIcon from "@mui/icons-material/CalendarToday";
import TimeIcon from "@mui/icons-material/AccessTime";
import MoneyIcon from "@mui/icons-material/Paid";
import PsychologyIcon from "@mui/icons-material/Psychology";
import { IconButton } from "@mui/material";

import styles from "./viermoreoffer.module.css";
import UploadCvModal from "../UploadCvModal/UploadCvModal";
import { useDispatch } from "react-redux";
import { chooseOffer } from "../../../redux/actions/client/postulerActions";

function ViewMoreOffer({
    isOpen,
    toggleShowModal,
    id,
    jobTitle,
    jobType,
    jobDescription,
    requiredSkillz,
    workingTimeFrom,
    workingTimeTo,
    keyWords,
    workingDays,
    salary,
    experienceYears,
}) {
    keyWords = keyWords.split(",").slice(0, 3);
    requiredSkillz = requiredSkillz.split(",");

    const [uploadCvModalIsOpen, setUploadCvModalIsOpen] = useState(false);

    const data = {
        id,
        jobTitle,
        jobType,
        jobDescription,
        requiredSkillz,
        workingTimeFrom,
        workingTimeTo,
        keyWords,
        workingDays,
        salary,
        experienceYears,
    };
    const dispatch = useDispatch();

    const toggleShowUploadCvModal = () => {
        setUploadCvModalIsOpen(!uploadCvModalIsOpen);
        dispatch(chooseOffer(data));
        //toggleShowModal();
    };

    return ( <
        Modal isOpen = { isOpen }
        toggle = { toggleShowModal }
        centered fullscreen = "sm"
        size = "lg" >
        <
        ModalHeader toggle = { toggleShowModal } >
        <
        span className = "d-flex justify-content-between align-items-center" >
        <
        h4 className = "mb-0" > { jobTitle } < /h4>

        <
        IconButton >
        <
        FavoriteOutlinedIcon className = { `${styles.heart}` }
        /> <
        /IconButton> <
        /span> <
        /ModalHeader>

        <
        ModalBody >
        <
        Container >
        <
        Row > {
            keyWords.map((keyword, index) => {
                const customClassName = styles[`keyword__${index + 1}`];
                return ( <
                    p key = { index }
                    className = { `mr-2 ${styles.icon} ${customClassName}` } >
                    { keyword } <
                    /p>
                );
            })
        } <
        /Row>

        <
        Row className = "mt-2" >
        <
        div className = "d-flex justify-content-center align-items-center mr-4" >
        <
        CalendarIcon / >
        <
        p className = "ml-2" > { workingDays } < /p> <
        /div>

        <
        div className = "d-flex justify-content-center align-items-center mr-4" >
        <
        TimeIcon / >
        <
        p className = "ml-2" > { workingTimeFrom }: { workingTimeTo } <
        /p> <
        /div>

        {
            salary > 0 && ( <
                div className = "d-flex justify-content-center align-items-center mr-4" >
                <
                MoneyIcon / >
                <
                p className = "ml-2" > { salary }
                DT < /p> <
                /div>
            )
        }

        {
            experienceYears > 0 && ( <
                div className = "d-flex justify-content-center align-items-center mr-4" >
                <
                PsychologyIcon / >
                <
                p className = "ml-2" > { experienceYears }
                ans < /p> <
                /div>
            )
        } <
        /Row>

        <
        Row className = "d-flex justify-content-between align-items-center mt-4" >
        <
        h5 className = "mr-2 mb-0" > Description de l 'emploi:</h5> <
        div className = { `${styles.icon} ${styles.status}` } > { jobType } < /div> <
        /Row>

        <
        Row className = "mt-2" >
        <
        p > { jobDescription } < /p> <
        /Row>

        <
        Row className = "d-flex align-items-center mt-2" >
        <
        h5 className = "mr-2 mb-0" > Compétences: < /h5> <
        /Row>

        <
        Row className = "mt-2" >
        <
        ul >
        <
        Container >
        <
        Row > {
            requiredSkillz.map((skillName, index) => ( <
                Col key = { index }
                className = "col-5 d-flex justify-content-start align-items-center mt-2" >
                <
                i className = "fa-solid fa-check" > < /i> <
                li className = "ml-2" > { skillName } < /li> <
                /Col>
            ))
        } <
        /Row> <
        /Container> <
        /ul> <
        /Row> <
        /Container> <
        /ModalBody> <
        ModalFooter >
        <
        Button color = "light"
        onClick = { toggleShowModal } >
        Fermer <
        /Button> {
            /* <Button color="success" onClick={toggleShowModal}>
                      Ajouter aux Favoris
                    </Button> */
        }

        <
        Button color = "success"
        onClick = { toggleShowUploadCvModal } >
        Postuler <
        /Button> <
        /ModalFooter>

        {
            uploadCvModalIsOpen && ( <
                UploadCvModal isOpen = { uploadCvModalIsOpen }
                toggleShowModalCV = { toggleShowUploadCvModal }
                toggleViewMoreModal = { toggleShowModal }
                />
            )
        } <
        /Modal>
    );
}

export default ViewMoreOffer;
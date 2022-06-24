import React, { useCallback, useState } from "react";

import ClientHeader from "../../../components/Client/ClientHeader/ClientHeader";
import OfferCard from "../../../components/Client/OfferCard/OfferCard";
import HowToSubmitModal from "../../../components/Modals/HowToSubmitModal/HowToSubmitModal";

import { Helmet } from "react-helmet";

import styles from "../postuler.module.css";
import ClientFooter from "../../../components/Client/ClientFooter/ClientFooter";

function PostulerJob() {
    const [modalIsOpen, setModalIsOpen] = useState(false);

    const toggleShowModal = useCallback(() => {
        setModalIsOpen(!modalIsOpen);
    }, [modalIsOpen]);

    // useEffect(() => {
    //   setModalIsOpen(true);
    // }, []);

    return ( < div >

        <
        /div>
    );
}

export default PostulerJob;
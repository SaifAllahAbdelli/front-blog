import React, { Fragment } from "react";

import { useSelector } from "react-redux";

import OffersTable from "./components/UsersTable";
import { Helmet } from "react-helmet";

function OffresPFE() {
    const offres = useSelector((state) => state.postes);

    const rowsPFE = offres.filter(({ jobType }) => jobType === "PFE").reverse();

    return ( <
        Fragment >
        <
        Helmet >
        <
        meta charSet = "utf-8" / >
        <
        meta name = "description"
        content = "Internship offers page to see all internship offers." /
        >
        <
        title > Ton Cv | Internship offers < /title> <
        /Helmet>

        <
        OffersTable title = "PFE"
        rows = { rowsPFE }
        pfe = { true }
        /> <
        /Fragment>
    );
}

export default OffresPFE;
import React, { Fragment } from "react";

import { useSelector } from "react-redux";
import TableComponent from "./components/Table/TableComponent";
import SpinnerSmall from "../../components/SpinnerSmall/SpinnerSmall";
import NoCandidacy from "./components/NoCandidacy/NoCandidacy";
import { Helmet } from "react-helmet";

function PFE() {
  const PFECandidatures = useSelector((state) => state.candidatures)
    .filter(({ jobType }) => jobType === "PFE")
    .reverse();

  const loading = useSelector((state) => state.loading);

  const candidacyFound = PFECandidatures.length ? (
    <TableComponent title="Job" rows={PFECandidatures} />
  ) : (
    <NoCandidacy />
  );

  return (
    <Fragment>
      <Helmet>
        <meta charSet="utf-8" />
        <meta
          name="description"
          content="Internship candidacies pages to see all the candidacies."
        />
        <title>Ton Cv | Internship Candidacies</title>
      </Helmet>

      {loading ? <SpinnerSmall /> : candidacyFound}
    </Fragment>
  );
}

export default PFE;

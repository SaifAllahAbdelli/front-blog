import React, { Fragment } from "react";

import { useSelector } from "react-redux";
import TableComponent from "./components/Table/TableComponent";
import SpinnerSmall from "../../components/SpinnerSmall/SpinnerSmall";
import NoCandidacy from "./components/NoCandidacy/NoCandidacy";
import { Helmet } from "react-helmet";

function Jobs() {
  const jobsCandidatures = useSelector((state) => state.candidatures)
    .filter(({ jobType }) => jobType === "Job")
    .reverse();

  const loading = useSelector((state) => state.loading);

  const candidacyFound = jobsCandidatures.length ? (
    <TableComponent title="Job" rows={jobsCandidatures} />
  ) : (
    <NoCandidacy />
  );

  return (
    <Fragment>
      <Helmet>
        <meta charSet="utf-8" />
        <meta
          name="description"
          content="Job candidacies pages to see all the candidacies."
        />
        <title>Ton Cv | Job Candidacies</title>
      </Helmet>

      {loading ? <SpinnerSmall /> : candidacyFound}
    </Fragment>
  );
}

export default Jobs;

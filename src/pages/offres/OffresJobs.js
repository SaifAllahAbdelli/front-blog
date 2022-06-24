import React, { Fragment } from "react";

import { useSelector } from "react-redux";

import OffersTable from "./components/OffersTable";
import { Helmet } from "react-helmet";

function OffresJobs() {
  const offres = useSelector((state) => state.postes);

  // const rowsJob = offres.filter(({ jobType }) => jobType === "Job").reverse();

  return (
    <Fragment>
      <Helmet>
        <meta charSet="utf-8" />
        <meta
          name="description"
          content="Job offers page to see all job offers."
        />
        <title>Blog | Postes</title>
      </Helmet>

      <OffersTable title="Job" rows={offres} />
    </Fragment>
  );
}

export default OffresJobs;

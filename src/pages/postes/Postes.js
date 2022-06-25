import React, { Fragment, useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";

import PostesTable from "./components/PostesTable";
import { Helmet } from "react-helmet";
import { getOffers } from "../../redux/actions/admin/offresActions";

function OffresJobs() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getOffers())
  }, [dispatch])

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

      <PostesTable title="Job" />
    </Fragment>
  );
}

export default OffresJobs;







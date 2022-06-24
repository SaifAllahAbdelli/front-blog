import React, { Fragment } from "react";

import { useSelector } from "react-redux";

import UsersTable from "./components/UsersTable";
import { Helmet } from "react-helmet";

function Users() {
  const users = useSelector((state) => state.users);

  // const rowsJob = offres.filter(({ jobType }) => jobType === "Job").reverse();

  return (
    <Fragment>
      <Helmet>
        <meta charSet="utf-8" />
        <meta
          name="description"
          content="Pages pour voir tout les utilisateurs."
        />
        <title>Blog | utilisateurs</title>
      </Helmet>

      <UsersTable title="Job" rows={users} />
    </Fragment>
  );
}

export default Users;

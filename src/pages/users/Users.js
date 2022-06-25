import React, { Fragment, useEffect } from "react";

import { useDispatch } from "react-redux";

import UsersTable from "./components/UsersTable";
import { Helmet } from "react-helmet";
import { getUser } from "../../actions/users";

function Users() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUser())
  }, [dispatch])

  return (
    <Fragment>
      <Helmet>
        <meta charSet="utf-8" />
        <meta
          name="description"
          content="Pages pour voir tout les utilisateurs."
        />
        <title>Blog | utilisateur</title>
      </Helmet>

      <UsersTable title="Job"/>
    </Fragment>
  );
}

export default Users;

// -- React and related libs
import React, { Suspense, lazy, useEffect } from "react";
import { Switch, Route, withRouter, Redirect } from "react-router";
import { Buffer } from "buffer";

// -- Component Styles
import s from "./Layout.module.scss";

import Loader from "../Loader/Loader";
import { useDispatch, useSelector } from "react-redux";

import { setLoading, unsetLoading } from "../../redux/actions/loadingActions";


// Lazy loading components
const Header = lazy(() => import("../Header/Header"));
const Sidebar = lazy(() => import("../Sidebar/Sidebar"));

const Dashboard = lazy(() => import("../../pages/dashboard/Dashboard"));


const User = lazy(() => import("../../pages/users/Users"));

const Postes = lazy(() => import("../../pages/postes/Postes"));
const Layout = () => {
  const dispatch = useDispatch();
  const { token } = useSelector((state) => state.auth);
  var role = JSON.parse(Buffer.from(token?.split('.')[1], 'base64').toString());

  useEffect(() => {
    dispatch(setLoading());
    dispatch(unsetLoading());
  }, [dispatch, token]);


  return (
    <div className={s.root}>
      <div className={s.wrap}>
        <Suspense fallback={<Loader />}>
          <Header />
          <Sidebar />
          <main className={s.content}>
            <Switch>
              {/* Default route === root route cause this is a nested route */}
              <Route
                path="/admin"
                exact
                render={() => <Redirect to={"/admin/dashboard"} />}
              />
              <Route path="/admin/dashboard" exact component={Dashboard} />

              {/* Gestion des postes */}
              <Route
                path="/admin/offres"
                exact
                render={() => <Redirect to={"/admin/postes"} />}
              />
              <Route path="/admin/postes" exact component={Postes} />

              {/* Gestion des users */}
              {role.roleId == 1 && (
                <>
                  <Route
                    path="/admin/utilisateur"
                    exact
                    render={() => <Redirect to={"/admin/users"} />}
                  />
                  <Route path="/admin/users" exact component={User} />
                </>
              )
              }
            </Switch>
          </main>
        </Suspense>
      </div>
    </div>
  );
};

export default withRouter(Layout);

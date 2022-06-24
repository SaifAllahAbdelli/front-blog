// -- React and related libs
import React, { Suspense, lazy, useEffect } from "react";
import { Switch, Route, withRouter, Redirect } from "react-router";

// -- Component Styles
import s from "./Layout.module.scss";

import Loader from "../Loader/Loader";
import { useDispatch, useSelector } from "react-redux";

import { setLoading, unsetLoading } from "../../redux/actions/loadingActions";

// import { getCandidatures } from "../../redux/actions/admin/candidaturesActions";
// import { getAppointments } from "../../redux/actions/admin/appointmentsActions";
// import { getNotification } from "../../redux/actions/admin/notificationActions";

// import {
//   getToalOffersByName,
//   getTotalInternshipCandidatsByDay,
//   getTotalInternshipCandidatsCount,
//   getTotalInternshipGenderCandidatsByDay,
//   getTotalJobsCandidatsByDay,
//   getTotalJobsCandidatsCount,
//   getTotalJobsGenderCandidatsByDay,
// } from "../../redux/actions/stats/statsActions";

// Lazy loading components
const Header = lazy(() => import("../Header/Header"));
const Sidebar = lazy(() => import("../Sidebar/Sidebar"));
const Dashboard = lazy(() => import("../../pages/dashboard/Dashboard"));


const User = lazy(() => import("../../pages/users/Usrers"));

const Postes = lazy(() => import("../../pages/offres/OffresJobs"));
const Layout = () => {
  const dispatch = useDispatch();
  const { token } = useSelector((state) => state.auth);

  useEffect(() => {
    dispatch(setLoading());

    // if (token) {
    //   dispatch(getCandidatures());
    //   dispatch(getAppointments());
    //   dispatch(getNotification());

    //   // Stats
    //   dispatch(getToalOffersByName());

    //   dispatch(getTotalInternshipCandidatsByDay("2022"));
    //   dispatch(getTotalJobsCandidatsByDay("2022"));

    //   dispatch(getTotalInternshipCandidatsCount());
    //   dispatch(getTotalJobsCandidatsCount());

    //   dispatch(getTotalInternshipGenderCandidatsByDay("2022"));
    //   dispatch(getTotalJobsGenderCandidatsByDay("2022"));
    // }

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
              <Route path="/admin/postes" exact component={Postes } />
             
                {/* Gestion des users */}
                <Route
                path="/admin/utlisateurs"
                exact
                render={() => <Redirect to={"/admin/users"} />}
              />
              <Route path="/admin/users"exact component={User} />
              

            </Switch>
          </main>
        </Suspense>
      </div>
    </div>
  );
};

export default withRouter(Layout);

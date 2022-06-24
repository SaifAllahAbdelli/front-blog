// -- React and related libs
import React, { useEffect } from "react";
import { Switch, Route, Redirect } from "react-router";
import { BrowserRouter } from "react-router-dom";

// -- Redux
import { useDispatch, useSelector } from "react-redux";

// -- Custom Components
import LayoutComponent from "./components/Layout/Layout";
import ErrorPage from "./pages/error/ErrorPage";
import Login from "./pages/login/Login";
import ForgetPassword from "./pages/forgetPassword/ForgetPassword";
//import Postuler from "./pages/postuler/Postuler";

// -- Redux Actions
import { logoutUser } from "./redux/actions/authActions";

// -- Third Party Libs
import { ToastContainer } from "react-toastify";

// -- Services
import isAuthenticated from "./services/authService";

// -- Component Styles
import "./styles/app.scss";
import PostulerJob from "./pages/postuler/Postuler-job/PostulerJob";
import PostulerPFE from "./pages/postuler/Postuler-PFE/PostulerPFE";
// import { getOffers } from "./redux/actions/admin/offresActions";
import { setLoading, unsetLoading } from "./redux/actions/loadingActions";

const App = () => {
  const dispatch = useDispatch();

  const token = useSelector((state) => state.auth.token);

  const PrivateRoute = ({ dispatch, component, ...rest }) => {
    if (!isAuthenticated(token)) {
      dispatch(logoutUser());
      return <Redirect to="/login" />;
    } else {
      return (
        <Route
          {...rest}
          render={(props) => React.createElement(component, props)}
        />
      );
    }
  };

  useEffect(() => {
    dispatch(setLoading());

    // dispatch(getOffers());

    dispatch(unsetLoading());
  }, [dispatch]);

  return (
    <div>
      <ToastContainer
        pauseOnHover={false}
        autoClose={1500}
        hideProgressBar={true}
        closeButton={false}
        pauseOnFocusLoss={false}
      />
      <BrowserRouter>
        <Switch>
          <Route path="/" exact render={() => <Redirect to="/job-offres" />} />
          <Route path="/job-offres" exact component={PostulerJob} />
          <Route path="/pfe-offres" exact component={PostulerPFE} />

          {/* Login page */}
          <Route path="/login" exact component={Login} />
          <Route path="/forgetpassword" exact component={ForgetPassword} />

          {/* Dashboard page */}
          <PrivateRoute
            path="/admin"
            dispatch={dispatch}
            component={LayoutComponent}
          />

          {/* Error page */}
          <Route path="/error" exact component={ErrorPage} />
          <Route
            path="*"
            exact={true}
            render={() => <Redirect to="/error" />}
          />
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;

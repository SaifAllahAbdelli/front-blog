// -- React and related libs
import React, { useEffect } from "react";
import { Switch, Route, Redirect } from "react-router";
import { BrowserRouter } from "react-router-dom";

// -- Redux
import { useDispatch, useSelector } from "react-redux";
import axios from "./utils/axios";

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

import { setLoading, unsetLoading } from "./redux/actions/loadingActions";
import HomeBlog from "./pages/home/Home";
import SinglePost from "./pages/singlepost/SinglePost";
import { SET_CURRENT_USER } from "./actionType/actions";

const App = () => {
  const dispatch = useDispatch();

  const token = useSelector((state) => state.auth.token);
  const getMe = async () => {
    const response = await axios.get("/api/users/getMe");
    if (response.status === 200) {
      dispatch({ type: SET_CURRENT_USER, payload: response.data })
    };
  }
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
    getMe()
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

          {/* Blog page */}

          <Route exact path="/single-post" component={() => <SinglePost />} />

          <Route exact path="/" component={() => <HomeBlog />} />

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

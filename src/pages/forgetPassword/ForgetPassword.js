import React, { useState } from "react";

import { Container, Row, Col, Button } from "reactstrap";

import hasToken from "../../services/authService";

import Widget from "../../components/Widget/Widget";

import forgetImage from "../../assets/errorImage.svg";
import AdnLogo from "../../components/Icons/AdnLogo";
import ForgetPasswordFrom from "../../components/ForgetPasswordBody/ForgetPasswordForm/ForgetPasswordFrom";
import NewPasswordConfirmation from "../../components/ForgetPasswordBody/NewPasswordConfirmation/NewPasswordConfirmation";

import { useDispatch, useSelector } from "react-redux";
import { invalidForm } from "../../redux/actions/form/postulerFormActions";

import { Helmet } from "react-helmet";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Notification from "../../components/Notification/Notification";

import { useHistory } from "react-router";
import { Redirect } from "react-router-dom";

function ForgetPassword() {
  const [emailIsSent, setEmailIsSent] = useState(false);

  const dispatch = useDispatch();

  const formIsValid = useSelector((state) => state.validateForm);
  const token = useSelector((state) => state.auth.token);

  let history = useHistory();

  const sendMailConfirmation = () => {
    toast(
      <Notification
        type="success"
        withIcon
        message="E-mail de confirmation envoyé"
      />
    );
    dispatch(invalidForm());
    setEmailIsSent(!emailIsSent);
  };

  const changePassword = () => {
    toast(
      <Notification type="success" withIcon message="Mot de passe changé" />
    );
    setEmailIsSent(!emailIsSent);
    dispatch(invalidForm());
    history.push("/login");
  };

  const sendEmailBtn = (
    <Button
      className="rounded-pill my-3"
      type="submit"
      color="secondary-red"
      onClick={sendMailConfirmation}
      disabled={!formIsValid}
    >
      Envoyez-moi un e-mail de confirmation
    </Button>
  );

  const connfirmNewPassword = (
    <Button
      className="rounded-pill my-3"
      type="submit"
      color="secondary-red"
      onClick={changePassword}
      disabled={!formIsValid}
    >
      Confirmer le nouveau mot de passe
    </Button>
  );

  if (hasToken(token)) {
    return <Redirect to="/admin" />;
  }

  return (
    <div className="auth-page">
      <Helmet>
        <meta charSet="utf-8" />
        <meta
          name="description"
          content="Forgot password page to change password for users."
        />
        <title>Blog | Mot de passe oublié</title>
      </Helmet>

      <Container className="col-12">
        <Row className="d-flex align-items-center">
          <Col xs={12} lg={6} className="left-column">
            <Widget className="widget-auth widget-p-lg">
              <div className="d-flex align-items-center justify-content-between py-3">
                <p className="auth-header mb-0">Mot de passe oublié</p>
                <div className="logo-block">
                  <AdnLogo />
                </div>
              </div>

              <from>
                {emailIsSent ? (
                  <NewPasswordConfirmation />
                ) : (
                  <ForgetPasswordFrom />
                )}
              </from>
              <div className="bg-widget d-flex justify-content-center">
                {emailIsSent ? connfirmNewPassword : sendEmailBtn}
              </div>
            </Widget>
          </Col>
          <Col xs={0} lg={6} className="right-column">
            <div>
              <img src={forgetImage} alt="Error page" />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default ForgetPassword;

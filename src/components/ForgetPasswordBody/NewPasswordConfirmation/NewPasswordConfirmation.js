import React, { Fragment, useEffect, useState } from "react";
import { useDispatch } from "react-redux";

import { Link } from "react-router-dom";

import { FormGroup, FormText, Input } from "reactstrap";
import {
  invalidForm,
  validateForm,
} from "../../../redux/actions/form/postulerFormActions";

import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { IconButton } from "@mui/material";

function NewPasswordConfirmation() {
  const [state, setState] = useState({
    password_1: "",
    password_2: "",
  });

  const [isVisible, setIsVisible] = useState(false);

  const renderEye = isVisible ? <VisibilityOffIcon /> : <VisibilityIcon />;

  const toogleIsVisible = () => {
    setIsVisible((prevState) => !prevState);
  };

  const dispatch = useDispatch();

  // Input states if touched
  const [passwordOneIsTouched, setPasswordOneIsTouched] = useState(false);
  const [passwordTwoIsTouched, setPasswordTwoIsTouched] = useState(false);

  const changeCreds = (event) => {
    setState({ ...state, [event.target.name]: event.target.value });
  };

  useEffect(() => {
    if (
      state.password_1 &&
      state.password_2 &&
      state.password_1 === state.password_2
    ) {
      dispatch(validateForm());
    } else {
      dispatch(invalidForm());
    }
  }, [state, dispatch]);

  return (
    <Fragment>
      <FormGroup className="my-3">
        <div className="d-flex justify-content-between">
          <FormText>
            Nouveau mot de passe <strong className="text-danger">*</strong>
          </FormText>
          <Link to="/login">Se connecter</Link>
        </div>

        <div className="d-flex justify-content-between">
          <Input
            id="password_1"
            className={`input-transparent pl-3 ${
              state.password_1.length < 8 &&
              passwordOneIsTouched &&
              "is-invalid"
            }`}
            value={state.password_1}
            onChange={(event) => changeCreds(event)}
            onFocus={() => setPasswordOneIsTouched(true)}
            type={isVisible ? "text" : "password"}
            required
            name="password_1"
            placeholder="Nouveau mot de passe"
          />

          <IconButton onClick={toogleIsVisible}>{renderEye}</IconButton>
        </div>

        <div className="invalid-feedback">
          Veuillez fournir un mot de passe valide avec 8 caractéres ou +
        </div>
      </FormGroup>

      <FormGroup className="my-3">
        <FormText>
          Confirmer nouveau mot de passe{" "}
          <strong className="text-danger">*</strong>
        </FormText>
        <div className="d-flex justify-content-between">
          <Input
            id="password_2"
            className={`input-transparent pl-3 ${
              state.password_2.length < 8 &&
              passwordTwoIsTouched &&
              "is-invalid"
            }`}
            value={state.password_2}
            onChange={(event) => changeCreds(event)}
            onFocus={() => setPasswordTwoIsTouched(true)}
            type={isVisible ? "text" : "password"}
            required
            name="password_2"
            placeholder="Confirmer nouveau mot de passe"
          />

          <IconButton onClick={toogleIsVisible}>{renderEye}</IconButton>
        </div>
        <div className="invalid-feedback">
          Veuillez fournir un mot de passe valide avec 8 caractéres ou +
        </div>
      </FormGroup>
    </Fragment>
  );
}

export default NewPasswordConfirmation;

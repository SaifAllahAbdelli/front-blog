import React, { useState, useEffect, Fragment } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

import { FormGroup, FormText, Input } from "reactstrap";

// Validator imports
import isEmail from "validator/lib/isEmail";
import {
  invalidForm,
  validateForm,
} from "../../../redux/actions/form/postulerFormActions";

function ForgetPasswordFrom() {
  const [state, setState] = useState({
    email: "",
    password: "",
  });

  const dispatch = useDispatch();

  // Input states if touched
  const [emailIsTouched, setEmailIsTouched] = useState(false);

  // Input states validation
  const [emailIsValid, setEmailIsValid] = useState(true);

  // useEffect for the email validation
  useEffect(() => {
    if (emailIsTouched && isEmail(state.email)) {
      setEmailIsValid(true);
      dispatch(validateForm());
    } else {
      setEmailIsValid(false);
      dispatch(invalidForm());
    }
  }, [emailIsTouched, state.email, dispatch]);

  const changeCreds = (event) => {
    setState({ ...state, [event.target.name]: event.target.value });
  };

  return (
    <Fragment>
      <FormGroup className="my-3">
        <div className="d-flex justify-content-between">
          <FormText>
            Address mail <strong className="text-danger">*</strong>
          </FormText>
          <Link to="/login">Se connecter</Link>
        </div>

        <Input
          id="email"
          className={`input-transparent pl-3 ${
            !emailIsValid && emailIsTouched && "is-invalid"
          }`}
          value={state.email}
          onChange={(event) => changeCreds(event)}
          onFocus={() => setEmailIsTouched(true)}
          type="email"
          name="email"
          placeholder="Address mail"
          required
        />
        <div className="invalid-feedback">
          Veuillez fournir une adresse email valide
        </div>
      </FormGroup>
    </Fragment>
  );
}

export default ForgetPasswordFrom;

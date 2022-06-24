import React, { useEffect, useState } from "react";

import isEmail from "validator/lib/isEmail";

import { Form, FormGroup, Input, Label } from "reactstrap";
import { useDispatch } from "react-redux";
import {
  invalidForm,
  validateForm,
} from "../../../../../redux/actions/client/postulerFormActions";

function Contacts({ handleInput, userInfos }) {
  const { email, phoneNumber } = userInfos;

  // Input states if touched
  const [emailIsTouched, setEmailIsTouched] = useState(false);
  const [phoneNumberIsTouched, setPhoneNumberIsTouched] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    if (email && phoneNumber.length >= 8) {
      dispatch(validateForm());
    } else {
      dispatch(invalidForm());
    }
  }, [email, phoneNumber, dispatch]);

  return (
    <Form>
      <FormGroup>
        <Label form="email">
          Address mail <strong className="text-danger">*</strong>
        </Label>
        <Input
          className={!isEmail(email) && emailIsTouched ? "is-invalid" : ""}
          id="email"
          name="email"
          placeholder="Votre e-mail"
          type="email"
          value={email}
          onChange={(e) => handleInput(e)}
          onFocus={() => setEmailIsTouched(true)}
          required
        />
        <div className="invalid-feedback">
          Veuillez fournir une address mail valide.
        </div>
      </FormGroup>

      <FormGroup>
        <Label form="phoneNumber">
          Numéro de téléphone <strong className="text-danger">*</strong>
        </Label>
        <Input
          className={
            (phoneNumber.length < 8 || phoneNumber < 0) && phoneNumberIsTouched
              ? "is-invalid"
              : ""
          }
          id="phoneNumber"
          name="phoneNumber"
          placeholder="Votre numéro de téléphone:"
          type="text"
          value={phoneNumber}
          onChange={(e) => handleInput(e)}
          onFocus={() => setPhoneNumberIsTouched(true)}
          required
        />
        <div className="invalid-feedback">
          Veuillez fournir un numéro de téléphone à 8 chiffres exactement.
        </div>
      </FormGroup>
    </Form>
  );
}

export default Contacts;

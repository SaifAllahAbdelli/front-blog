import React, { useEffect, useState } from "react";
import { Form, FormGroup, Input, Label, FormText } from "reactstrap";

import { useDispatch } from "react-redux";
import {
  invalidForm,
  validateForm,
} from "../../../../../redux/actions/client/postulerFormActions";

function FullName({ handleInput, userInfos }) {
  const { fullName, age } = userInfos;

  // Input states if touched
  const [fullNameIsTouched, setFullNameIsTouched] = useState(false);
  const [ageIsTouched, setAgeIsTouched] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    if (fullName && age > 0) {
      dispatch(validateForm());
    } else {
      dispatch(invalidForm());
    }
  }, [fullName, age, dispatch]);

  return (
    <Form>
      <FormGroup>
        <Label form="firstName">
          Nom et prénom <strong className="text-danger">*</strong>
        </Label>
        <Input
          className={!fullName && fullNameIsTouched ? "is-invalid" : ""}
          id="firstName"
          name="fullName"
          placeholder="Votre nom"
          type="text"
          value={fullName}
          onChange={(e) => handleInput(e)}
          onFocus={() => setFullNameIsTouched(true)}
          required
        />
        <div className="invalid-feedback">Ce champ est requis.</div>
      </FormGroup>

      <FormGroup>
        <Label form="age">
          Age <strong className="text-danger">*</strong>
        </Label>
        <Input
          className={(!age || age < 0) && ageIsTouched ? "is-invalid" : ""}
          id="age"
          name="age"
          type="number"
          value={age}
          onChange={(e) => handleInput(e)}
          onFocus={() => setAgeIsTouched(true)}
          min={0}
          required
        />
        <div className="invalid-feedback">Veuillez fournir un âge valide.</div>
        <FormText>Votre âge en chiffres, par exemple 24.</FormText>
      </FormGroup>

      <FormGroup>
        <Label form="age">
          Le sexe <strong className="text-danger">*</strong>
        </Label>

        <FormGroup check>
          <Label check>
            <Input
              type="radio"
              name="gender"
              value="Femme"
              onChange={(e) => handleInput(e)}
            />{" "}
            Femme
          </Label>
        </FormGroup>

        <FormGroup check>
          <Label check>
            <Input
              type="radio"
              name="gender"
              value="Homme"
              onChange={(e) => handleInput(e)}
            />{" "}
            Homme
          </Label>
        </FormGroup>

        <div className="invalid-feedback">Ce champ est requis.</div>
        <FormText>
          Ce champ est obligatoire à des fins statistiques uniquement.
        </FormText>
      </FormGroup>
    </Form>
  );
}

export default FullName;

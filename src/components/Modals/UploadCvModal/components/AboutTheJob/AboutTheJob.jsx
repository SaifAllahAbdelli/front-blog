import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

import { Form, FormGroup, Input, Label, FormText } from "reactstrap";
import {
  invalidForm,
  validateForm,
} from "../../../../../redux/actions/client/postulerFormActions";

function AboutTheJob({ handleInput, userInfos }) {
  const { description, skills, experienceYears, jobType } = userInfos;

  // Input states if touched
  //const [aboutYouIsTouched, setAboutYouIsTouched] = useState(false);
  const [skillzIsTouched, setSkillzIsTouched] = useState(false);
  const [experienceYearsIsTouched, setExperienceYearsIsTouched] =
    useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    if (skills && (experienceYears > 0 || jobType === "PFE")) {
      dispatch(validateForm());
    } else {
      dispatch(invalidForm());
    }
  }, [skills, experienceYears, jobType, dispatch]);

  return (
    <Form>
      <FormGroup>
        <Label form="aboutYou">Écrivez quelque chose sur vous</Label>
        <Input
          //className={!description && aboutYouIsTouched ? "is-invalid" : ""}
          id="aboutYou"
          name="description"
          placeholder="Écrivez quelque chose sur vous..."
          type="textarea"
          value={description}
          onChange={(e) => handleInput(e)}
          //onFocus={() => setAboutYouIsTouched(true)}
          required
        />
        <div className="invalid-feedback">Ce champ est requis.</div>
      </FormGroup>

      {jobType === "Job" && (
        <FormGroup>
          <Label form="aboutYou">
            Années d'expérience <strong className="text-danger">*</strong>
          </Label>
          <Input
            className={
              (!experienceYears || experienceYears < 0) &&
              experienceYearsIsTouched
                ? "is-invalid"
                : ""
            }
            id="experienceYears"
            name="experienceYears"
            placeholder="Vos années d'expérience"
            type="number"
            value={experienceYears}
            onChange={(e) => handleInput(e)}
            onFocus={() => setExperienceYearsIsTouched(true)}
            min={0}
            required
          />
          <div className="invalid-feedback">
            Entré un nombre d'années valide.
          </div>
        </FormGroup>
      )}

      <FormGroup>
        <Label for="skillz">
          Vos compétences <strong className="text-danger">*</strong>
        </Label>
        <Input
          className={!skills && skillzIsTouched ? "is-invalid" : ""}
          id="skillz"
          name="skills"
          placeholder="ReactJs,NodeJS..."
          type="text"
          value={skills}
          onChange={(e) => handleInput(e)}
          onFocus={() => setSkillzIsTouched(true)}
          required
        />
        <div className="invalid-feedback">Ce champ est requis.</div>
        <FormText>
          Veuillez séparer vos compétences par une virgule <strong>(,)</strong>
        </FormText>
      </FormGroup>
    </Form>
  );
}

export default AboutTheJob;

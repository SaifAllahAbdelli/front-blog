import React, { useState } from "react";


import { Form, FormGroup, Label, Input } from "reactstrap";

function FormBody({ pfe }) {
  // Global input state
  const [state, setState] = useState({
    jobTitle: "",
    jobType: "",
    jobDescription: "",
    requiredSkillz: "",
    experienceYears: 0,
    workingTimeFrom: "",
    workingTimeTo: "",
    keyWords: "",
    workingDays: "",
    salary: 0,
  });

  const changeCreds = (event) => {
    setState({ ...state, [event.target.name]: event.target.value });
  };

  // Input states if touched
  const [jobTileIsTouched, setJobTitleIsTouched] = useState(false);
  const [jobDescriptionIsTouched, setJobDescriptionIsTouched] = useState(false);
  const [requiredSkillsIsTouched, setRequiredSkillsIsTouched] = useState(false);

  return (
    <Form>
      <FormGroup>
        <Label for="jobTitle">
          Titre du poste<strong className="text-danger">*</strong>
        </Label>
        <Input
          id="jobTitle"
          name="jobTitle"
          placeholder="Titre d'emploi"
          type="text"
          required
          value={state.jobTitle}
          onChange={(event) => changeCreds(event)}
          onFocus={() => setJobTitleIsTouched(true)}
          className={!state.jobTitle && jobTileIsTouched ? "is-invalid" : ""}
        />

        <div className="invalid-feedback">Ce champ est requis!</div>
      </FormGroup>

      <FormGroup>
        <Label for="jobType">
          Sélectionnez le type de travail{" "}
          <strong className="text-danger">*</strong>
        </Label>
        <Input
          id="jobType"
          name="jobType"
          type="select"
          required
          value={state.jobType}
          onChange={(event) => changeCreds(event)}
        >
          <option>Job</option>
          <option>PFE</option>
        </Input>
      </FormGroup>

      <FormGroup>
        <Label for="jobDescription">
          Description de l'emploi <strong className="text-danger">*</strong>
        </Label>
        <Input
          id="jobDescription"
          name="jobDescription"
          type="textarea"
          placeholder="Description de l'emploi"
          required
          value={state.jobDescription}
          onChange={(event) => changeCreds(event)}
          onFocus={() => setJobDescriptionIsTouched(true)}
          className={
            !state.jobDescription && jobDescriptionIsTouched ? "is-invalid" : ""
          }
        />
        <div className="invalid-feedback">Ce champ est requis!</div>
      </FormGroup>

      <FormGroup>
        <Label for="requiredSkillz">
          Compétences requises <strong className="text-danger">*</strong>
        </Label>
        <Input
          id="requiredSkillz"
          name="requiredSkillz"
          type="textarea"
          placeholder="ReactJS,NodeJS..."
          required
          value={state.requiredSkillz}
          onChange={(event) => changeCreds(event)}
          onFocus={() => setRequiredSkillsIsTouched(true)}
          className={
            !state.requiredSkillz && requiredSkillsIsTouched ? "is-invalid" : ""
          }
        />
        <div className="invalid-feedback">Ce champ est requis!</div>

       
      </FormGroup>
    </Form>
  );
}

export default FormBody;

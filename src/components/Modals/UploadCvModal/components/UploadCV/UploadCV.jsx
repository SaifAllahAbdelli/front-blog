import React, { useState, useEffect } from "react";
import { Form, FormGroup, Input, FormText, Label } from "reactstrap";

import { useDispatch } from "react-redux";

import {
  invalidForm,
  validateForm,
} from "../../../../../redux/actions/client/postulerFormActions";

function UploadCV({ handleInput, userInfos }) {
  const dispatch = useDispatch();

  // Input states if touched
  const [fileIsTouched, setFileIsTouched] = useState(false);

  const fileType = userInfos.file?.type.split("/")[1] === "pdf";

  // Converting file size to Mb and comparing it to 5 Mb
  const fileSize = userInfos.file?.size / 1048576;
  const isGreaterThenFive = fileSize <= 5;

  useEffect(() => {
    if (userInfos.file && fileType && isGreaterThenFive) {
      dispatch(validateForm());
    } else {
      dispatch(invalidForm());
    }
  }, [userInfos, fileType, isGreaterThenFive, dispatch]);

  return (
    <Form>
      <FormGroup>
        <Label form="file">
          Ton CV <strong className="text-danger">*</strong>
        </Label>
        <Input
          id="file"
          className={
            (!userInfos.file || !fileType || !isGreaterThenFive) &&
            fileIsTouched
              ? "is-invalid"
              : ""
          }
          type="file"
          name="file"
          onChange={(e) => handleInput(e, true)}
          onBlur={() => setFileIsTouched(true)}
          required
        />

        <div className="invalid-feedback">
          Veuillez fournir un fichier valide.
        </div>

        <FormText>
          Veuillez télécharger votre CV ici, il doit s'agir d'un fichier{" "}
          <strong>PDF</strong> avec Taille de fichier{" "}
          <strong>inférieure à 5 Mo</strong>.
        </FormText>
      </FormGroup>
    </Form>
  );
}

export default UploadCV;

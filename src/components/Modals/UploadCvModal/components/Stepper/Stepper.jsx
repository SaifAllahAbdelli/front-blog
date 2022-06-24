import React from "react";

import StepperMUI from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";

import { Container } from "reactstrap";

const steps = [
  "Déposer CV",
  "Information générale",
  "Contacts",
  "Poste désirer",
  "🏁",
];

function Stepper({ activeStep }) {
  if (activeStep === 5) {
    activeStep += 2;
  }

  return (
    <Container className="d-none d-sm-block">
      <StepperMUI activeStep={activeStep - 1}>
        {steps.map((label) => {
          const stepProps = {};
          const labelProps = {};

          return (
            <Step key={label} {...stepProps}>
              <StepLabel {...labelProps}>{label}</StepLabel>
            </Step>
          );
        })}
      </StepperMUI>
    </Container>
  );
}

export default Stepper;

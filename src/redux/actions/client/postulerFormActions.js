import {
  VALIDATE_FORM,
  INVALIDATE_FORM,
} from "../../constants/client/postulerFormConstants";

export const validateForm = (payload) => {
  return {
    type: VALIDATE_FORM,
    payload,
  };
};

export const invalidForm = () => {
  return {
    type: INVALIDATE_FORM,
  };
};

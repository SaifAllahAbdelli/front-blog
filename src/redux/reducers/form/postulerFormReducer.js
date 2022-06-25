import {
  INVALIDATE_FORM,
  VALIDATE_FORM,
} from "../../constants/form/postulerFormConstants";

const INITIAL_STATE = false;

const validateForm = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case VALIDATE_FORM:
      return {
        ...state,
        state: true,
      };

    case INVALIDATE_FORM:
      return INITIAL_STATE;

    default:
      return state;
  }
};

export default validateForm;

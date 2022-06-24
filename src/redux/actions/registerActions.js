import { toast } from "react-toastify";

import {
  REGISTER_FAILURE,
  REGISTER_SUCCESS,
} from "../constants/registerConstants";

export function receiveRegister() {
  return {
    type: REGISTER_SUCCESS,
  };
}

export function registerError(payload) {
  return {
    type: REGISTER_FAILURE,
    payload,
  };
}

export function registerUser(payload) {
  return (dispatch) => {
    if (payload.creds.email.length > 0 && payload.creds.password.length > 0) {
      toast.success("You've been registered successfully");
      payload.history.push("/login");
    } else {
      dispatch(registerError("Something was wrong. Try again"));
    }
  };
}

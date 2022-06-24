import { LOGIN_SUCCESS, LOGOUT_SUCCESS } from "../constants/authConstants";
import { setLoading, unsetLoading } from "./loadingActions";

import axios from "../../utils/axios";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Notification from "../../components/Notification/Notification";

export function receiveLogin(payload) {
  return {
    type: LOGIN_SUCCESS,
    payload,
  };
}

export function receiveLogout() {
  return {
    type: LOGOUT_SUCCESS,
  };
}

// logs the user out
export const logoutUser = () => async (dispatch) => {
  localStorage.removeItem("authenticated");
  localStorage.removeItem("token");
  dispatch(receiveLogout());
};

export const loginUser = (data) => async (dispatch) => {
  dispatch(setLoading());

  try {
    const response = await axios.post("/auth/login", data);

    const { token } = response.data;

    localStorage.setItem("authenticated", true);
    localStorage.setItem("token", token);

    data.token = token;
    dispatch(receiveLogin(data));
  } catch (error) {
    console.log(error.response.data.message);

    toast(
      <Notification
        type="error"
        withIcon
        message={error.response.data.message}
      />
    );
  } finally {
    dispatch(unsetLoading());
  }
};

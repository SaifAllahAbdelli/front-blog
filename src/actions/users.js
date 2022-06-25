import {
  GET_USER,
  CREATE_USER,
  DELETE_USER,
  UPDATE_USER,
  SET_CURRENT_USER,
} from "../actionType/actions";
import axios from "../utils/axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Notification from "../components/Notification/Notification";

export const postnewUser = (newPost) => {
  return (dispatch) => {
    dispatch({ type: CREATE_USER, payload: newPost });
  };
};

export const setCurrentUser = (data) => {
  return (dispatch) => {
    dispatch({ type: SET_CURRENT_USER, payload: data });
  };
};

export const deleteUser = (id) => {
  return (dispatch) => {
    dispatch({ type: DELETE_USER, payload: id });
  };
};


export const getUser = (id) => {
  return async (dispatch) => {
    const response = await axios.get("/api/users/Admin/all-users");
    if (response.status === 200) {
      dispatch({ type: GET_USER, payload: response.data });
    } else {
      toast(
        <Notification
          type="error"
          withIcon
          message="Probléme de modification du profil"
        />
      );
    }
  };
};

export const editUser = (data) => {
  return async (dispatch) => {
    const response = await axios.put("/api/users/update-profile", data);
    if (response.status === 200) {
      dispatch({ type: UPDATE_USER, payload: response.data });
      dispatch({ type: SET_CURRENT_USER, payload: response.data });
      toast(
        <Notification
          type="success"
          withIcon
          message="Profile modifier avec succés"
        />
      );
    } else {
      toast(
        <Notification
          type="error"
          withIcon
          message="Probléme de modification du profil"
        />
      );
    }
  };
};

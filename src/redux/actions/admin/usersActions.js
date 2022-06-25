import {
  GET_USER,
  CREATE_USER,
  DELETE_USER,
  UPDATE_USER,
  SET_CURRENT_USER,
} from "../../../actionType/actions";
import axios from "../../../utils/axios";

import { setLoading, unsetLoading } from "../loadingActions";

// import axios from "../../../utils/axios";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Notification from "../../../components/Notification/Notification";

export const getusers = () => async (dispatch) => {
  dispatch(setLoading());
  const response = await axios.get("/api/users/Admin/all-users");
  if (response.status === 200 || 201) {
    dispatch({
      type: GET_USER,
      payload: response.data,
    })
  } else {
    toast(
      <Notification
        type="error"
        withIcon
      />
    );
  }
  dispatch(unsetLoading());

};

export const adduser = (payload) => async (dispatch) => {
  dispatch(setLoading());
  const response = await axios.post("/api/users/Admin", payload);
  if (response.status === 200 || 201) {
    dispatch({
      type: CREATE_USER,
      payload: response.data,
    });
    toast(
      <Notification
        type="success"
        withIcon
        message={`${payload.title} a été ajouté`}
      />
    );
  } else {
    toast(
      <Notification
        type="error"
        withIcon
      />
    );
  }
  dispatch(unsetLoading());

}

export const deleteuser = (payload) => async (dispatch) => {
  dispatch(setLoading());
  const response = await axios.delete("/api/users/Admin/" + payload);
  if (response.status === 200 || 201) {
    dispatch({
      type: DELETE_USER,
      payload,
    });

    toast(
      <Notification
        type="success"
        withIcon
      />
    );
  } else {
    toast(
      <Notification
        type="error"
        withIcon
      />
    );
  }
  dispatch(unsetLoading());
};

export const modifyuser = (payload) => async (dispatch) => {
  dispatch(setLoading());
  const response = await axios.put("/api/posts/" + payload.id, payload);
  if (response.status === 200 || 201) {
    dispatch({
      type: UPDATE_USER,
      payload:response.data,
    });

    toast(
      <Notification
        type="success"
        withIcon
        message={`${payload.title} a été modifié`}
      />
    );
  } else {
    toast(
      <Notification
        type="error"
        withIcon
      />
    );
  }
  dispatch(unsetLoading());

};



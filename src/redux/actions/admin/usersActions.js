import {
  GET_USERS,
  DELETE_USER,
  ADD_USER,
  MODIFY_USER,
  INCREMENT_CANDIDATS,
} from "../../constants/admin/offresConstants";

import { setLoading, unsetLoading } from "../loadingActions";

// import axios from "../../../utils/axios";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Notification from "../../../components/Notification/Notification";

export const getUsers = () => async (dispatch) => {
  try {
    dispatch({
      type: GET_USERS,
    });
  } catch (error) {
    toast(
      <Notification
        type="error"
        withIcon
        message={error.response.data.message}
      />
    );
  }
};

export const addUser = (payload) => async (dispatch) => {
  dispatch(setLoading());

  try {
    dispatch({
      type: ADD_USER,
      payload: payload,
    });

    toast(
      <Notification
        type="success"
        withIcon
        message={`${payload.firstName} a été ajouté`}
      />
    );
  } catch (error) {
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

export const deleteUser = (payload) => async (dispatch) => {
  dispatch(setLoading());

  console.log()

  const { userID } = payload;

  try {
    dispatch({
      type: DELETE_USER,
      payload: userID,
    });

    toast(
      <Notification type="success" withIcon message="L'utilisateura été supprimé" />
    );
  } catch (error) {
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

export const modifyUser = (payload) => async (dispatch) => {
  dispatch(setLoading());

  

  console.log("payload", payload)

  // Transforming data to integers
  // state.experienceYears = parseInt(state.experienceYears);
  // state.salary = parseInt(state.salary);

  try {
    dispatch({
      type: MODIFY_USER,
      payload,
    });

    toast(
      <Notification
        type="success"
        withIcon
        message={`${payload.lasttName} a été modifié`}
      />
    );
  } catch (error) {
    console.log(error)
    toast(
      <Notification
        type="error"
        withIcon
        message={error}
      />
    );
  } finally {
    dispatch(unsetLoading());
  }
};

export const incrementCandidats = (payload) => async (dispatch) => {
  dispatch(setLoading());

  const { offerID } = payload;

  try {
    dispatch({
      type: INCREMENT_CANDIDATS,
      payload: offerID,
    });
  } catch (error) {
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

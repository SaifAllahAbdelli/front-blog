import {
  ADD_NOTIFICATION,
  GET_NOTIFICATION,
  MODIFY_NOTIFICATION,
} from "../../constants/admin/notificationConstants";

import { setLoading, unsetLoading } from "../loadingActions";

import axios from "../../../utils/axios";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Notification from "../../../components/Notification/Notification";

export const getNotification = () => async (dispatch) => {
  try {
    const { data } = await axios.get("/notifications");

    dispatch({
      type: GET_NOTIFICATION,
      payload: data,
    });
  } catch (error) {
    console.log("get notif", error);
    toast(
      <Notification
        type="error"
        withIcon
        message={error.response.data.message}
      />
    );
  }
};

export const addNotification = (payload) => async (dispatch) => {
  dispatch(setLoading());

  try {
    const { data } = await axios.post("/notifications", payload);

    dispatch({
      type: ADD_NOTIFICATION,
      payload: data,
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

export const modifyNotification = (payload) => async (dispatch) => {
  dispatch(setLoading());

  try {
    const response = await axios.patch(`/notifications/${payload}`, {
      seen: true,
    });

    dispatch({
      type: MODIFY_NOTIFICATION,
      payload,
    });

    return response;
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

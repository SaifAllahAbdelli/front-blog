import {
  ADD_APPOINTMENT,
  DELETE_APPOINTMENT,
  GET_APPOINTMENT,
  MODIFY_APPOINTMENT,
} from "../../constants/admin/appointmentsConstants";

import { setLoading, unsetLoading } from "../loadingActions";

import axios from "../../../utils/axios";
import formatDate from "../../../utils/formatDate";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Notification from "../../../components/Notification/Notification";

export const getAppointments = () => async (dispatch) => {
  try {
    const { data } = await axios.get("/appointments");

    // Converting dates to Date
    const transformedData = data.map(({ startDate, endDate, ...rest }) => {
      return {
        startDate: new Date(startDate),
        endDate: new Date(endDate),
        ...rest,
      };
    });

    dispatch({
      type: GET_APPOINTMENT,
      payload: transformedData,
    });
  } catch (error) {
    console.log("get appointments", error);

    toast(
      <Notification
        type="error"
        withIcon
        message={error.response.data.message}
      />
    );
  }
};

export const addAppointment = (payload) => async (dispatch) => {
  dispatch(setLoading());

  payload.location = "Salle de réunion";

  try {
    const { data } = await axios.post("/appointments", payload);

    dispatch({
      type: ADD_APPOINTMENT,
      payload: data,
    });

    return data;
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

export const modifyAppointment = (payload) => async (dispatch) => {
  dispatch(setLoading());

  const id = Object.keys(payload)[0];
  const values = Object.values(payload)[0];

  const { startDate } = values;

  try {
    const { data } = await axios.patch(`/appointments/${id}`, values);

    dispatch({
      type: MODIFY_APPOINTMENT,
      payload,
    });

    if (!!startDate) {
      const name = data.title.split("Entretien")[1];
      const [date, time] = formatDate(startDate);
      const dateStr = `${date} à ${time}`;

      const emailData = { name, email: data.userEmail, date: dateStr };

      await axios.post("/emails/modify-date", emailData);
    }

    toast(
      <Notification type="success" withIcon message="Rendez-vous modifié" />
    );

    return data;
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

export const deleteAppointment = (payload) => async (dispatch) => {
  dispatch(setLoading());

  try {
    const { data } = await axios.delete(`/appointments/${payload}`);

    const name = data.title.split("Entretien")[1];
    const [date, time] = formatDate(data.startDate);
    const dateStr = `${date} à ${time}`;

    const emailData = { name, email: data.userEmail, date: dateStr };

    await axios.post("/emails/cancel-date", emailData);

    dispatch({
      type: DELETE_APPOINTMENT,
      payload,
    });

    toast(
      <Notification type="success" withIcon message="Rendez-vous supprimé" />
    );

    return data;
  } catch (error) {
    console.log(error);
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

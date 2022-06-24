import {
  ADD_CANDITATURE,
  ADD_INTERVIEW_DATE,
  GET_CANDITATURE,
  MODIFY_CANDIDATURE,
} from "../../constants/admin/candidaturesConstants";

import { setLoading, unsetLoading } from "../loadingActions";

import axios from "../../../utils/axios";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Notification from "../../../components/Notification/Notification";
import { addAppointment } from "./appointmentsActions";
import { incrementCandidats } from "./offresActions";
import { addNotification } from "./notificationActions";
import formatDate from "../../../utils/formatDate";

export const getCandidatures = () => async (dispatch) => {
  const endpoints = ["/postuler/job", "/postuler/pfe"];

  try {
    const respone = await Promise.all(
      endpoints.map((endpoint) => axios.get(endpoint))
    );

    const data = respone.map(({ data }) => data).flat();

    dispatch({
      type: GET_CANDITATURE,
      payload: data,
    });
  } catch (error) {
    console.log("get candidatures", error);
    toast(
      <Notification
        type="error"
        withIcon
        message={error.response.data.message}
      />
    );
  }
};

export const addCandidature = (payload) => async (dispatch) => {
  dispatch(setLoading());

  const formData = new FormData();

  const { id, jobType, notification, userInfos, jobTitle } = payload;

  // Transforming data to integers
  userInfos.age = parseInt(userInfos.age);
  userInfos.experienceYears = parseInt(userInfos.experienceYears);

  const { file } = userInfos;

  formData.append("file", file);

  let respone;

  try {
    const { data } = await axios.post("/aws", formData);

    userInfos.file = data.Location;

    if (jobType === "PFE") {
      respone = await axios.post(`/postuler/pfe`, userInfos);
    } else if (jobType === "Job") {
      respone = await axios.post(`/postuler/job`, userInfos);
    }

    const { email, fullName } = respone.data;
    const dataForEmail = { email, name: fullName, job: jobTitle };

    await axios.post("/emails/submission", dataForEmail);

    dispatch({
      type: ADD_CANDITATURE,
      payload: respone.data,
    });

    dispatch(incrementCandidats({ offerID: id, jobType }));
    dispatch(addNotification(notification));

    toast(
      <Notification
        type="success"
        withIcon
        message="Candidature envoyé avec succes"
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

  return respone;
};

export const modifyCandidature = (payload) => async (dispatch) => {
  dispatch(setLoading());

  const { userID, jobType, status } = payload;

  let { interviewDate } = payload;

  let respone;

  if (status === "Rejeté") {
    interviewDate = null;
  }

  try {
    if (jobType === "PFE") {
      respone = await axios.patch(`/postuler/pfe/${userID}`, {
        status,
        interviewDate,
      });
    } else if (jobType === "Job") {
      respone = await axios.patch(`/postuler/job/${userID}`, {
        status,
        interviewDate,
      });
    }
    dispatch({
      type: MODIFY_CANDIDATURE,
      payload,
      interviewDate,
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

  return respone;
};

export const addInterviewDate = (payload) => async (dispatch) => {
  dispatch(setLoading());

  const { candidature, dateInterview, status, jobType } = payload;
  const { _id: id, email, fullName } = candidature;

  dateInterview.userEmail = email;

  // formating the interview Date

  const [date, time] = formatDate(dateInterview.startDate);

  const dateStr = `${date} à ${time}`;

  const dataForEmail = { email, name: fullName, date: dateStr };

  try {
    const appointment = await dispatch(addAppointment(dateInterview));

    dispatch(
      modifyCandidature({
        userID: id,
        status,
        jobType,
        interviewDate: appointment._id,
      })
    );

    dispatch({
      type: ADD_INTERVIEW_DATE,
      payload: { id, appointment },
    });

    if (status === "Approuvé") {
      await axios.post("/emails/confirmation", dataForEmail);

      toast(
        <Notification
          type="success"
          withIcon
          message="Date d'entretien affecté"
        />
      );
    } else if (status === "Rejeté") {
      await axios.post("/emails/rejection", dataForEmail);

      toast(
        <Notification type="success" withIcon message="Candidature rejeté" />
      );
    }
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

import axios from "../../../utils/axios";

import {
  GET_TOTAL_INTERNSHIPS_BY_DAY,
  GET_TOTAL_INTERNSHIPS_COUNT,
  GET_TOTAL_INTERNSHIPS_GENDER_BY_DAY,
  GET_TOTAL_JOBS_BY_DAY,
  GET_TOTAL_JOBS_COUNT,
  GET_TOTAL_JOBS_GENDER_BY_DAY,
  GET_TOTAL_OFFERS_BY_NAME,
} from "../../constants/stats/statsConstants";

import { setLoading, unsetLoading } from "../loadingActions";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Notification from "../../../components/Notification/Notification";

export const getToalOffersByName = () => async (dispatch) => {
  dispatch(setLoading());

  try {
    const { data } = await axios.get(`/stats/total-offers`);

    dispatch({
      type: GET_TOTAL_OFFERS_BY_NAME,
      payload: data,
    });
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

export const getTotalInternshipCandidatsByDay = (year) => async (dispatch) => {
  dispatch(setLoading());

  try {
    const { data } = await axios.get(`/stats/internships-by-year/${year}`);

    dispatch({
      type: GET_TOTAL_INTERNSHIPS_BY_DAY,
      payload: data,
    });
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

export const getTotalJobsCandidatsByDay = (year) => async (dispatch) => {
  dispatch(setLoading());

  try {
    const { data } = await axios.get(`/stats/jobs-by-year/${year}`);

    dispatch({
      type: GET_TOTAL_JOBS_BY_DAY,
      payload: data,
    });
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

export const getTotalInternshipCandidatsCount = () => async (dispatch) => {
  try {
    const { data } = await axios.get(`/stats/internships-total`);

    dispatch({
      type: GET_TOTAL_INTERNSHIPS_COUNT,
      payload: data,
    });
  } catch (error) {
    console.log(error.response.data.message);

    toast(
      <Notification
        type="error"
        withIcon
        message={error.response.data.message}
      />
    );
  }
};

export const getTotalJobsCandidatsCount = () => async (dispatch) => {
  try {
    const { data } = await axios.get(`/stats/jobs-total`);

    dispatch({
      type: GET_TOTAL_JOBS_COUNT,
      payload: data,
    });
  } catch (error) {
    console.log(error.response.data.message);

    toast(
      <Notification
        type="error"
        withIcon
        message={error.response.data.message}
      />
    );
  }
};

export const getTotalInternshipGenderCandidatsByDay =
  (year, gender) => async (dispatch) => {
    try {
      const { data } = await axios.get(`/stats/internships-gender/${year}`);

      dispatch({
        type: GET_TOTAL_INTERNSHIPS_GENDER_BY_DAY,
        payload: data,
      });
    } catch (error) {
      console.log(error.response.data.message);

      toast(
        <Notification
          type="error"
          withIcon
          message={error.response.data.message}
        />
      );
    }
  };

export const getTotalJobsGenderCandidatsByDay =
  (year, gender) => async (dispatch) => {
    try {
      const { data } = await axios.get(`/stats/jobs-gender/${year}`);

      dispatch({
        type: GET_TOTAL_JOBS_GENDER_BY_DAY,
        payload: data,
      });
    } catch (error) {
      console.log(error.response.data.message);

      toast(
        <Notification
          type="error"
          withIcon
          message={error.response.data.message}
        />
      );
    }
  };

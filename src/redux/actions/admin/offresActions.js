import {
  GET_OFFRES,
  DELETE_OFFRE,
  ADD_OFFRE,
  MODIFY_OFFER,
  INCREMENT_CANDIDATS,
} from "../../constants/admin/offresConstants";

import { setLoading, unsetLoading } from "../loadingActions";

// import axios from "../../../utils/axios";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Notification from "../../../components/Notification/Notification";

export const getOffers = () => async (dispatch) => {
  try {
    dispatch({
      type: GET_OFFRES,
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

export const addOffer = (payload) => async (dispatch) => {
  dispatch(setLoading());

  try {
    dispatch({
      type: ADD_OFFRE,
      payload: payload,
    });

    toast(
      <Notification
        type="success"
        withIcon
        message={`${payload.title} a été ajouté`}
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

export const deleteOffer = (payload) => async (dispatch) => {
  dispatch(setLoading());

  const { offerID } = payload;

  try {
    dispatch({
      type: DELETE_OFFRE,
      payload: offerID,
    });

    toast(
      <Notification type="success" withIcon message="La poste a été supprimé" />
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

export const modifyOffer = (payload) => async (dispatch) => {
  dispatch(setLoading());

  

  console.log("payload", payload)

  // Transforming data to integers
  // state.experienceYears = parseInt(state.experienceYears);
  // state.salary = parseInt(state.salary);

  try {
    dispatch({
      type: MODIFY_OFFER,
      payload,
    });

    toast(
      <Notification
        type="success"
        withIcon
        message={`${payload.title} a été modifié`}
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

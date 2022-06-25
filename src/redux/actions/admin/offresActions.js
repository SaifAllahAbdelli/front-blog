import {
  CREATE_POST,
  GET_POST,
  DELETE_POST,
  UPDATE_POST,
} from "../../../actionType/actions";
import axios from "../../../utils/axios";

import { setLoading, unsetLoading } from "../loadingActions";

// import axios from "../../../utils/axios";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Notification from "../../../components/Notification/Notification";

export const getOffers = () => async (dispatch) => {

  const response = await axios.get("/api/posts");
  if (response.status === 200 || 201) {
    dispatch({
      type: GET_POST,
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

export const addOffer = (payload) => async (dispatch) => {
  dispatch(setLoading());
  const response = await axios.post("/api/posts", payload);
  if (response.status === 200 || 201) {
    dispatch({
      type: CREATE_POST,
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

export const deleteOffer = (payload) => async (dispatch) => {
  dispatch(setLoading());
  const response = await axios.delete("/api/posts/" + payload);
  if (response.status === 200 || 201) {
    dispatch({
      type: DELETE_POST,
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

export const modifyOffer = (payload) => async (dispatch) => {
  dispatch(setLoading());
  const response = await axios.put("/api/posts/" + payload.id, payload);
  if (response.status === 200 || 201) {
    dispatch({
      type: UPDATE_POST,
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



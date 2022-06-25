import {
  GET_POST,
  CREATE_POST,
  DELETE_POST,
  UPDATE_POST,
  SET_CURRENT_POST,
} from "../actionType/actions";

export const postnewpost = (newPost) => {
  return (dispatch) => {
    dispatch({ type: CREATE_POST, payload: newPost });
  };
};

export const setCurrentPost = (data) => {
  return (dispatch) => {
    dispatch({ type: SET_CURRENT_POST, payload: data });
  };
};

export const deletePost = (id) => {
  return (dispatch) => {
    dispatch({ type: DELETE_POST, payload: id });
  };
};

export const editPost = (data) => {
  return (dispatch) => {
    dispatch({ type: UPDATE_POST, payload: data});
  };
};

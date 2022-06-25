import {
    GET_USER,
    CREATE_USER,
    DELETE_USER,
    UPDATE_USER,
    SET_CURRENT_USER,
  } from "../../actionType/actions";
  
  const INIT_STATE = {
    users: [],
    currentusers: null,
  };
  
  export default (state = INIT_STATE, action) => {
    switch (action.type) {
      case GET_USER: {
        return {
          ...state,
          users: action.payload,
        };
      }
      case CREATE_USER: {
        return {
          ...state,
          users: [action.payload, ...state.users],
        };
      }
      case DELETE_USER: {
        return {
          ...state,
          users: state.users.filter((el) => el.id !== action.payload),
        };
      }
      case UPDATE_USER: {
        return {
          ...state,
          users: [
            action.payload,
            ...state.users.filter((el) => el.id !== action.payload.id),
          ],
        };
      }
      case SET_CURRENT_USER: {
        return {
          ...state,
          currentusers: action.payload,
        };
      }
  
      default:
        return state;
    }
  };
  
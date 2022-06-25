import {
    GET_USER,
    CREATE_USER,
    DELETE_USER,
    UPDATE_USER,
    SET_CURRENT_USER,
  } from "../../actionType/actions";

  import { toast } from "react-toastify";
  import "react-toastify/dist/ReactToastify.css";
  
  const INIT_STATE = {
    users: [],
    currentuser: null,
  };
  
  export default (state = INIT_STATE, action) => {
    switch (action.type) {
      case GET_USER: {
        return {
          ...state,
          posts: action.payload,
        };
  
      }
      case CREATE_USER: {
        return {
          ...state,
          posts: [action.payload, ...state.posts],
        };
      }
      case DELETE_USER: {
        return {
          ...state,
          posts: state.posts.filter((el) => el.id !== action.payload),
        };
      }
      case UPDATE_USER: {
        return {
          ...state,
          posts: state.posts.map(
            el =>
              el.id === action.payload.id
                ? action.payload
                : el
          )
        };
      }
      case SET_CURRENT_USER: {
        return {
          ...state,
          currentposts: action.payload,
        };
      }
  
      default:
        return state;
    }
  };
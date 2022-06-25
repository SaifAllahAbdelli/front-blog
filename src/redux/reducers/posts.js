import {
  GET_POST,
  CREATE_POST,
  DELETE_POST,
  UPDATE_POST,
  SET_CURRENT_POST,
} from "../../actionType/actions";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const INIT_STATE = {
  posts: [],
  currentposts: null,
};

export default (state = INIT_STATE, action) => {
  switch (action.type) {
    case GET_POST: {
      return {
        ...state,
        posts: action.payload,
      };

    }
    case CREATE_POST: {
      return {
        ...state,
        posts: [action.payload, ...state.posts],
      };
    }
    case DELETE_POST: {
      return {
        ...state,
        posts: state.posts.filter((el) => el.id !== action.payload),
      };
    }
    case UPDATE_POST: {
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
    case SET_CURRENT_POST: {
      return {
        ...state,
        currentposts: action.payload,
      };
    }

    default:
      return state;
  }
};

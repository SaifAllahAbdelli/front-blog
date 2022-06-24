import {
  ADD_NOTIFICATION,
  GET_NOTIFICATION,
  MODIFY_NOTIFICATION,
} from "../../constants/admin/notificationConstants";

const INITIAL_STATE = [];

const notifications = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_NOTIFICATION:
      return [...action.payload];
    case ADD_NOTIFICATION:
      return [...state, action.payload];

    case MODIFY_NOTIFICATION:
      const index = state.findIndex(
        (notification) => notification._id === action.payload
      );
      state[index].seen = true;
      return [...state];

    default:
      return state;
  }
};

export default notifications;

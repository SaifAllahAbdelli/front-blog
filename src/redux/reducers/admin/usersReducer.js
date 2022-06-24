import {
  GET_USERS,
  DELETE_USER,
  ADD_USER,
  MODIFY_USER,
  INCREMENT_CANDIDATS,
} from "../../constants/admin/offresConstants";

import user from "../../db/users";

const INITIAL_STATE = [...user];

const users = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_USERS:
      return [...action.payload];
  

    case ADD_USER:
      return [...state, action.payload];

    case DELETE_USER:
      const newUsers = state.filter((user) => user.id !== action.payload[0]);

      return newUsers ;

    case MODIFY_USER:
      const index = state.findIndex((user) => user.id === action.payload.id);

      const newState = [...state];

      newState[index] = action.payload;

      return [...newState];

    case INCREMENT_CANDIDATS:
      const indexuser = state.findIndex(
        (offer) => offer.id === action.payload
      );
      state[indexuser].totalCandidats += 1;
      return [...state];

    default:
      return state;
  }
};

export default users;

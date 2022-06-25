import {
  ADD_OFFRE,
  DELETE_OFFRE,
  GET_OFFRES,
  INCREMENT_CANDIDATS,
  MODIFY_OFFER,
} from "../../constants/admin/offresConstants";

import posts from "../../db/posts";

const INITIAL_STATE = [];

const offres = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_OFFRES:
      return [...action.payload];

    case ADD_OFFRE:
      return [...state, action.payload];

    case DELETE_OFFRE:
      const newOffers = state.filter((offer) => offer.id !== action.payload[0]);

      return newOffers;

    case MODIFY_OFFER:
      const index = state.findIndex((offer) => offer.id === action.payload.id);

      const newState = [...state];

      newState[index] = action.payload;

      return [...newState];

    case INCREMENT_CANDIDATS:
      const indexOffre = state.findIndex(
        (offer) => offer.id === action.payload
      );
      state[indexOffre].totalCandidats += 1;
      return [...state];

    default:
      return state;
  }
};

export default offres;

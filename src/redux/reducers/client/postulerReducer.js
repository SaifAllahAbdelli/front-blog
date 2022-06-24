import {
  CHOOSE_OFFER,
  SUBMIT_USER_INFOS,
} from "../../constants/client/postulerConstants";

const INITIAL_STATE = {
  offre: [],
  userInfos: [],
  favoris: [],
};

const postuler = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CHOOSE_OFFER:
      return {
        ...state,
        offre: [action.payload],
      };

    case SUBMIT_USER_INFOS:
      return {
        ...state,
        userInfos: [action.payload],
      };

    default:
      return state;
  }
};

export default postuler;

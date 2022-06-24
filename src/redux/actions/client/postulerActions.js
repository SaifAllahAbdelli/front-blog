import {
  CHOOSE_OFFER,
  SUBMIT_USER_INFOS,
} from "../../constants/client/postulerConstants";

export const chooseOffer = (payload) => {
  return {
    type: CHOOSE_OFFER,
    payload,
  };
};

export const submitUserInfos = (payload) => {
  return {
    type: SUBMIT_USER_INFOS,
    payload,
  };
};

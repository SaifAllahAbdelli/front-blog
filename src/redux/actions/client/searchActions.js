import {
  CLEAR_SEARCH_VALUE,
  SET_SEARCH_VALUE,
} from "../../constants/client/searchConstants";

export const setSearchValue = (payload) => {
  return {
    type: SET_SEARCH_VALUE,
    payload,
  };
};

export const clearSearchValue = () => {
  return {
    type: CLEAR_SEARCH_VALUE,
  };
};

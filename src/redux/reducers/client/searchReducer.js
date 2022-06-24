import {
  CLEAR_SEARCH_VALUE,
  SET_SEARCH_VALUE,
} from "../../constants/client/searchConstants";

const INITIAL_STATE = {
  searchValue: "",
  filterValues: [""],
};

const search = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_SEARCH_VALUE:
      return {
        ...state,
        searchValue: action.payload,
      };

    case CLEAR_SEARCH_VALUE:
      return INITIAL_STATE;

    default:
      return {
        ...state,
        searchValue: "",
      };
  }
};

export default search;

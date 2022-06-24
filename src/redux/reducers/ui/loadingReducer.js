import { SET_LOADING, UNSET_LOADING } from "../../constants/loadingConstants";

const initialState = false;

export default function loading(state = initialState, action) {
  switch (action.type) {
    case SET_LOADING:
      state = true;
      return state;

    case UNSET_LOADING:
      state = false;
      return state;
    default:
      return state;
  }
}

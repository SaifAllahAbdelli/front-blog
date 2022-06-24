import { SET_LOADING, UNSET_LOADING } from "../constants/loadingConstants";

export const setLoading = () => ({ type: SET_LOADING });

export const unsetLoading = () => ({ type: UNSET_LOADING });

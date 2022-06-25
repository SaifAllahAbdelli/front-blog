import {
    LOGIN_SUCCESS,
    LOGIN_FAILURE,
    LOGOUT_SUCCESS,
} from "../../constants/authConstants";

const authenticated = localStorage.getItem("authenticated");
const token = localStorage.getItem("token");

const INITIAL_STATE = {
    token,
    isFetching: false,
    isAuthenticated: authenticated,
};

export default function auth(state = INITIAL_STATE, action) {
    switch (action.type) {
        case LOGIN_SUCCESS:
            return {
                ...state,
                isFetching: false,
                token: action.payload.token,
                isAuthenticated: true,
            };

        case LOGIN_FAILURE:
            return Object.assign({}, state, {
                isFetching: false,
                isAuthenticated: false,
                token: null,
                errorMessage: action.payload,
            });
        case LOGOUT_SUCCESS:
            return Object.assign({}, state, {
                isAuthenticated: false,
                token: null,
            });
        default:
            return state;
    }
}
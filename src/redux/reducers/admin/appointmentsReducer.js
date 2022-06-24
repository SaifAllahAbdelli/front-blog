import {
  ADD_APPOINTMENT,
  DELETE_APPOINTMENT,
  GET_APPOINTMENT,
  MODIFY_APPOINTMENT,
} from "../../constants/admin/appointmentsConstants";

const INITIAL_STATE = [];

const appointments = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_APPOINTMENT:
      return [...action.payload];

    case ADD_APPOINTMENT:
      return [...state, { ...action.payload }];

    case MODIFY_APPOINTMENT:
      const newState = state.map((appointment) =>
        action.payload[appointment.id]
          ? { ...appointment, ...action.payload[appointment.id] }
          : appointment
      );
      return newState;

    case DELETE_APPOINTMENT:
      const filtredState = state.filter(
        (appointment) => appointment.id !== action.payload
      );
      return filtredState;

    default:
      return state;
  }
};

export default appointments;

import {
  ADD_CANDITATURE,
  ADD_INTERVIEW_DATE,
  GET_CANDITATURE,
  MODIFY_CANDIDATURE,
} from "../../constants/admin/candidaturesConstants";

const INITIAL_STATE = [];

const candidatures = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_CANDITATURE:
      return [...action.payload];

    case ADD_CANDITATURE:
      return [...state, action.payload];

    case MODIFY_CANDIDATURE:
      const index = state.findIndex(
        (candidature) => candidature._id === action.payload.userID
      );
      state[index].status = action.payload.status;

      // In cas the interview date is null, than change it
      if (!action.interviewDate) {
        state[index].interviewDate = action.interviewDate;
      }

      return [...state];

    case ADD_INTERVIEW_DATE:
      const inteviewIndex = state.findIndex(
        (candidature) => candidature._id === action.payload.id
      );
      state[inteviewIndex].interviewDate = action.payload.appointment;
      return [...state];

    default:
      return state;
  }
};

export default candidatures;

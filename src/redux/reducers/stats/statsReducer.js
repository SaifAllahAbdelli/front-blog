import {
  GET_TOTAL_INTERNSHIPS_BY_DAY,
  GET_TOTAL_INTERNSHIPS_COUNT,
  GET_TOTAL_INTERNSHIPS_GENDER_BY_DAY,
  GET_TOTAL_JOBS_BY_DAY,
  GET_TOTAL_JOBS_COUNT,
  GET_TOTAL_JOBS_GENDER_BY_DAY,
  GET_TOTAL_OFFERS_BY_NAME,
} from "../../constants/stats/statsConstants";

const INITIAL_STATE = {
  totalOffersByName: [],
  totalInternshipCandidatsByMonth: [],
  totalJobsCandidatsByMonth: [],
  totalInternshipCandidatsCount: 0,
  totalJobsCandidatsCount: 0,
  totalInternshipGenderCandidatsByMonth: [],
  totalJobsGenderCandidatsByMonth: [],
};

const stats = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_TOTAL_OFFERS_BY_NAME:
      return {
        ...state,
        totalOffersByName: [...action.payload],
      };
    case GET_TOTAL_INTERNSHIPS_BY_DAY:
      return {
        ...state,
        totalInternshipCandidatsByMonth: [...action.payload],
      };

    case GET_TOTAL_JOBS_BY_DAY:
      return {
        ...state,
        totalJobsCandidatsByMonth: [...action.payload],
      };

    case GET_TOTAL_INTERNSHIPS_COUNT:
      return {
        ...state,
        totalInternshipCandidatsCount: action.payload,
      };

    case GET_TOTAL_JOBS_COUNT:
      return {
        ...state,
        totalJobsCandidatsCount: action.payload,
      };

    case GET_TOTAL_INTERNSHIPS_GENDER_BY_DAY:
      return {
        ...state,
        totalInternshipGenderCandidatsByMonth: [...action.payload],
      };

    case GET_TOTAL_JOBS_GENDER_BY_DAY:
      return {
        ...state,
        totalJobsGenderCandidatsByMonth: [...action.payload],
      };

    default:
      return state;
  }
};

export default stats;

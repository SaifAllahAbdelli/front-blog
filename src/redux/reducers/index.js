import { combineReducers } from "redux";

// Template's reducers
import navigation from "./ui/navigationReducer";
import register from "./auth/registerReducer";
import auth from "./auth/authReducer";

// Admin's reducers
import postes from "./admin/offresReducer";
import users from "./admin/usersReducer";
import candidatures from "./admin/candidaturesReducer";
import appointments from "./admin/appointmentsReducer";
import notifications from "./admin/notifictionsReducer";
import stats from "./stats/statsReducer";

// Client's reducers
import validateForm from "./client/postulerFormReducer";
import postuler from "./client/postulerReducer";
import search from "./client/searchReducer";

import loading from "./ui/loadingReducer";

export default combineReducers({
  register,
  auth,
  appointments,
  navigation,
  postes,
  validateForm,
  loading,
  candidatures,
  postuler,
  notifications,
  stats,
  search,
  users,
});

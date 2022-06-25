import { combineReducers } from "redux";

// Template's reducers
import navigation from "./ui/navigationReducer";
import register from "./auth/registerReducer";
import auth from "./auth/authReducer";

// Admin's reducers
import postes from "./admin/offresReducer";
import users from "./admin/usersReducer";
import notifications from "./admin/notifictionsReducer";
import updateUsers from "./updateUsers";
import posts from "./posts";


// Client's reducers

import loading from "./ui/loadingReducer";

export default combineReducers({
  register,
  auth,
  navigation,
  postes,
  posts,
  loading,
  updateUsers,
  notifications,
  users,
});

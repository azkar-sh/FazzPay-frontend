import { combineReducers } from "redux";

import user from "./user";
import history from "./history";
import auth from "./auth";

export default combineReducers({
  // Add reducers here
  user,
  history,
  auth,
});

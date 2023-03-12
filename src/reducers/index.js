import { combineReducers } from "redux";
import auth from "./auth";
import newAuth from "./newAuth";
import message from "./message";

export default combineReducers({
  auth,
  message,
  newAuth,
});

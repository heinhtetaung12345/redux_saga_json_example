import { combineReducers } from "redux";
import counterReducers from "./counterReducers";

const allReducers = combineReducers({
  value: counterReducers
});

export default allReducers;

import { DISPLAY_SUCCESSED } from "../action/actionTypes";

const counterReducers = (times = 0, action) => {
  switch (action.type) {
    case DISPLAY_SUCCESSED:
      return action.payload;
    default:
      return times;
  }
};

export default counterReducers;

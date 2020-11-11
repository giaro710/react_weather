import { combineReducers } from "redux";

const weatherReducer = (state = {}, action) => {
  if (action.type === "FETCH_WEATHER") {
    return action.payload;
  } else {
    return state;
  }
};

export default combineReducers({
  weather: weatherReducer,
});

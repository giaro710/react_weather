const weatherReducer = (state = {}, action) => {
  if (action.type === "FETCH_WEATHER") {
    return action.payload;
  }
};

export default combineReducer({
  weather: weatherReducer,
});

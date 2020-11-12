const API_KEY = process.env.REACT_APP_API_KEY;

export const fetchWeather = (city) => async (dispatch) => {
  fetch(
    `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`
  )
    .then((response) => response.json())
    .then((data) => dispatch({ type: "FETCH_WEATHER", payload: data }));
  // dispatch({ type: "FETCH_WEATHER", payload: response });
};

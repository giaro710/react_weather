export const prendiIlTempo = city => {
  return {
    type: 'FETCH_CITY'
    payload: city
  }
}

export const fetchWeather = city => {
  return async (city, dispatch) => {
    const response = await axios.get();

    dispatch({ type: 'FETCH_CITY', payload: response})
  }
}


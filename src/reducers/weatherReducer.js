const initialState = {
  current: {},
  error: false,
  loading: false
};

const weatherReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_CURRENT_WEATHER_LOADING":
      return { ...state, loading: true };
    case "SET_CURRENT_WEATHER_SUCCESS":
      return { ...state, current: action.payload, loading: false };
    case "SET_CURRENT_WEATHER_ERROR":
      return { ...state, loading: false, error: true };
    default:
      return state;
  }
};

export default weatherReducer;

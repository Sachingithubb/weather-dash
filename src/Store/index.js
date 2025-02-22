import { configureStore } from "@reduxjs/toolkit";
import weatherReducer from "./Slices/WeatherSlices";

const store = configureStore({
  reducer: {
    weather: weatherReducer,
  },
});

export default store;
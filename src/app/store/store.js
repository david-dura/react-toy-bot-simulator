import { configureStore } from "@reduxjs/toolkit";
import toyRobotReducer from "../reducers/toyRobotReducer";

const store = configureStore({
  reducer: { toyRobotSlice: toyRobotReducer },
});

export default store;

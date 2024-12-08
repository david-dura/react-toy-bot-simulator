import { configureStore } from "@reduxjs/toolkit";
import toyRobotReducer from "../reducers/toyRobotReducer";
import appActionsReducer from "../reducers/appActionsReducer";

const store = configureStore({
  reducer: { toyRobot: toyRobotReducer, appActions: appActionsReducer },
});

export default store;

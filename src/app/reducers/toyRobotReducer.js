import { createSlice } from "@reduxjs/toolkit";
import {
  ORIENTATION,
  ORIENTATION_DEGREE,
  COMMANDSTYPES,
} from "../config/constants";
import {
  calculateDegree,
  getDirectionFromDegree,
  getKeyByValue,
} from "../utils/utils";

const initialState = {
  isPlaced: false,
  coordinates: null,
  orientation: ORIENTATION.EAST,
  orientationDegree: ORIENTATION_DEGREE.EAST,
  commands: [],
};

const toyRobotSlice = createSlice({
  name: "toyRobot",
  initialState,
  reducers: {
    place(state, action) {
      /**try to place the robot on coord X,Y,F */
      const x = action.payload.x;

      const y = action.payload.y;

      const f = action.payload.f;

      state.isPlaced = true;
      state.coordinates = { x, y };
      state.orientation = ORIENTATION[f];
      state.orientationDegree = ORIENTATION_DEGREE[f];
      state.commands = [
        ...state.commands,
        `${COMMANDSTYPES.PLACE} ${x},${y},${f}`,
      ];
    },
    move(state) {
      if (state.isPlaced) {
        state.coordinates.x += state.orientation.x;
        state.coordinates.y += state.orientation.y;
        state.commands = [...state.commands, COMMANDSTYPES.MOVE];
      }
    },
    left(state) {
      if (state.isPlaced) {
        state.orientationDegree = calculateDegree(
          state.orientationDegree,
          false
        );
        state.orientation = getDirectionFromDegree(state.orientationDegree);
        state.commands = [...state.commands, COMMANDSTYPES.LEFT];
      }
    },
    right(state) {
      if (state.isPlaced) {
        state.orientationDegree = calculateDegree(
          state.orientationDegree,
          true
        );
        state.orientation = getDirectionFromDegree(state.orientationDegree);
        state.commands = [...state.commands, COMMANDSTYPES.RIGHT];
      }
    },
    report(state) {
      /**report the current location of the robot */
      if (state.isPlaced) {
        const orientationName = getKeyByValue(
          ORIENTATION_DEGREE,
          state.orientationDegree
        );
        state.commands = [
          ...state.commands,
          `OUTPUT: ${state.coordinates.x},${state.coordinates.y},${orientationName}`,
        ];
      }
    },
    reset(state) {
      return initialState;
    },
    skipCommand(state, action) {
      state.commands = [...state.commands, action.payload + "-- SKIPPED"];
    },
  },
});

export const toyRobotActions = toyRobotSlice.actions;
export default toyRobotSlice.reducer;

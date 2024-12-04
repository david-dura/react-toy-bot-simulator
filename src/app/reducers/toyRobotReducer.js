import { ORIENTATION, ORIENTATION_DEGREE } from "../utils/constants";

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
    },
    move(state) {
      /**try to move the robot forward in the current direction */
    },
    left(state) {
      /**rotate the robot +90 degrees */
    },
    right(state) {
      /**rotate the robot -90 degrees */
    },
    report(state) {
      /**report the current location of the robot */
    },
  },
});

export const toyRobotActions = toyRobotSlice.actions;
export default toyRobotSlice.reducer;

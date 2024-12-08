import store from "../store/store";
import { toyRobotActions } from "../reducers/toyRobotReducer";
import { appActions } from "../reducers/appActionsReducer";
import {
  COMMANDSTYPES,
  ERRORS,
  BOARD_SIZE,
  ORIENTATION,
} from "../config/constants";
import {
  checkNumberBetween,
  numbertBetween,
  splitCommand,
} from "../utils/utils";

const coordsAreInsideBoard = (x, y) => {
  return (
    numbertBetween(x, 0, BOARD_SIZE.x - 1, true) &&
    numbertBetween(y, 0, BOARD_SIZE.y - 1, true)
  );
};

export function reset() {
  store.dispatch(toyRobotActions.reset());
}

export function handleCommands(commandsArray) {
  if (commandsArray.length > 0)
    store.dispatch(appActions.setAppIsWorking(true));
  commandsArray.forEach((command, index) => {
    setTimeout(function () {
      const appIsWorking = store.getState().appActions.appIsWorking;
      if (!appIsWorking) return;
      const toyRobotState = store.getState().toyRobot;

      const splittedCommandArr = splitCommand(command);

      const commandError = getErrorMessage(
        splittedCommandArr,
        toyRobotState.isPlaced,
        toyRobotState.coordinates,
        toyRobotState.orientation,
        index
      );

      if (commandError) {
        store.dispatch(appActions.reportError(commandError));
        store.dispatch(toyRobotActions.skipCommand(command));
      } else {
        dispatchCommand(splittedCommandArr);
      }

      if (index == commandsArray.length - 1)
        store.dispatch(appActions.setAppIsWorking(false));
    }, index * 300);
  });
}

function dispatchCommand(splittedCommand) {
  switch (splittedCommand[0]) {
    case COMMANDSTYPES.PLACE:
      const x = parseInt(splittedCommand[1], 10);
      const y = parseInt(splittedCommand[2], 10);
      const f = splittedCommand[3];
      store.dispatch(toyRobotActions.place({ x, y, f }));
      break;
    case COMMANDSTYPES.LEFT:
      store.dispatch(toyRobotActions.left());
      break;
    case COMMANDSTYPES.RIGHT:
      store.dispatch(toyRobotActions.right());
      break;
    case COMMANDSTYPES.REPORT:
      store.dispatch(toyRobotActions.report());
      break;
    case COMMANDSTYPES.MOVE:
      store.dispatch(toyRobotActions.move());
      break;
  }
}

function getErrorMessage(
  splittedCommand,
  isPlaced,
  currentCoords,
  currentOrientation
) {
  let error = undefined;
  const commandLength = splittedCommand.length;

  switch (splittedCommand[0]) {
    case COMMANDSTYPES.PLACE:
      const x = parseInt(splittedCommand[1], 10);
      const y = parseInt(splittedCommand[2], 10);
      const f = splittedCommand[3];

      const coordsAreNumbers = Number.isInteger(x) && Number.isInteger(y);
      if (!checkNumberBetween(commandLength, 3, 4) || !coordsAreNumbers) {
        error = ERRORS.invalidFirstCommandFormat;
        break;
      }

      if (coordsAreNumbers && (x < 0 || y < 0)) {
        error = ERRORS.invalidCoordinate;
        break;
      }

      if (coordsAreNumbers && !coordsAreInsideBoard(x, y)) {
        error = ERRORS.invalidPlace;
        break;
      }

      if (!ORIENTATION[f]) {
        error = ERRORS.invalidOrientation;
      }
      break;
    case COMMANDSTYPES.LEFT:
    case COMMANDSTYPES.RIGHT:
    case COMMANDSTYPES.REPORT:
      if (!isPlaced) {
        error = ERRORS.invalidFirstCommand;
        break;
      }
      if (!checkNumberBetween(commandLength, 1, 1)) {
        error = ERRORS.invalidCommand;
      }
      break;
    case COMMANDSTYPES.MOVE:
      if (!isPlaced) {
        error = ERRORS.invalidFirstCommand;
        break;
      }

      if (!checkNumberBetween(commandLength, 1, 1)) {
        error = ERRORS.invalidCommand;
        break;
      }

      const nextCoords = {
        x: currentCoords.x + currentOrientation.x,
        y: currentCoords.y + currentOrientation.y,
      };
      if (!coordsAreInsideBoard(nextCoords.x, nextCoords.y)) {
        error = ERRORS.invalidMovement;
      }
      break;
    default:
      error = ERRORS.invalidCommand;
      break;
  }

  return error;
}

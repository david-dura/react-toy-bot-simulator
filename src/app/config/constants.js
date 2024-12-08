export const APP_DESCRIPTIONS = [
  "The application is a simulation of a toy robot moving on a square tabletop, of dimensions 5 units x 5 units.",
  "There are no other obstructions on the table surface.",
  "The robot is free to roam around the surface of the table, but must be prevented from falling to destruction.",
  "Any movement that would result in the robot falling from the table must be prevented, however further valid movement commands must still be allowed.",
];

export const COMMANDS = ["PLACE", "MOVE", "LEFT", "RIGHT", "REPORT"];

export const COMMANDSTYPES = {
  PLACE: "PLACE",
  MOVE: "MOVE",
  LEFT: "LEFT",
  RIGHT: "RIGHT",
  REPORT: "REPORT",
};

export const COMMANDS_DESCRIPTIONS = [
  "PLACE X,Y,F - will put the toy robot on the table in position X,Y and facing NORTH, SOUTH, EAST or WEST.",
  "MOVE - will move the toy robot one unit forward in the direction it is currently facing.",
  "LEFT | RIGHT - will rotate the robot 90 degrees in the specified direction without changing the position of the robot.",
  "REPORT - will announce the X,Y and F of the robot. This can be in any form, but standard output is sufficient.",
];

export const BOARD_SIZE = {
  x: 5,
  y: 5,
};

export const ORIENTATION = {
  NORTH: { x: 0, y: 1 },
  EAST: { x: 1, y: 0 },
  SOUTH: { x: 0, y: -1 },
  WEST: { x: -1, y: 0 },
};

export const ORIENTATION_DEGREE = {
  NORTH: 0,
  EAST: 90,
  SOUTH: 180,
  WEST: 270,
};

export const ERRORS = {
  invalidFirstCommand: `The robot should first be placed on the table. Place it with the following command 'PLACE X,Y,F'`,
  invalidFirstCommandFormat: `The correct format for the PLACE command is 'PLACE X,Y,F'.`,
  invalidCommand: `Invalid command. The available commands are ${COMMANDS.join(
    " | "
  )}.`,
  invalidPlace: `Cannot place the robot outside the board`,
  invalidCoordinate: `Coordinates must be positive values.`,
  invalidOrientation: `Invalid orientation. Available directions should be ${Object.keys(
    ORIENTATION
  ).join(" | ")}.`,
  invalidMovement: `Cannot move forward, the board ends here in this direction.`,
};

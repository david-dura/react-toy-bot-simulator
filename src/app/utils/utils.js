import {
  BOARD_SIZE,
  ORIENTATION,
  ORIENTATION_DEGREE,
} from "../config/constants";

export const checkNumberBetween = (
  currentCommandLength,
  minCommandLength,
  maxCommandLength
) => {
  return (
    minCommandLength <= currentCommandLength &&
    currentCommandLength <= maxCommandLength
  );
};

export const splitCommand = (command) =>
  command
    .replace(/[\s,]+/g, "\n")
    .trim()
    .split("\n");

export const getArrayFromKeysFromInt = (intSize) =>
  Array.from(Array(intSize).keys(), (i) => i);

export function getKeyByValue(object, value) {
  return Object.keys(object).find((key) => object[key] === value);
}

export function numbertBetween(num, min, max, inclusive) {
  return inclusive ? num >= min && num <= max : num > min && num < max;
}

export function calculateDegree(currentDegree, isIncrement = false) {
  const degrees = Object.values(ORIENTATION_DEGREE);
  let currentIndex = degrees.indexOf(currentDegree);

  if (isIncrement) {
    console.log((currentIndex + 1) % degrees.length);
    currentIndex = (currentIndex + 1) % degrees.length;
  } else {
    currentIndex = (currentIndex - 1 + degrees.length) % degrees.length;
  }

  return degrees[currentIndex];
}

export function getDirectionFromDegree(degree) {
  const orientationKey = Object.entries(ORIENTATION_DEGREE).find(
    ([key, val]) => val === degree
  );
  return orientationKey ? ORIENTATION[orientationKey[0]] : null;
}

export function getBoardWidthDistribution(dimension) {
  return `${(1 / BOARD_SIZE[dimension]) * 100}%`;
}

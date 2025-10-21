import { ALIVE_CELL } from "@config/constants.ts";

export const getNeighbourCount = (
  index: number,
  gameStateArray: Array<string>,
) => {
  let aliveCellCount: number = 0;

  // -5, +5, -1, +1
  // todo: better way to ref this, inc. handle out-of-bounds errors
  if (gameStateArray[index - 1] === ALIVE_CELL) {
    aliveCellCount++;
  }
  if (gameStateArray[index - 5] === ALIVE_CELL) {
    aliveCellCount++;
  }
  if (gameStateArray[index + 1] === ALIVE_CELL) {
    aliveCellCount++;
  }
  if (gameStateArray[index + 5] === ALIVE_CELL) {
    aliveCellCount++;
  }

  return aliveCellCount;
};

import { ALIVE_CELL, GRID_SIZE } from "@config/constants.ts";

// todo: write unit tests for this
export const getPotentialNeighbours = (index: number): Array<number> => {
  const potentialNeighbours: Array<number> = [-6, -5, -4, -1, 1, 4, 5, 6];
  const neighboursWithinBoundary: Array<number> = [];

  potentialNeighbours.forEach((pos: number) => {
    const isInBounds: boolean =
      index + pos >= 0 && index + pos <= GRID_SIZE * GRID_SIZE;
    if (isInBounds) {
      neighboursWithinBoundary.push(pos);
    }
  });

  return neighboursWithinBoundary;
};

// todo: write unit tests for this
export const getNeighbourCount = (
  index: number,
  gameStateArray: Array<string>,
) => {
  let aliveCellCount: number = 0;

  const neighboursToCheck = getPotentialNeighbours(index);

  neighboursToCheck.forEach((pos: number) => {
    if (gameStateArray[index + pos] === ALIVE_CELL) {
      aliveCellCount++;
    }
  });

  return aliveCellCount;
};

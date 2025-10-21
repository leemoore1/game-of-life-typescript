import { ALIVE_CELL, DEAD_CELL } from "@config/constants.ts";
import type { Cell } from "types/cell.ts";
import { getNeighbourCount } from "./cells.ts";
import { convertStateToArray } from "./state.ts";

/**
 * Rule 1: Underpopulation
 * Given a game of life
 * When a live cell has fewer than two neighbours
 * Then this cell dies
 *
 * @param gameState
 * @returns
 */
export const runUnderpopulationRule = (gameState: string) => {
  // Convert to array.
  const initialState: Array<string> = convertStateToArray(gameState);
  const modifiedState: Array<string> = Array.from(initialState);
  const aliveCells: Array<Cell> = [];

  initialState.forEach((value: string, index: number) => {
    if (value === ALIVE_CELL) {
      aliveCells.push({ index, value });
    }
  });

  aliveCells.forEach((cell: Cell) => {
    const { index } = cell;
    const neighbourCount: number = getNeighbourCount(index, initialState);
    if (neighbourCount < 2) {
      // Cell dies, update state.
      modifiedState[index] = DEAD_CELL;
    }
  });

  return modifiedState;
};

import { ALIVE_CELL, DEAD_CELL, NEW_LINE } from "@config/constants.ts";
import { stringifyState } from "@utils/stringifyState.ts";
import type { Cell } from "./types/cell.ts";

function evolveState(gameState: string) {
  // Run first rule.
  const rule1Result = runUnderpopulationRule(gameState);
  const state = stringifyState(rule1Result);

  return state;
}

const removeNewLineChars = (gameStateArray: Array<string>) => {
  const filtered = gameStateArray.filter((a) => {
    return a !== NEW_LINE;
  });
  return filtered;
};

const convertStateToArray = (gameState: string) => {
  const gameStateDirtyArr: Array<string> = Array.from(gameState);
  return removeNewLineChars(gameStateDirtyArr);
};

/**
 * Rule 1: Underpopulation
 * Given a game of life
 * When a live cell has fewer than two neighbours
 * Then this cell dies
 *
 * @param gameState
 * @returns
 */
const runUnderpopulationRule = (gameState: string) => {
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
    const neighbourCount = getAdjLiveCellCount(index, initialState);
    if (neighbourCount < 2) {
      // Cell dies, update state.
      modifiedState[index] = DEAD_CELL;
    }
  });

  return modifiedState;
};

const getAdjLiveCellCount = (index: number, gameStateArray: Array<string>) => {
  let aliveCellCount = 0;

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

export const createGame = (initialState: string) => {
  let gameState = initialState;
  const game = {
    render: () => gameState,
    evolve: () => {
      gameState = evolveState(gameState);
      return game;
    },
  };
  return game;
};

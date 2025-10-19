const ALIVE_CELL: string = "*";
const DEAD_CELL: string = "0";
const NEW_LINE: string = "\n";
const GRID_SIZE: number = 5;

/**
 * Re-assembles the game state as a multi-line string.
 *
 * @param gameState A flat array of strings.
 * @returns A multi-line string representation of the game state.
 */
const normaliseState = (gameState: Array<string>): string => {
  let gameStateString: string = "";
  for (let i = 0; i < gameState.length; i += GRID_SIZE) {
    const slice = gameState.slice(i, i + GRID_SIZE);
    let sliceStr: string;
    if (i < GRID_SIZE * GRID_SIZE - GRID_SIZE) {
      sliceStr = slice.join("").concat("\n");
    } else {
      sliceStr = slice.join("");
    }
    gameStateString += sliceStr;
  }

  return gameStateString;
};

function evolveState(gameState: string) {
  const rule1Result = runUnderpopulationRule(gameState);

  // todo: return as multi-line string, as per original gamestate.
  console.log(rule1Result);
  const state = normaliseState(rule1Result);
  console.log("State (normalised): ", state);

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

type Cell = {
  index: number;
  value: string;
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
  // console.log(state);

  const aliveCells: Array<Cell> = [];

  initialState.forEach((value: string, index: number) => {
    if (value === ALIVE_CELL) {
      aliveCells.push({ index, value });
    }
  });

  // console.log("Alive cells: ", aliveCells);

  // todo: run first rule over each of aliveCells
  aliveCells.forEach((cell: Cell) => {
    const { index } = cell;
    const neighbourCount = getAdjLiveCellCount(index, initialState);
    if (neighbourCount < 2) {
      // cell dies, update state
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

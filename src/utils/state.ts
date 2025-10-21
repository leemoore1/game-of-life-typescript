import { GRID_SIZE, NEW_LINE } from "@config/constants.ts";

/**
 * Re-assembles the game state as a multi-line string.
 *
 * @param gameState A flat array of strings.
 * @returns A multi-line string representation of the game state.
 */
export const stringifyState = (gameState: Array<string>): string => {
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

// export const printGrid = <T>(input: string, gridSize: number = GRID_SIZE) => {
//   console.info(input);
//   // const state: Array<string> = convertStateToArray(input);
//   // for (let i = 0; i < state.length; i += gridSize) {
//   //   console.info(state.slice(i, i + gridSize));
//   // }
// };

const removeNewLineChars = (gameStateArray: Array<string>) => {
  const filtered: Array<string> = gameStateArray.filter((a: string) => {
    return a !== NEW_LINE;
  });
  return filtered;
};

export const convertStateToArray = (gameState: string) => {
  const gameStateAsArray: Array<string> = Array.from(gameState);
  return removeNewLineChars(gameStateAsArray);
};

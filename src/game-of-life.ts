const ALIVE_CELL = "*";
const DEAD_CELL = "0";
const NEW_LINE = "\n";

function evolveState(gameState: string) {
  const newState = checkUnderpopulation(gameState);
  return gameState;

  // evaluate state
}

// Rule 1: Underpopulation
// Given a game of life
// When a live cell has fewer than two neighbours
// Then this cell dies

const checkUnderpopulation = (gameState: string) => {
  // split into array

  const gameStateArr = Array.from(gameState);
  const filtered = stripNewline(gameStateArr);
  // console.log(filtered);

  // first * cell
  const firstCell = filtered.find((cell: string) => {
    return cell === ALIVE_CELL;
  });

  if (firstCell) {
    const firstCellIndex = filtered.indexOf(firstCell);
    console.log(firstCellIndex);
  }
  // const neighbours = getNeighbourCount()
};

const stripNewline = (input: Array<string>) => {
  const withoutNewline = input.filter((a) => {
    return a !== NEW_LINE;
  });
  return withoutNewline;
};

const getNeighbourCount = (
  indexOfCell: number,
  gameStateAsFlatArray: Array<string>,
) => {
  let deadCellNeighbourCount = 0;

  // -5, +5, -1, +1
  if (gameStateAsFlatArray[indexOfCell - 1] === "0") {
    deadCellNeighbourCount++;
  }
  if (gameStateAsFlatArray[indexOfCell - 5] === "0") {
    deadCellNeighbourCount++;
  }
  if (gameStateAsFlatArray[indexOfCell + 1] === "0") {
    deadCellNeighbourCount++;
  }
  if (gameStateAsFlatArray[indexOfCell + 5] === "0") {
    deadCellNeighbourCount++;
  }

  console.log(deadCellNeighbourCount);

  // which are zeros?

  // count of zeros?

  // if count < 2 THEN cell dies
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

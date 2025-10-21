export type GameOfLife = (initialState: string) => {
  render: () => string;
  evolve: () => Game;
};

export type Game = {
  render: () => string;
  evolve: () => Game;
};

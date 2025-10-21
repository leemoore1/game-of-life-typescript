import { runUnderpopulationRule } from "@utils/rules.ts";
import { stringifyState } from "@utils/state.ts";
import type { Game, GameOfLife } from "types/game.ts";

function evolveState(gameState: string) {
  // Run first rule.
  const rule1Result: Array<string> = runUnderpopulationRule(gameState);
  const state: string = stringifyState(rule1Result);

  return state;
}

export const createGame: GameOfLife = (initialState: string) => {
  let gameState: string = initialState;
  const game: Game = {
    render: () => gameState,
    evolve: () => {
      gameState = evolveState(gameState);
      return game;
    },
  };
  return game;
};

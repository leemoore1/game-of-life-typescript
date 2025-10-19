import { describe, expect, test } from "@jest/globals";

// import assert from "node:assert";
// import { describe, test } from "node:test";
import { createGame } from "./game-of-life.ts";

describe("Game Of Life", () => {
  describe("Rule #1: Underpopulation", () => {
    test("Two should cells should die", () => {
      const game = createGame(
        `00000
00000
0***0
00000
00000`,
      );

      const initialResult = game.render();

      // console.log(initialResult);
      game.evolve();

      const nextStage = game.render();

      expect(nextStage).toStrictEqual(
        `00000
00000
00*00
00000
00000`,
      );
    });
  });
});

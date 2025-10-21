import { describe, expect, test } from "@jest/globals";
import type { Game } from "types/game.ts";
import type { RuleTest } from "types/tests.ts";
import { createGame } from "../game-of-life.ts";
import { ruleOneTests } from "./samples.ts";

let game: Game | undefined;

describe("Game Of Life", () => {
  describe("Rule #1: Underpopulation", () => {
    // // DEBUG: run solo test.
    // const sample = ruleOneSamples.find(
    //   (rule: RuleTest) => rule.name === "three_cell_L_rule1_corner_survives",
    // );

    // if (sample) {
    //   console.info(sample.input);
    //   console.info(sample.output);
    //   test(sample.name, () => {
    //     game = createGame(sample.input);
    //     game.render();
    //     game.evolve();

    //     const nextStage: string = game.render();
    //     expect(nextStage).toStrictEqual(sample.output);
    //   });
    // }

    ruleOneTests.forEach((sample: RuleTest) => {
      test(sample.name, () => {
        game = createGame(sample.input);
        game.render();
        game.evolve();

        const nextStage: string = game.render();
        expect(nextStage).toStrictEqual(sample.output);
      });
    });
  });
});

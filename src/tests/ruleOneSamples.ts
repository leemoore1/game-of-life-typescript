import type { RuleTest } from "types/tests.ts";

export const ruleOneTests: Array<RuleTest> = [
  {
    name: "three_cell_line_start_ends_die",
    input: "***00\n00000\n00000\n00000\n00000",
    output: "0*000\n00000\n00000\n00000\n00000",
  },
  {
    name: "three_cell_line_ends_die",
    input: "00000\n00000\n0***0\n00000\n00000",
    output: "00000\n00000\n00*00\n00000\n00000",
  },
  {
    name: "single_isolated_cell_dies",
    input: "00000\n00000\n00000\n000*0\n00000",
    output: "00000\n00000\n00000\n00000\n00000",
  },
  {
    name: "two_adjacent_cells_underpop_die",
    input: "00000\n00000\n00000\n000**\n00000",
    output: "00000\n00000\n00000\n00000\n00000",
  },
  {
    name: "horizontal_triplet_rule1_middle_survives",
    input: "00000\n00000\n00***\n00000\n00000",
    output: "00000\n00000\n000*0\n00000\n00000",
  },
  {
    name: "vertical_triplet_rule1_middle_survives",
    input: "00000\n000*0\n000*0\n000*0\n00000",
    output: "00000\n00000\n000*0\n00000\n00000",
  },
  {
    name: "L_triplet_rule1_all_survive_right",
    input: "00000\n00000\n00000\n000**\n000*0",
    output: "00000\n00000\n00000\n000**\n000*0",
  },
  {
    name: "L_triplet_rule1_all_survive_down",
    input: "00000\n00000\n00000\n000**\n0000*",
    output: "00000\n00000\n00000\n000**\n0000*",
  },
  {
    name: "block_2x2_rule1_all_survive",
    input: "00000\n00000\n000**\n000**\n00000",
    output: "00000\n00000\n000**\n000**\n00000",
  },
  {
    name: "cross_rule1_left_arm_shrinks",
    input: "00000\n000*0\n0***0\n000*0\n00000",
    output: "00000\n000*0\n00**0\n000*0\n00000",
  },
  {
    name: "corner_triplet_rule1_all_survive",
    input: "**000\n*0000\n00000\n00000\n00000",
    output: "**000\n*0000\n00000\n00000\n00000",
  },
  {
    name: "diagonal_triplet_rule1_middle_survives",
    input: "*0000\n0*000\n00*00\n00000\n00000",
    output: "00000\n0*000\n00000\n00000\n00000",
  },
];

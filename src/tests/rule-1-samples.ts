import type { RuleTest } from "types/tests.ts";

export const ruleOneSamples: Array<RuleTest> = [
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
    name: "two_adjacent_cells_both_die",
    input: "00000\n00000\n00000\n000**\n00000",
    output: "00000\n00000\n00000\n00000\n00000",
  },
  {
    name: "horizontal_triplet_ends_die_middle_survives",
    input: "00000\n00000\n00***\n00000\n00000",
    output: "00000\n00000\n000*0\n00000\n00000",
  },
  {
    name: "vertical_triplet_ends_die_middle_survives",
    input: "00000\n000*0\n000*0\n000*0\n00000",
    output: "00000\n00000\n000*0\n00000\n00000",
  },
  {
    name: "two_cell_L_both_die",
    input: "00000\n00000\n00000\n000**\n000*0",
    output: "00000\n00000\n00000\n000**\n000*0",
  },
  {
    name: "three_cell_L_corner_survives_ends_die",
    input: "00000\n00000\n00000\n000**\n0000*",
    output: "00000\n00000\n00000\n000*0\n00000",
  },
  {
    name: "block_2x2_all_survive",
    input: "00000\n00000\n000**\n000**\n00000",
    output: "00000\n00000\n000**\n000**\n00000",
  },
  {
    name: "plus_centre_survives_arms_die",
    input: "00000\n000*0\n0***0\n000*0\n00000",
    output: "00000\n00000\n000*0\n00000\n00000",
  },
  {
    name: "corner_cluster_three_all_survive",
    input: "**000\n*0000\n00000\n00000\n00000",
    output: "**000\n*0000\n00000\n00000\n00000",
  },
  {
    name: "sparse_diagonal_three_middle_survives",
    input: "*0000\n0*000\n00*00\n00000\n00000",
    output: "00000\n0*000\n00000\n00000\n00000",
  },
];

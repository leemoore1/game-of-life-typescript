# The Game of Life

## Task

The Game of Life is set in a two-dimensional grid of square cells, each of which is in one of two possible states,
alive or dead. Every cell interacts with its eight neighbours, which are the cells that are horizontally, vertically,
or diagonally adjacent.

From an initial grid the game "evolves" one iteration at a time. An iteration applies rules to each cell to determine its next state.

Your task is to produce a library module that implements these rules, inputting and outputting to a standard string format.

You are not expected to complete the task in the time available, so please try to write code that another developer could continue working on after you.

## The Module

Your task is to complete the implementation of a module that simulates the Game of Life.

The expected API for this module is as follows:

An exported function `createGame`, that given a string returns a `Game` object with the following methods:

`render` - Returns the current game state as a string matching the input format
`evolve` - evolves the state of the game object by one iteration

The input and output format is a 5x5 table of `*`s and `0`s, if a cell is alive it should be rendered as a `*` and if it is dead it should be a `0`.

For example:

```none
00000
00*00
0***0
00*00
00000
```

The grid is expected to wrap around, so a cell on the top row is considered a neighbour to a corresponding cell on the bottom row.

A starting point for the module can be found in `src/game-of-life.js`.

We have included some integration tests for the module in `src/game-of-life.test.js`, use `npm test` or `npm test:watch` to run them.

You may write as many additional tests as you would like.

## Rules of the Game

The rules of Game of Life are as follows:

### Rule 1: Underpopulation

- Given a game of life
- When a live cell has fewer than two neighbours
- Then this cell dies

### Rule 2: Overcrowding

- Given a game of life
- When a live cell has more than three neighbours
- Then this cell dies

### Rule 3: Survival

- Given a game of life
- When a live cell has two or three neighbours
- Then this cell stays alive

### Rule 4: Creation of Life

- Given a game of life
- When a dead cell has exactly three neighbours
- Then this cell becomes alive

_When applied these scenarios result in the following:_

### Rule 5: Grid with no live cells

- Given a game of life with the initial state consisting of all dead cells
- When the game evolves one turn
- Then the next state is also all dead cells

const games = [
  [
    ["5", "3", "", "", "7", "", "", "", ""],
    ["6", "", "", "1", "9", "5", "", "", ""],
    ["", "9", "8", "", "", "", "", "6", ""],
    ["8", "", "", "", "6", "", "", "", "3"],
    ["4", "", "", "8", "", "3", "", "", "1"],
    ["7", "", "", "", "2", "", "", "", "6"],
    ["", "6", "", "", "", "", "2", "8", ""],
    ["", "", "", "4", "1", "9", "", "", "5"],
    ["", "", "", "", "8", "", "", "7", "9"]
  ],
  [
    ["3", "", "", "8", "", "1", "", "", "2"],
    ["2", "", "1", "", "3", "", "6", "", ""],
    ["", "", "", "8", "", "4", "", "", "4"],
    ["8", "", "9", "", "", "", "1", "", "6"],
    ["", "6", "", "", "", "", "", "5", ""],
    ["7", "", "2", "", "", "", "4", "", "9"],
    ["", "", "", "5", "", "9", "", "", ""],
    ["9", "", "4", "", "8", "", "7", "", "5"],
    ["6", "", "", "1", "", "7", "", "", "3"]
  ]
];

export function getRandGame() {
  const id = getRandomIntInclusive(0, games.length - 1);
  const game = games[id];

  return game;
}

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

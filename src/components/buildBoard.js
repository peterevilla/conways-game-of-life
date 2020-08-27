export const buildBoard = (height, width, random = false) => {
    let board = {};
    for (let i = 0; i < height; i++) {
      let row = [];
      for (var j = 0; j < width; j++) {
        if (random) {
          row.push(Math.round(Math.random()));
        } else {
          row.push(0);
        }
      }
      board[i] = row;
    }
    return board;
  };
  
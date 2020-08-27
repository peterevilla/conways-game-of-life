
export const PLAY = "PLAY";
export const nextGen = (currentBoard) => {

    let boardHeight = Object.keys(currentBoard).length;
    let boardWidth = currentBoard[0].length;
  
    const liveNeighbours = (x, y) => {
      const topRow = x - 1 < 0 ? boardHeight - 1 : x - 1;
      const bottomRow = x + 1 === boardHeight ? 0 : x + 1;
      const leftColumn = y - 1 < 0 ? boardWidth - 1 : y - 1;
      const rightColumn = y + 1 === boardHeight ? 0 : y + 1;
  
      let neighbours =
        currentBoard[topRow][leftColumn] +
        currentBoard[topRow][y] +
        currentBoard[topRow][rightColumn] +
        currentBoard[x][leftColumn] +
        currentBoard[x][rightColumn] +
        currentBoard[bottomRow][leftColumn] +
        currentBoard[bottomRow][y] +
        currentBoard[bottomRow][rightColumn];
      return neighbours;
    };
  
    let nextBoard = {};
    for (let i = 0; i < boardHeight; i++) {
      let row = [];
      for (let j = 0; j < boardWidth; j++) {
        let isActive = currentBoard[i][j];
        let neighbours = liveNeighbours(i, j);
        if (isActive === 1) {
          if (neighbours < 2) {
            row.push(0);
          } else if (neighbours > 3) {
            row.push(0);
          } else {
            row.push(1);
          }
        }
        if (isActive === 0) {
          if (neighbours === 3) {
            row.push(1);
          } else {
            row.push(0);
          }
        }
      }
      nextBoard[i] = row;
    }

            return {
                type: PLAY,
                payload: nextBoard,
            }
}





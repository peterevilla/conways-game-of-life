
export const PLAY = "PLAY";
export const nextGen = (currentBoard) => {
    let mirrorBoard = {...currentBoard}
    let boardHeight = Object.keys(currentBoard).length;
    let boardWidth = currentBoard[0].length;
    for (var x= 1; x< boardHeight; x++) { //iterate through rows
        for (var y = 1; y< boardWidth; y++) { //iterate throught columns
    
            let sumOfCells = 0
            sumOfCells += currentBoard[x – 1][y – 1]; //top left
            sumOfCells += currentBoard[x – 1][y]; //top center
            sumOfCells += currentBoard[x – 1][y + 1]; //top right
            sumOfCells += currentBoard[x][y – 1]; //middle left
            sumOfCells += currentBoard[x][y + 1]; //middle right
            sumOfCells += currentBoard[x+ 1][y – 1]; //bottom left
            sumOfCells += currentBoard[x+ 1][y]; //bottom center
            sumOfCells += currentBoard[x+ 1][y + 1]; //bottom right
    
    

    
    
        }
        }
}





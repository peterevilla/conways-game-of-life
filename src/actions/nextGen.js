
export const PLAY = "PLAY";
export const nextGen = (currentBoard) => {
    let mirrorBoard = {...currentBoard}
    console.log(mirrorBoard)
    let boardHeight = Object.keys(currentBoard).length;
    let boardWidth = currentBoard[0].length;
    for (var j= 1; j < boardHeight - 1; j++) { //iterate through rows
        for (var k = 1; k < boardWidth - 1; k++) { //iterate throught columns
    
            let sumOfCells = 0
            sumOfCells += currentBoard[j - 1][k - 1]; //top left
            sumOfCells += currentBoard[j - 1][k]; //top center
            sumOfCells += currentBoard[j - 1][k + 1]; //top right
            sumOfCells += currentBoard[j][k - 1]; //middle left
            sumOfCells += currentBoard[j][k + 1]; //middle right
            sumOfCells += currentBoard[j + 1][k - 1]; //bottom left
            sumOfCells += currentBoard[j + 1][k]; //bottom center
            sumOfCells += currentBoard[j + 1][k + 1]; //bottom right
    
            if (mirrorBoard[j][k] === 0) {

                switch (sumOfCells) {
                
                    case 3:
                        mirrorBoard[j][k] = 1  // Cell become alive
                        break;
                    default:
                        mirrorBoard[j][k] = 0 // Cell remains dead
                }
            } else if (mirrorBoard[j][k] === 1) {
                
                switch (sumOfCells) {

                    case 0:
                    case 1:
                        mirrorBoard[j][k] = 0 //Die , underpolpulation 
                        break;
                    case 2:
                    case 3:
                        mirrorBoard[j][k] = 1 // Keep Living
                        break;
                    case 4:
                    case 5:
                    case 6:
                    case 7:
                    case 8:
                        mirrorBoard[j][k] = 0 // Overpopulation
                        break;
                    default:
                        mirrorBoard[j][k] = 0
                }

            }

    
    
        }
        }
        for (var i = 0; i < boardHeight -1; i++) { //iterate through rows
            for (var l = 0; l < boardWidth -1; l++) { //iterate through columns
            currentBoard[i][l] = mirrorBoard[i][l];
            }
            }

            return {
                type: PLAY,
                payload: currentBoard,
            }
}





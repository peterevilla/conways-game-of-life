import React, { useState, useEffect } from 'react'
import Cell from './Cell'
import {buildBoard} from './buildBoard'

function Grid() {

const [matrix, setMatrix] = useState(buildBoard(40, 40))

const onToggle = (coord) => {
    let cell = matrix
    cell[coord.x][coord.y] = 1
    setMatrix(cell)
    console.log(matrix)
}

useEffect(() => {

},[matrix])

    return (
        <div className="grid">
        
             
            {Object.entries(matrix).map(([key, value]) => (
                < div key={key}>
                {value.map((cell, j) => (
                    <Cell key={`${key}-${j}`} cell={cell} coordinades={{ x: parseInt(key), y: j}} onToggle={onToggle} />
                ))}
                </div>
            ))
            }
         
        </div>
    )
}

export default Grid;
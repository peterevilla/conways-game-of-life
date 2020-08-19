import React, { useState } from 'react'
import Cell from './Cell'
import {buildBoard} from './buildBoard'

function Grid() {

const [matrix, setMatrix] = useState(buildBoard(40, 40, false))
console.log(matrix)

    return (
        <div className="grid">
            <table>
             
            {Object.entries(matrix).map(([key, value]) => (
                <tr key={key}>
                {value.map((cell, j) => (
                    <Cell key={`${key}-${j}`} cell={cell} />
                ))}
                </tr>
            ))
            }
         
        </table> 
        </div>
    )
}

export default Grid;
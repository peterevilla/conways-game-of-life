import React, { useState } from 'react'
import Cell from './Cell'
import {buildBoard} from './buildBoard'

function Grid() {

const [matrix, setMatrix] = useState(buildBoard(40, 40, true))
console.log(matrix)

    return (
        <div className="grid">
            <table>
            {Object.entries(matrix).map(e => (
                <tr>
                {e.map(val => (
                    <Cell/>
                ))}
                </tr>
            ))
            }
        </table> 
        </div>
    )
}

export default Grid;
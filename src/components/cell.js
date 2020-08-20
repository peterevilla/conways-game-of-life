import React from 'react'

function Cell({cell, coordinades,onToggle}) {
    
    return (
        <div className={cell === 1 ? "alive" : "dead"}
        onClick={() => {onToggle(coordinades)}}>
        </div>
    )
}

export default Cell;

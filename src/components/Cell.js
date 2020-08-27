import React from 'react'

function Cell({cell, cordinates, handleToggle}) {
    
    return (
        <div className={cell === 1 ? "alive" : "dead"}
        onClick={ () => handleToggle(cordinates)}
        >
        </div>
    )
}

export default Cell;

import React from "react";
import Cell from "./Cell";
import { connect } from "react-redux";
import { onToggle } from "../actions/onToggle";

function Grid({ board, onToggle }) {
 
  return (
    <div className="grid">
      <table>
        {Object.entries(board).map(([key, value]) => (
          <tr key={key}>
            {value.map((cell, j) => (
              <Cell
                key={`${key}-${j}`}
                cell={cell}
                cordinates={{ x: parseInt(key), y: j }}
                handleToggle={onToggle}
              />
            ))}
          </tr>
        ))}
      </table>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    board: state.board,
  };
};

export default connect(mapStateToProps, { onToggle })(Grid);

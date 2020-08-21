import React from 'react'
import { connect } from "react-redux";
import { nextGen } from "../actions/nextGen";


const ControlBoard = ({board, nextGen}) => {
    console.log(board)
    return (
        <div className="control">
            <button onClick={() => nextGen(board)}>Play</button>
            <button>Stop</button>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
      board: state.board,
    };
  };
  
  export default connect(mapStateToProps, { nextGen })(ControlBoard);

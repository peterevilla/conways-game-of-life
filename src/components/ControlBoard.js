import React, {useEffect, useState} from 'react'
import { connect } from "react-redux";
import { nextGen } from "../actions/nextGen";
import { random } from "../actions/random";



const ControlBoard = ({board, nextGen, random}) => {
    const [isActive, setIsActive] = useState(false);

    function toggle() {
        setIsActive(!isActive);
      }
      useEffect(() => {
        let interval = null;
        if (isActive) {
          interval = setInterval(() => {
            nextGen(board)
          }, 500);
        } else if (!isActive) {
          clearInterval(interval);
        }
        return () => clearInterval(interval);
      }, [isActive, board]);
    
    return (
        <div className='control'>
            <button className="random" onClick={() => random(true)}>Random</button>
            <button className={isActive ? 'play' : 'stopped'} onClick={toggle}>Play/Stop</button>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
      board: state.board,
    };
  };
  
  export default connect(mapStateToProps, { nextGen, random })(ControlBoard);

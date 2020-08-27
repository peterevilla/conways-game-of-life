import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { nextGen } from "../actions/nextGen";
import { random } from "../actions/random";
import { clear } from "../actions/clear";

const ControlBoard = ({ board, nextGen, random, clear }) => {
  const [isActive, setIsActive] = useState(false);
  const [speed, setSpeed] = useState(500);
  const [genCount, setGenCount] = useState(0)

  const onClear = () => {
    setSpeed(500)
    setGenCount(0)
    clear()
  }

  const onStep = () => {
    setGenCount(genCount + 1)
    nextGen(board)
  }
  const speedHandler = (s) => {
    if (s === "up") {
      if (speed > 50) {
        setSpeed(speed - 49);
      } else {
        setSpeed(50);
      }
    } else if (s === "down") {
      if (speed < 1500) {
        setSpeed(speed + 100);
      } else {
        setSpeed(1500);
      }
    }
  };

  function toggle() {
    setIsActive(!isActive);
  }
  useEffect(() => {
    let interval = null;
    if (isActive) {
      interval = setInterval(() => {
        setGenCount(genCount+ 1)
        nextGen(board);
      }, speed);
    } else if (!isActive) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isActive, board]);

  return (
    <div className="control">
      <button className="random" onClick={() => random()}>
        Random
      </button>
      {isActive ? (
        <button className={isActive ? "play" : "stopped"} onClick={toggle}>
          Stop
        </button>
      ) : (
        <button className={isActive ? "play" : "stopped"} onClick={toggle}>
          Play
        </button>
      )}
      <button className="random" onClick={() => speedHandler("down")}>
        -
      </button>
      <button className="random" onClick={() => speedHandler("up")}>
        +
      </button>
      <button className="random" onClick={() => onStep()}>
        step
      </button>
      <button className="random" onClick={() => onClear()}>
        Clear
      </button>
      <p className='gen'>gen: {genCount}</p>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    board: state.board,
  };
};

export default connect(mapStateToProps, { nextGen, random, clear })(
  ControlBoard
);

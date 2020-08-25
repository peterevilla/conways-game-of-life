import { TOGGLE } from "../actions/onToggle";
import { PLAY } from "../actions/nextGen";
import { RANDOM } from "../actions/random";
import { CLEAR } from "../actions/clear";
import { buildBoard } from "../components/buildBoard";

const initialState = buildBoard(50, 50);

const boardReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE:
      let x = action.payload.x;
      let y = action.payload.y;
      let tempBoard = { ...state };

      tempBoard[x][y] === 0 ? (tempBoard[x][y] = 1) : (tempBoard[x][y] = 0);
      state = { ...tempBoard };
      return state;
    case PLAY:
      let nextGeneration = action.payload
      state = {...nextGeneration}
      return state
    case RANDOM:
      return buildBoard(50, 50, true)
    case CLEAR:
      return buildBoard(50, 50, false)
    default:
      return state;
  }
};

export default boardReducer;

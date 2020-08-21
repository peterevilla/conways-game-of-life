import { TOGGLE } from "../actions/onToggle";
import { buildBoard } from "../components/buildBoard";

const initialState = buildBoard(40, 40);

const boardReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE:
      let x = action.payload.x;
      let y = action.payload.y;
      let tempBoard = { ...state };

      tempBoard[x][y] === 0 ? (tempBoard[x][y] = 1) : (tempBoard[x][y] = 0);
      state = { ...tempBoard };
      return state;

    default:
      return state;
  }
};

export default boardReducer;

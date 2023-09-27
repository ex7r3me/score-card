import { UPDATE_LOWER_SCORES, UPDATE_PLAYER_NAMES, UPDATE_SCORE, UPDATE_UPPER_SCORES } from "@/scorecards/yahtzee";

// Reducer function to handle state updates
export const scorecardReducer = (state, action) => {
  switch (action.type) {
    case UPDATE_UPPER_SCORES:
      return { ...state, upperScores: action.payload };
    case UPDATE_LOWER_SCORES:
      return { ...state, lowerScores: action.payload };
    case UPDATE_PLAYER_NAMES:
      return { ...state, playerNames: action.payload };
    case UPDATE_SCORE:
      const { rowIndex, colIndex, value, scoresType } = action.payload;
      const scores = [...state[scoresType]];
      const numberValue = value.replace(/\D/g, '');
      scores[rowIndex][colIndex] = Number(numberValue);
      return { ...state, [scoresType]: scores };
    default:
      return state;
  }
};
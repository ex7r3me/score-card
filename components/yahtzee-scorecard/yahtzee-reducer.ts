import { RESET_BOARD, UPDATE_LOWER_SCORES, UPDATE_PLAYER_NAMES, UPDATE_SCORE, UPDATE_UPPER_SCORES, initialLowerScores, initialPlayers, initialUpperScores } from "@/scorecards/yahtzee";

// Reducer function to handle state updates
export const scorecardReducer = (state: any, action: any) => {
  switch (action.type) {
    case UPDATE_UPPER_SCORES:
      return { ...state, upperScores: action.payload };
    case UPDATE_LOWER_SCORES:
      return { ...state, lowerScores: action.payload };
    case UPDATE_PLAYER_NAMES:
      const { index, playerName } = action.payload
      const updatedPlayerName = state.playerNames.map((v: string, i: number) => (index === i ? playerName : v));
      return { ...state, playerNames: updatedPlayerName };
    case UPDATE_SCORE:
      const { rowIndex, colIndex, value, scoresType } = action.payload;
      const scores = [...state[scoresType]];
      const numberValue = value.replace(/\D/g, '');
      scores[rowIndex][colIndex] = Number(numberValue);
      return { ...state, [scoresType]: scores };
    case RESET_BOARD:
      return {
        ...state,
        upperScores: initialUpperScores(action.payload),
        lowerScores: initialLowerScores(action.payload),
        playerNames: initialPlayers(action.payload)
      }
    default:
      return state;
  }
};
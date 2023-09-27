import { RESET_BOARD, UPDATE_PLAYER_NAMES, UPDATE_SCORE, initialLowerScores, initialPlayers, initialUpperScores } from "@/scorecards/yahtzee";

export const scorecardReducer = (state: any, action: any) => {
  switch (action.type) {
    case UPDATE_PLAYER_NAMES:
      const { index, playerName } = action.payload
      const updatedPlayerName = state.playerNames.map((currentName: string, currentIndex: number) => {
        if (currentIndex === index) {
          return playerName;
        }
        return currentName;
      });
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
const YAHTZEE_UPPER_ROWS = ['Aces', 'Twos', 'Threes', 'Fours', 'Fives', 'Sixes', 'Bonus']
const YAHTZEE_LOWER_ROWS = ['3 of a kind', '4 of a kind', 'full house', 'sm straight', 'lg straight', 'yahtzee', 'bonus']

// Define action types
export const UPDATE_UPPER_SCORES = 'UPDATE_UPPER_SCORES';
export const UPDATE_LOWER_SCORES = 'UPDATE_LOWER_SCORES';
export const UPDATE_PLAYER_NAMES = 'UPDATE_PLAYER_NAMES';
export const RESET_BOARD = 'RESET_BOARD'
export const UPDATE_SCORE = 'UPDATE_SCORE';

export const loadFromLocalStorage = (key: string, defaultValue: string[] | number[][]) => {
  const value = localStorage.getItem(key);
  if (value === null) {
    console.error(`No data found for key: ${key}`);
    return defaultValue;
  }
  try {
    return JSON.parse(value);
  } catch (error) {
    console.error(`Error parsing ${key} from localStorage:`, error);
    return defaultValue;
  }
};

export const loadStateFromStorage = (playersCount: number) => {
  return {
    upperScores: loadFromLocalStorage('yahtzee-scores-upper', initialUpperScores(playersCount)),
    lowerScores: loadFromLocalStorage('yahtzee-scores-lower', initialLowerScores(playersCount)),
    playerNames: loadFromLocalStorage('players', initialPlayers(playersCount)),
  }
}

export const saveStateToStorage = (state: any) => {
  localStorage.setItem('yahtzee-scores-upper', JSON.stringify(state.upperScores));
  localStorage.setItem('yahtzee-scores-lower', JSON.stringify(state.lowerScores));
  localStorage.setItem('players', JSON.stringify(state.playerNames));
}
const initialPlayers = (_playersCount?: number) => {
  return ['Player1', 'Player2', 'Player3', 'Player4']
}
const initialScores = (length: number, playersCount: number) => Array.from({ length }, () =>
  Array.from({ length: playersCount }, () => 0)
);

export const initialUpperScores = (playersCount: number) => initialScores(YAHTZEE_UPPER_ROWS.length, playersCount)
export const initialLowerScores = (playersCount: number) => initialScores(YAHTZEE_LOWER_ROWS.length, playersCount)

const calculateGrandTotal = (colIndex: number, upperScores: number[][], lowerScores: number[][]) => {
  return upperScores.reduce((acc, row) => acc + row[colIndex], 0) + lowerScores.reduce((acc, row) => acc + row[colIndex], 0)
}

const calculateTotal = (colIndex: number, scores: any[]) => {
  return scores.reduce((acc, row) => acc + row[colIndex], 0);
}

export { calculateGrandTotal, calculateTotal, initialPlayers, initialScores, YAHTZEE_LOWER_ROWS, YAHTZEE_UPPER_ROWS }
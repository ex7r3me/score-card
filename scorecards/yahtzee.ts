const YAHTZEE_UPPER_ROWS = ['Aces', 'Twos', 'Threes', 'Fours', 'Fives', 'Sixes', 'Bonus']
const YAHTZEE_LOWER_ROWS = ['3 of a kind', '4 of a kind', 'full house', 'sm straight', 'lg straight', 'yahtzee', 'bonus']

// Define action types
export const UPDATE_UPPER_SCORES = 'UPDATE_UPPER_SCORES';
export const UPDATE_LOWER_SCORES = 'UPDATE_LOWER_SCORES';
export const UPDATE_PLAYER_NAMES = 'UPDATE_PLAYER_NAMES';
export const UPDATE_SCORE = 'UPDATE_SCORE';

export const clearLocalStorage = () => {
    localStorage.removeItem('yahtzee-scores-upper');
    localStorage.removeItem('yahtzee-scores-lower');
    localStorage.removeItem('players');

}
export const loadFromLocalStorage = (key, defaultValue) => {
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

const initialPlayers = () => {
    return ['Player1', 'Player2', 'Player3', 'Player4']
}
const initialScores = (length: number, playersCount: number) => Array.from({ length }, () =>
    Array.from({ length: playersCount }, () => 0)
);


const calculateGrandTotal = (colIndex: number, upperScores: number[][], lowerScores: number[][]) => {
    return upperScores.reduce((acc, row) => acc + row[colIndex], 0) + lowerScores.reduce((acc, row) => acc + row[colIndex], 0)
}

const calculateTotal = (colIndex: number, scores: any[]) => {
    return scores.reduce((acc, row) => acc + row[colIndex], 0);
}

export { calculateGrandTotal, calculateTotal, initialPlayers, initialScores, YAHTZEE_LOWER_ROWS, YAHTZEE_UPPER_ROWS }
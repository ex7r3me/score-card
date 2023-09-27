import { initialLowerScores, initialPlayers, initialUpperScores } from "./initiation";

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
  
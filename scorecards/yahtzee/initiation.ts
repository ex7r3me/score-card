import { YAHTZEE_LOWER_ROWS, YAHTZEE_UPPER_ROWS } from "./constants";

export const initialPlayers = (_playersCount?: number) => {
    return ['Player1', 'Player2', 'Player3', 'Player4']
}
export const initialScores = (length: number, playersCount: number) => Array.from({ length }, () =>
    Array.from({ length: playersCount }, () => 0)
);

export const initialUpperScores = (playersCount: number) => initialScores(YAHTZEE_UPPER_ROWS.length, playersCount)
export const initialLowerScores = (playersCount: number) => initialScores(YAHTZEE_LOWER_ROWS.length, playersCount)

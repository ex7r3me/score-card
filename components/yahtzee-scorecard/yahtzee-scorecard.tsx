'use client'

import { RESET_BOARD, UPDATE_PLAYER_NAMES, UPDATE_SCORE, loadStateFromStorage, saveStateToStorage } from '@/scorecards/yahtzee';
import { useEffect, useReducer } from 'react';

import { Button } from 'react-aria-components';
import ClearButton from '@/components/clear-button/clear-button';
import YahtzeeTableLayout from './table/layout';
import { scorecardReducer } from '../../scorecards/yahtzee/reducer';

export default function YahtzeeScorecard() {
  const playersCount = 4;
  const initialState = { ...loadStateFromStorage(playersCount) };

  const [state, dispatch] = useReducer(scorecardReducer, initialState);

  const clearBoard = () => {
    dispatch({ type: RESET_BOARD, payload: playersCount })
  };

  const handleScoreChange = (rowIndex: number, colIndex: number, value: string, scoresType: string) => {
    dispatch({ type: UPDATE_SCORE, payload: { rowIndex, colIndex, value, scoresType } });
  };

  const handlePlayerChange = (index: number, value: string) => {
    dispatch({ type: UPDATE_PLAYER_NAMES, payload: { index, playerName: value } });
  };

  useEffect(() => {
    saveStateToStorage(state)
  }, [state]);


  return (
    <div className="flex flex-col justify-center">
      <YahtzeeTableLayout
        playersCount={playersCount}
        state={state}
        handlePlayerChange={handlePlayerChange}
        handleScoreChange={handleScoreChange} />
      <div className="flex flex-row justify-items-start items-start justify-center p-2">
        <Button onPress={() => { }} className="inline-block bg-dark-green text-white py-1 px-3 font-bold rounded-md mr-3">
          Reveal Score
        </Button>
        <ClearButton onAccept={clearBoard} />
      </div>
    </div>
  );
}

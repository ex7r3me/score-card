'use client'

import { RESET_BOARD, UPDATE_PLAYER_NAMES, UPDATE_SCORE, calculateAllGrandTotal, loadStateFromStorage, saveStateToStorage, scorecardReducer } from '@/scorecards/yahtzee';
import { useEffect, useReducer, useState } from 'react';

import { Button } from 'react-aria-components';
import ClearButton from '@/components/clear-button/clear-button';
import RevealWinner from '../reveal-winner/reveal-winner';
import YahtzeeTableLayout from './table/layout';

export default function YahtzeeScorecard() {
  const playersCount = 4;
  const initialState = { ...loadStateFromStorage(playersCount) };

  const [state, dispatch] = useReducer(scorecardReducer, initialState);
  const [showTotal, setShowTotal] = useState(false)

  const onClearBoard = () => {
    dispatch({ type: RESET_BOARD, payload: playersCount })
  };

  const onScoreChange = (rowIndex: number, colIndex: number, value: string, scoresType: string) => {
    dispatch({ type: UPDATE_SCORE, payload: { rowIndex, colIndex, value, scoresType } });
  };

  const onPlayerChange = (index: number, value: string) => {
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
        showTotal={showTotal}
        handlePlayerChange={onPlayerChange}
        handleScoreChange={onScoreChange} />
      <div className="flex flex-row justify-items-start items-start justify-center p-2">
        {showTotal
          ? <Button onPress={() => setShowTotal(false)} className='inline-block bg-dark-green text-white py-1 px-3 font-bold rounded-md mr-3'>Hide Score</Button>
          : <RevealWinner players={state.playerNames} totals={calculateAllGrandTotal(state)} gameName='yahtzee' onClose={() => setShowTotal(true)} />
        }
        <ClearButton onAccept={onClearBoard} />
      </div>
    </div>
  );
}

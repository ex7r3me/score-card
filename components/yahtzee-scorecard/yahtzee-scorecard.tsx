'use client'

import { Button, Cell, Row, Table, TableBody } from 'react-aria-components';
import React, { useEffect, useReducer } from 'react';
import { UPDATE_LOWER_SCORES, UPDATE_PLAYER_NAMES, UPDATE_SCORE, UPDATE_UPPER_SCORES } from "@/scorecards/yahtzee";
import { YAHTZEE_LOWER_ROWS, YAHTZEE_UPPER_ROWS, calculateGrandTotal, calculateTotal, initialPlayers, initialScores } from '@/scorecards/yahtzee';
import { YahtzeeTableHeader, YahtzeeTablePlayers, YahtzeeTableScores, YahtzeeTableTitleRow, YahtzeeTableTotal } from './table';

import ClearButton from '@/components/clear-button/clear-button';
import { scorecardReducer } from './yahtzee-reducer';

export default function YahtzeeScorecard() {
  const upperRowsNum = YAHTZEE_UPPER_ROWS.length;
  const lowerRowsNum = YAHTZEE_LOWER_ROWS.length;
  const playersCount = 4;

  const initialState = {
    upperScores: initialScores(upperRowsNum, playersCount),
    lowerScores: initialScores(lowerRowsNum, playersCount),
    playerNames: initialPlayers(),
  };

  const [state, dispatch] = useReducer(scorecardReducer, initialState);

  const clearBoard = () => {
    dispatch({ type: UPDATE_UPPER_SCORES, payload: initialScores(upperRowsNum, playersCount) });
    dispatch({ type: UPDATE_LOWER_SCORES, payload: initialScores(lowerRowsNum, playersCount) });
    dispatch({ type: UPDATE_PLAYER_NAMES, payload: initialPlayers() });
    localStorage.removeItem('yahtzee-scores-upper');
    localStorage.removeItem('yahtzee-scores-lower');
    localStorage.removeItem('players');
  };

  const handleScoreChange = (rowIndex, colIndex, value, scoresType) => {
    dispatch({ type: UPDATE_SCORE, payload: { rowIndex, colIndex, value, scoresType } });
    localStorage.setItem('yahtzee-scores-upper', JSON.stringify(state.upperScores));
    localStorage.setItem('yahtzee-scores-lower', JSON.stringify(state.lowerScores));
  };

  const handlePlayerChange = (index, value) => {
    const updatedPlayerName = state.playerNames.map((v, i) => (index === i ? value : v));
    dispatch({ type: UPDATE_PLAYER_NAMES, payload: updatedPlayerName });
    localStorage.setItem('players', JSON.stringify(state.playerNames));
  };



  useEffect(() => {
    try {
      const upperScoresLoaded = JSON.parse(localStorage.getItem('yahtzee-scores-upper') || '') || initialScores(upperRowsNum, playersCount);
      const lowerScoresLoaded = JSON.parse(localStorage.getItem('yahtzee-scores-lower') || '') || initialScores(lowerRowsNum, playersCount);
      const playerNames = JSON.parse(localStorage.getItem('players') || '') || initialPlayers();
      if (playerNames) dispatch({ type: UPDATE_PLAYER_NAMES, payload: playerNames });
      if (upperScoresLoaded && lowerScoresLoaded) {
        dispatch({ type: UPDATE_UPPER_SCORES, payload: upperScoresLoaded });
        dispatch({ type: UPDATE_LOWER_SCORES, payload: lowerScoresLoaded });
      }
    } catch (e) {
      dispatch({ type: UPDATE_UPPER_SCORES, payload: initialScores(upperRowsNum, playersCount) });
      dispatch({ type: UPDATE_LOWER_SCORES, payload: initialScores(lowerRowsNum, playersCount) });
      dispatch({ type: UPDATE_PLAYER_NAMES, payload: initialPlayers() });
    }
  }, []);

  return (
    <div className="flex flex-col justify-center">
      <Table className="self-center table-auto " aria-label="Yahtzee Scores Board">
        <YahtzeeTableHeader columns={playersCount} />
        <TableBody className="text-center text-primary-gray">
          <YahtzeeTablePlayers playerNames={state.playerNames} onChange={handlePlayerChange} />
          <YahtzeeTableScores
            rows={YAHTZEE_UPPER_ROWS}
            scores={state.upperScores}
            onChange={(e, rowIndex, colIndex) =>
              handleScoreChange(rowIndex, colIndex, e.target.value, 'upperScores')
            }
          />
          <YahtzeeTableTotal columns={playersCount} calculator={calculateTotal} scores={state.upperScores} />
          <YahtzeeTableTitleRow />
          <YahtzeeTableScores
            rows={YAHTZEE_LOWER_ROWS}
            scores={state.lowerScores}
            onChange={(e, rowIndex, colIndex) =>
              handleScoreChange(rowIndex, colIndex, e.target.value, 'lowerScores')
            }
          />
          <YahtzeeTableTotal columns={playersCount} calculator={calculateTotal} scores={state.lowerScores} />
          <Row className="border-b border-primary-gray">
            <Cell>
              <span>Grand Total</span>
            </Cell>
            {Array.from({ length: playersCount }).map((_, colIndex) => (
              <Cell className="border-l border-primary-gray" key={colIndex}>
                {calculateGrandTotal(colIndex, state.upperScores, state.lowerScores) || ''}
              </Cell>
            ))}
          </Row>
        </TableBody>
      </Table>
      <div className="flex flex-row justify-items-start items-start justify-center p-2">
        <Button onPress={() => {}} className="inline-block bg-dark-green text-white py-1 px-3 font-bold rounded-md mr-3">
          Reveal Score
        </Button>
        <ClearButton onAccept={clearBoard} />
      </div>
    </div>
  );
}

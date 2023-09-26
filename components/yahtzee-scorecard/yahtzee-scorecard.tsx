'use client'

import { Button, Cell, Column, Row, Table, TableBody, TableHeader } from 'react-aria-components';
import { SetStateAction, useEffect, useState } from 'react';

import ClearButton from '@/components/clear-button/clear-button';
import TableInput from '@/components/table-input/table-input';
import YahtzeeTableHeader from './table/header';
import YahtzeeTablePlayers from './table/players';
import YahtzeeTableScores from './table/scores';
import YahtzeeTableTitleRow from './table/title-row';
import YahtzeeTableTotal from './table/total';

export default function YahtzeeScorecard() {
  const upperRows = ['Aces', 'Twos', 'Threes', 'Fours', 'Fives', 'Sixes', 'Bonus']
  const lowerRows = ['3 of a kind', '4 of a kind', 'full house', 'sm straight', 'lg straight', 'yahtzee', 'bonus']
  const upperRowsNum = upperRows.length;
  const lowerRowsNum = lowerRows.length;

  const numCols = 4;

  const initialScores = (length: number) => Array.from({ length }, () =>
    Array.from({ length: numCols }, () => 0)
  );
  const initialPlayers = () => {
    return ['Player1', 'Player2', 'Player3', 'Player4']
  }
  const [upperScores, setUpperScores] = useState(initialScores(upperRowsNum));
  const [lowerScores, setLowerScores] = useState(initialScores(lowerRowsNum));
  const [playerNames, setPlayerNames] = useState(initialPlayers());

  const clearBoard = () => {
    setUpperScores(initialScores(upperRowsNum))
    setLowerScores(initialScores(lowerRowsNum))
    setPlayerNames(initialPlayers())
    localStorage.removeItem('yahtzee-scores-upper')
    localStorage.removeItem('yahtzee-scores-lower')
    localStorage.removeItem('players')
  }
  const calculateGrandTotal = (colIndex: number) => {
    return upperScores.reduce((acc, row) => acc + row[colIndex], 0) + lowerScores.reduce((acc, row) => acc + row[colIndex], 0)
  }

  const calculateTotal = (colIndex: number, scores: any[]) => {
    return scores.reduce((acc, row) => acc + row[colIndex], 0);
  }
  const handleScoreChange = (rowIndex: number, colIndex: number, value: string, scores: number[][], setScores: { (value: SetStateAction<number[][]>): void; (value: SetStateAction<number[][]>): void; (arg0: any[]): void; }) => {
    const numberValue = value.replace(/\D/g, "")
    const newScores = [...scores];
    newScores[rowIndex][colIndex] = Number(numberValue);
    setScores(newScores);
    localStorage.setItem('yahtzee-scores-upper', JSON.stringify(upperScores))
    localStorage.setItem('yahtzee-scores-lower', JSON.stringify(lowerScores))
  };
  const handlePlayerChange = (index: number, value: string) => {
    const updatedPlayerName = playerNames.map((v, i) => {
      if (index === i) return value
      return v
    })
    setPlayerNames(updatedPlayerName)
    localStorage.setItem('players', JSON.stringify(updatedPlayerName))
  }
  useEffect(() => {
    try {
      const upperScoresLoaded = JSON.parse(localStorage.getItem('yahtzee-scores-upper') as string) || initialScores(upperRowsNum)
      const lowerScoresLoaded = JSON.parse(localStorage.getItem('yahtzee-scores-lower') as string) || initialScores(lowerRowsNum)
      const playerNames = JSON.parse(localStorage.getItem('players') as string) || initialPlayers()
      if (playerNames) setPlayerNames(playerNames)
      if (upperScoresLoaded && lowerScoresLoaded) {
        setUpperScores(upperScoresLoaded);
        setLowerScores(lowerScoresLoaded)
      }
    } catch (e) {
      setUpperScores(initialScores(upperRowsNum))
      setLowerScores(initialScores(lowerRowsNum))
      setPlayerNames(initialPlayers())
    }
  }, []);
  return (
    <div className="flex flex-col justify-center">
      <Table className="self-center table-auto " aria-label="Yahtzee Scores Board" >
        <YahtzeeTableHeader columns={numCols} />
        <TableBody className="text-center text-primary-gray">
          <YahtzeeTablePlayers playerNames={initialPlayers()} onChange={handlePlayerChange} />
          <YahtzeeTableScores rows={upperRows} scores={upperScores} onChange={(e,rowIndex, colIndex) => handleScoreChange(rowIndex, colIndex, e.target.value, upperScores, setUpperScores) } />
          <YahtzeeTableTotal columns={numCols} calculator={calculateTotal} scores={upperScores} />
          <YahtzeeTableTitleRow />
          <YahtzeeTableScores rows={lowerRows} scores={lowerScores} onChange={(e,rowIndex, colIndex) => handleScoreChange(rowIndex, colIndex, e.target.value, lowerScores, setLowerScores) } />
          <YahtzeeTableTotal columns={numCols} calculator={calculateTotal} scores={lowerScores} />
          <Row className="border-b border-primary-gray">
            <Cell ><span>Grand Total</span></Cell>
            {Array.from({ length: numCols }).map((_, colIndex) => (
              <Cell className="border-l border-primary-gray" key={colIndex}>{calculateGrandTotal(colIndex) || ''}</Cell>
            ))}
          </Row>
        </TableBody>
      </Table>
      <div className='flex flex-row justify-items-start items-start justify-center p-2'>
        <Button onPress={() => { }} className='inline-block bg-dark-green text-white py-1 px-3 font-bold rounded-md mr-3'>Reveal Score</Button>
        <ClearButton onAccept={clearBoard} />
      </div>
    </div>
  )
}

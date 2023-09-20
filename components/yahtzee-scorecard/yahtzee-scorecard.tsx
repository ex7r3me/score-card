'use client'

import TableInput from '@/components/table-input/table-input';
import { SetStateAction, useState } from 'react';
import { Cell, Column, Row, Table, TableBody, TableHeader } from 'react-aria-components';

export default function GolfScorecard() {
  const upperRows = ['Aces', 'Twos', 'Threes', 'Fours', 'Fives', 'Sixes', 'Bonus']
  const lowerRows = ['3 of a kind', '4 of a kind', 'full house', 'sm straight', 'lg straight', 'yahtzee', 'bonus']
  const upperRowsNum = upperRows.length;
  const lowerRowsNum = lowerRows.length;

  const numCols = 4;

  // Initialize state for the scores using a dynamic array
  const initialScores = (length: number) => Array.from({ length }, () =>
    Array.from({ length: numCols }, () => 0)
  );

  const [upperScores, setUpperScores] = useState(initialScores(upperRowsNum));
  const [lowerScores, setLowerScores] = useState(initialScores(lowerRowsNum));

  const calculateGrandTotal = (colIndex: number) => {
    return upperScores.reduce((acc, row) => acc + row[colIndex], 0) + lowerScores.reduce((acc, row) => acc + row[colIndex], 0)
  }

  const calculateTotal = (colIndex: number, scores: any[]) => {
    return scores.reduce((acc, row) => acc + row[colIndex], 0);
  };
  const handleScoreChange = (rowIndex: number, colIndex: number, value: string, scores: number[][], setScores: { (value: SetStateAction<number[][]>): void; (value: SetStateAction<number[][]>): void; (arg0: any[]): void; }) => {
    const numberValue = value.replace(/\D/g, "")
    const newScores = [...scores];
    newScores[rowIndex][colIndex] = Number(numberValue);
    setScores(newScores);
  };

  return (
    <div className="flex flex-col justify-center">
      <Table className="self-center table-auto " aria-label="Yahtzee Scores Board" >
        <TableHeader className='hidden'>
          <Column isRowHeader>Players</Column>
          {Array.from(Array(numCols).keys()).map(c => (
            <Column key={'header' + c}>Name</Column>
          ))}
        </TableHeader>

        <TableBody className="text-center text-primary-gray">
          <Row className="text-center border-b border-primary-gray" >
            <Cell className="font-bold" >Upper</Cell>
            <Cell className="border-l border-primary-gray"><TableInput /></Cell>
            <Cell className="border-l border-primary-gray"><TableInput /></Cell>
            <Cell className="border-l border-primary-gray"><TableInput /></Cell>
            <Cell className="border-l border-primary-gray"><TableInput /></Cell>
          </Row>
          {upperScores.map((row, rowIndex) => (
            <Row className="border-b border-primary-gray" key={rowIndex}>
              <Cell className='' ><span>{upperRows[rowIndex]}</span></Cell>
              {row.map((score, colIndex) => (
                <Cell className="border-l border-primary-gray" key={colIndex}>
                  <TableInput
                    value={score}
                    onChange={(e) => handleScoreChange(rowIndex, colIndex, e.target.value, upperScores, setUpperScores)}
                  />
                </Cell>
              ))}
            </Row>
          ))}
          <Row className="border-b border-primary-gray">
            <Cell><span>Total</span></Cell>
            {Array.from({ length: numCols }).map((_, colIndex) => (
              <Cell className="border-l border-primary-gray" key={colIndex}>{calculateTotal(colIndex, upperScores)}</Cell>
            ))}
          </Row>
          <Row className="font-bold">
            <Cell><span>Lower</span></Cell>

          </Row>
          {lowerScores.map((row, rowIndex) => (
            <Row className="border-t border-b border-primary-gray" key={rowIndex}>
              <Cell><span>{lowerRows[rowIndex]}</span></Cell>
              {row.map((score, colIndex) => (
                <Cell className="border-l border-primary-gray" key={colIndex}>
                  <TableInput
                    value={score}
                    onChange={(e) => handleScoreChange(rowIndex, colIndex, e.target.value, lowerScores, setLowerScores)}
                  />
                </Cell>
              ))}
            </Row>
          ))}
          <Row className="border-b border-primary-gray">
            <Cell ><span>Total</span></Cell>
            {Array.from({ length: numCols }).map((_, colIndex) => (
              <Cell className="border-l border-primary-gray" key={colIndex}>{calculateTotal(colIndex, lowerScores)}</Cell>
            ))}
          </Row>
          <Row className="border-b border-primary-gray">
            <Cell ><span>Grand Total</span></Cell>
            {Array.from({ length: numCols }).map((_, colIndex) => (
              <Cell className="border-l border-primary-gray" key={colIndex}>{calculateGrandTotal(colIndex)}</Cell>
            ))}
          </Row>

        </TableBody>
      </Table>

    </div>
  );
}

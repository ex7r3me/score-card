'use client'
import TableInput from '@/components/table-input/table-input';
import { SetStateAction, useState } from 'react';
import { Cell, Column, Row, Table, TableBody, TableHeader } from 'react-aria-components';

export default function Home() {
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

  const calculateTotal = (colIndex: number,scores: any[]) => {
    return scores.reduce((acc, row) => acc + row[colIndex], 0);
  };
  const handleScoreChange = (rowIndex: number, colIndex: number, value: number, scores: number[][], setScores: { (value: SetStateAction<number[][]>): void; (value: SetStateAction<number[][]>): void; (arg0: any[]): void; }) => {
    const newScores = [...scores];
    newScores[rowIndex][colIndex] = Number(value);
    setScores(newScores);
  };

  return (
    <div className="p-2 ml-5 mr-5 rounded-md bg-beige">
      <h1 role='heading' className="text-xl font-bold text-center">Yahtzee</h1>
      <Table aria-label="Files">
        <TableHeader>
          <Column isRowHeader>Name</Column>
          <Column isRowHeader><TableInput /></Column>
          <Column isRowHeader><TableInput /></Column>
          <Column isRowHeader><TableInput /></Column>
          <Column isRowHeader><TableInput /></Column>
        </TableHeader>
        <TableBody>
          {upperScores.map((row, rowIndex) => (
            <Row key={rowIndex}>
              <Cell><span>{upperRows[rowIndex]}</span></Cell>
              {row.map((score, colIndex) => (
                <Cell className="border-2 border-primary-gray" key={colIndex}>
                  <TableInput
                    value={score}
                    onChange={(e) => handleScoreChange(rowIndex, colIndex, Number(e.target.value), upperScores, setUpperScores)}
                  />
                </Cell>
              ))}
            </Row>
          ))}
          <Row>
            <Cell><span>Total</span></Cell>
            {Array.from({ length: numCols }).map((_, colIndex) => (
              <Cell key={colIndex}>{calculateTotal(colIndex, upperScores)}</Cell>
            ))}
          </Row>
          {lowerScores.map((row, rowIndex) => (
            <Row key={rowIndex}>
              <Cell><span>{lowerRows[rowIndex]}</span></Cell>
              {row.map((score, colIndex) => (
                <Cell className="border-2 border-primary-gray" key={colIndex}>
                  <TableInput
                    value={score}
                    onChange={(e) => handleScoreChange(rowIndex, colIndex, Number(e.target.value), lowerScores, setLowerScores)}
                  />
                </Cell>
              ))}
            </Row>
          ))}
          <Row>
            <Cell><span>Total</span></Cell>
            {Array.from({ length: numCols }).map((_, colIndex) => (
              <Cell key={colIndex}>{calculateTotal(colIndex, lowerScores)}</Cell>
            ))}
          </Row>
          <Row>
            <Cell><span>Grand Total</span></Cell>
            {Array.from({ length: numCols }).map((_, colIndex) => (
              <Cell key={colIndex}>{calculateGrandTotal(colIndex)}</Cell>
            ))}
          </Row>

        </TableBody>
      </Table>

    </div>
  );
}

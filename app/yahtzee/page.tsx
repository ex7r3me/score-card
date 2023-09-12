'use client'
import TableInput from '@/components/table-input/table-input';
import { useState } from 'react';
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
  const [grandTotal, setGrandTotal] = useState(Array(numCols))
  
  const calculateGrandTotal = (colIndex: number) => {
    return upperScores.reduce((acc, row) => acc + row[colIndex], 0) + lowerScores.reduce((acc, row) => acc + row[colIndex], 0)
  }

  const calculateTotal = (colIndex: number,scores) => {
    return scores.reduce((acc, row) => acc + row[colIndex], 0);
  };
  const handleScoreChange = (rowIndex: number, colIndex: number, value: number, scores, setScores) => {
    const newScores = [...scores];
    newScores[rowIndex][colIndex] = Number(value);
    setScores(newScores);
  };

  return (
    <div className="p-2 ml-5 mr-5 rounded-md bg-beige">
      <h1 role='heading' className="text-xl font-bold text-center">Yahtzee</h1>
      <Table aria-label="Files" selectionMode="multiple">
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
              <Cell >{upperRows[rowIndex]}</Cell>
              {row.map((score, colIndex) => (
                <Cell className="border-2 border-primary-gray" key={colIndex}>
                  <TableInput
                    value={score}
                    onChange={(e) => handleScoreChange(rowIndex, colIndex, e.target.value, upperScores, setUpperScores)}
                  />
                </Cell>
              ))}
            </Row>
          ))}
          <Row>
            <Cell>Total</Cell>
            {Array.from({ length: numCols }).map((_, colIndex) => (
              <Cell key={colIndex}>{calculateTotal(colIndex, upperScores)}</Cell>
            ))}
          </Row>
          {lowerScores.map((row, rowIndex) => (
            <Row key={rowIndex}>
              <Cell>{lowerRows[rowIndex]}</Cell>
              {row.map((score, colIndex) => (
                <Cell className="border-2 border-primary-gray" key={colIndex}>
                  <TableInput
                    value={score}
                    onChange={(e) => handleScoreChange(rowIndex, colIndex, e.target.value, lowerScores, setLowerScores)}
                  />
                </Cell>
              ))}
            </Row>
          ))}
          <Row>
            <Cell>Total</Cell>
            {Array.from({ length: numCols }).map((_, colIndex) => (
              <Cell key={colIndex}>{calculateTotal(colIndex, lowerScores)}</Cell>
            ))}
          </Row>
          <Row>
            <Cell>Grand Total</Cell>
            {Array.from({ length: numCols }).map((_, colIndex) => (
              <Cell key={colIndex}>{calculateGrandTotal(colIndex)}</Cell>
            ))}
          </Row>

        </TableBody>
      </Table>

    </div>
  );
}

'use client'

import React, { useState } from 'react'
import { Cell, Column, Row, Table, TableBody, TableHeader, TextField, Label, Input } from 'react-aria-components'
import {initialScorecard, addScore, calculatePlayerScore} from '@/scorecards/golf'

export default function GolfScorecard() {
  const [numPlayers, setNumPlayers] = useState(4)
  const [scorecard, setScorecard] = useState(initialScorecard(4))
  const [playerTotals, setPlayerTotals] = useState(Array.from(Array(numPlayers)))

  function onAddScore(e: React.ChangeEvent<HTMLInputElement>, hole: number, player: number) {
    const score = e.currentTarget.value.replace(/\D/g, '')
    
    setScorecard(addScore(score, hole, player, scorecard))

    const totals = Array.from(Array(numPlayers).keys()).map((player) => {
      return calculatePlayerScore(player+1, scorecard)
    })
    setPlayerTotals(totals)
  }

  return (
    <Table aria-label='Golf scorecard' className='mx-auto'>
      <TableHeader className='hidden'>
        <Column isRowHeader>Hole</Column>
        {Array.from(Array(numPlayers).keys()).map(c => (
          <Column key={'header'+c}>Name</Column>
        ))}
      </TableHeader>
      <TableBody>
        <Row key='column-names'>
          <Cell className='w-12 font-bold text-center'><span>Hole</span></Cell>
          {Array.from(Array(numPlayers).keys()).map(c => (
            <Cell key={'column'+c} className='font-bold border-solid border-l-2 border-primary-gray'>
              <TextField defaultValue={'player'+(c+1)}>
                <Label hidden>Player name</Label>
                <Input className='bg-transparent w-16 text-center text-dark-green'/>
              </TextField>
            </Cell>
          ))}
        </Row>
        { scorecard.map((row, rowIndex) => {
          const hole = rowIndex+1
          return (
            <Row key={'hole'+hole} className='border-solid border-t-2 border-primary-gray'>
              {row.map((col, i) => {
                if (i === 0) {
                  return (
                    <Cell key={'hole'+hole+'scores'} className='text-center'>{col}</Cell>
                  )
                }
                
                return (
                  <Cell key={'h'+hole+'p'+i+'-score'} className='border-solid border-l-2 border-primary-gray'>
                    <TextField>
                      <Label hidden>player score for hole {row[0]}</Label>
                      <Input 
                        inputMode='numeric' 
                        className='bg-transparent w-16 px-2 text-center text-dark-green'
                        value={scorecard[rowIndex][i] || ''}
                        onChange={(e) => onAddScore(e,hole,i)}
                      />
                    </TextField>
                  </Cell>
                )
              })}
            </Row>
          )
        })}
        <Row key='totals' className='border-solid border-t-2 border-primary-gray'>
          <Cell key='total-label' className='font-bold text-center'><span>Total</span></Cell>
          { playerTotals.map((col, i) => (
            <Cell key={'p'+i+'total'} className='font-bold text-center border-solid border-l-2 border-primary-gray'>{col || 0}</Cell>
          ))}
        </Row>
      </TableBody>
    </Table>
  )
}

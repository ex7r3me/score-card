'use client'

import React, { useState, useEffect } from 'react'
import { Button, Cell, Column, Row, Table, TableBody, TableHeader, TextField, Label, Input } from 'react-aria-components'
import {initialScorecard, addScore, calculatePlayerScore} from '@/scorecards/golf'
import ClearButton from '@/components/clear-button/clear-button'

const localStorageKey = 'golf-state'

let initialState = {
  players: ['Player1', 'Player2', 'Player3', 'Player4'],
  scorecard: initialScorecard(4),
  totals: Array.from(Array(4)),
}

function updateLocalstorage(players: string[], scorecard: number[][], totals: number[]) {
  const state = JSON.stringify({ players, scorecard, totals})
  localStorage.setItem(localStorageKey, state)
}

export default function GolfScorecard() {
  const [loading, setLoading] = useState(true)
  const [showScore, setShowScore] = useState(false)
  const [players, setPlayers] = useState(initialState.players)
  const [scorecard, setScorecard] = useState(initialState.scorecard)
  const [totals, setTotals] = useState(initialState.totals)

  useEffect(() => {
    const localStateJson = localStorage.getItem(localStorageKey)

    if (localStateJson) {
      const localState = JSON.parse(localStateJson) 

      setPlayers(localState.players)
      setScorecard(localState.scorecard)
      setTotals(localState.totals)
    }

    setLoading(false)
  }, [])

  function onAddScore(e: React.ChangeEvent<HTMLInputElement>, hole: number, player: number) {
    const score = e.currentTarget.value.replace(/\D/g, '')
    setScorecard(addScore(score, hole, player, scorecard))

    const totals = Array.from(Array(players.length).keys()).map((player) => {
      return calculatePlayerScore(player+1, scorecard)
    })
    setTotals(totals)

    updateLocalstorage(players, scorecard, totals)
  }

  function onEnterPlayerName(e: React.ChangeEvent<HTMLInputElement>, playerIndex: number) {
    players[playerIndex] = e.currentTarget.value
    setPlayers(players) 

    updateLocalstorage(players, scorecard, totals)
  }

  function clearBoard() {
    localStorage.removeItem(localStorageKey)

    setPlayers(initialState.players)
    setScorecard(initialState.scorecard)
    setTotals(initialState.totals)
  }
  if (loading) return (<p className='text-center'>loading...</p>)
  return (
    <div className='flex flex-col items-center'>
      <Table aria-label='Golf scorecard'>
        <TableHeader className='hidden'>
          <Column isRowHeader>Hole</Column>
          {Array.from(Array(players.length).keys()).map(c => (
            <Column key={'header'+c}>Name</Column>
          ))}
        </TableHeader>
        <TableBody>
          <Row key='column-names'>
            <Cell className='w-12 font-bold text-center'><span>Hole</span></Cell>
            {players.map((p, i) => (
              <Cell key={p} className='font-bold border-solid border-l-2 border-primary-gray'>
                <TextField defaultValue={p}>
                  <Label hidden>Player name</Label>
                  <Input onChange={(e) => onEnterPlayerName(e, i)} className='bg-transparent w-16 text-center text-dark-green'/>
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
          { showScore && (
            <Row key='totals' className='border-solid border-t-2 border-primary-gray'>
              <Cell key='total-label' className='font-bold text-center'><span>Total</span></Cell>
              { totals.map((col, i) => (
                <Cell key={'p'+i+'total'} className='font-bold text-center border-solid border-l-2 border-primary-gray'>{col || 0}</Cell>
              ))}
            </Row>
          )}
        </TableBody>
      </Table>
      
      <div className='flex flex-row justify-items-start items-start justify-center p-2'>
        <Button onPress={() => setShowScore(true)} className='inline-block bg-dark-green text-white py-1 px-3 font-bold rounded-md mr-3'>Reveal Score</Button>
        <ClearButton onAccept={clearBoard} />
      </div>
    </div>
  )
}

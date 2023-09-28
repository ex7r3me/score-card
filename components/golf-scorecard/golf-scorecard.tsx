'use client'

import React, { useState, useEffect, useReducer } from 'react'
import { Button, Cell, Column, Row, Table, TableBody, TableHeader, TextField, Label, Input } from 'react-aria-components'
import { initialScorecard, addScore, calculatePlayerScore, TScorecard } from '@/scorecards/golf'
import ClearButton from '@/components/clear-button/clear-button'
import RevealWinner from '../reveal-winner/reveal-winner'
import ScorecardRows from './golf-scorecard-rows'

const localStorageKey = 'golf-state'

interface IState {
  players: string[],
  scorecard: TScorecard,
  totals: number[],
}

interface IAction {
  type: string,
  payload?: any,
}

const initialState: { players: Function, scorecard: Function, totals: Function} = {
  players: () => ['Player1', 'Player2', 'Player3', 'Player4'],
  scorecard: () => initialScorecard(4),
  totals: () => Array.from(Array(4)),
}

const reducer = (state: IState, action: IAction): IState => {
  let newState = {...state}

  switch(action.type) {
    case 'UPDATE_PLAYERS':
      newState.players = action.payload
    break
    case 'UPDATE_SCORECARD':
      newState.scorecard = action.payload.scorecard
      newState.totals =action.payload.totals
    break
    case 'CLEAR_STATE':
      newState = {
        players: initialState.players(),
        scorecard: initialState.scorecard(),
        totals: initialState.totals(),
      }
    break
  }
  
  const stateJson = JSON.stringify(newState)
  localStorage.setItem(localStorageKey, stateJson)

  return newState
}

export default function GolfScorecard() {
  const [loading, setLoading] = useState(true)
  const [showScore, setShowScore] = useState(false)
  const [state, dispatch] = useReducer(reducer, {
    players: initialState.players(),
    scorecard: initialState.scorecard(),
    totals: initialState.totals(),
  })

  useEffect(() => {
    const localStateJson = localStorage.getItem(localStorageKey)

    if (localStateJson) {
      const localState = JSON.parse(localStateJson)

      dispatch({ type: 'UPDATE_PLAYERS', payload: localState.players})
      dispatch({ 
        type: 'UPDATE_SCORECARD', 
        payload: { scorecard: localState.scorecard, totals: localState.totals },
      })
    }

    setLoading(false)
  }, [])

  const onAddScore = (e: React.ChangeEvent<HTMLInputElement>, hole: number, player: number) => {
    const score = e.currentTarget.value.replace(/\D/g, '')
    const newScorecard = [...addScore(score, hole, player, state.scorecard)]
    const newTotals = Array.from(Array(state.players.length).keys()).map((player) => {
      return calculatePlayerScore(player+1, newScorecard)
    })

    dispatch({ type: 'UPDATE_SCORECARD', payload: { scorecard: newScorecard, totals: newTotals } })
  }

  const onEnterPlayerName = (e: React.ChangeEvent<HTMLInputElement>, playerIndex: number) => {
    const newPlayers = [...state.players]
    newPlayers[playerIndex] = e.currentTarget.value

    dispatch({ type: 'UPDATE_PLAYERS', payload: newPlayers })
  }

  const clearBoard = () => {
    dispatch({ type: 'CLEAR_STATE' })
    
    if (showScore) setShowScore(false)
  }

  if (loading) return (<p className='text-center'>loading...</p>)

  return (
    <div className='flex flex-col items-center'>
      <Table aria-label='Golf scorecard'>
        <TableHeader className='hidden'>  
          <Column isRowHeader>Hole</Column>
          {state.players.map((c: string) => (
            <Column key={`header${c}`}>Name</Column>
          ))}
        </TableHeader>
        <TableBody>
          <Row key='column-names'>
            <Cell className='w-12 font-bold text-center'><span>Hole</span></Cell>
            { state.players.map((p: string, i: number) => (
              <Cell key={p+i} className='font-bold border-solid border-l-2 border-primary-gray'>
                <TextField defaultValue={p}>
                  <Label hidden>Player name</Label>
                  <Input onChange={(e) => onEnterPlayerName(e, i)} className='bg-transparent w-16 text-center text-dark-green'/>
                </TextField>
              </Cell>
            ))}
          </Row>
          <ScorecardRows scorecard={state.scorecard} onAddScore={onAddScore} />
          { showScore && (
            <Row key='totals' className='border-solid border-t-2 border-primary-gray'>
              <Cell key='total-label' className='font-bold text-center'><span>Total</span></Cell>
              { state.totals.map((col: number, i: number) => (
                <Cell key={`p${i}total`} className='font-bold text-center border-solid border-l-2 border-primary-gray'>{col || 0}</Cell>
              ))}
            </Row>
          )}
        </TableBody>
      </Table>
      
      <div className='flex flex-row justify-items-start items-start justify-center p-2'>
        { showScore
          ? <Button onPress={() => setShowScore(false)} className='inline-block bg-dark-green text-white py-1 px-3 font-bold rounded-md mr-3'>Hide Score</Button>
          : <RevealWinner players={state.players} totals={state.totals} onClose={() => setShowScore(true)} />
        }
        <ClearButton onAccept={clearBoard} />
      </div>
    </div>
  )
}

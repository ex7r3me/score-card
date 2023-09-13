'use client'

import React, { useState } from 'react'
import { Button, Cell, Column, Row, Table, TableBody, TableHeader, TextField, Label, Input } from 'react-aria-components'

export default function GolfScorecard() {
  const [numUsers, setNumUsers] = useState(4)
  const addUser = () => setNumUsers(numUsers+1)

  return (
    <Table aria-label='Golf scorecard' className='mx-auto'>
      <TableHeader>
        <Column isRowHeader className='w-12'>hole</Column>
        {Array.from(Array(numUsers).keys()).map(c => (
          <Column key={'column'+c} className='border-solid border-l-2 border-primary-gray'>
            <TextField defaultValue={'player'+(c+1)}>
              <Label hidden>Player name</Label>
              <Input className='bg-transparent w-16 text-center text-dark-green'/>
            </TextField>
          </Column>
        ))}
      </TableHeader>
      <TableBody>
        {Array.from(Array(18).keys()).map(hole => {
          hole = hole+1
          return (
            <Row key={'hole'+hole} className='border-solid border-t-2 border-primary-gray'>
              <Cell className='font-bold text-center'>{hole}</Cell>
              {Array.from(Array(numUsers).keys()).map(c => (
                <Cell key={'h'+hole+'p'+c+'-score'} className='border-solid border-l-2 border-primary-gray'>
                  <TextField>
                    <Label hidden>player score for hole {hole}</Label>
                    <Input inputMode='numeric' className='bg-transparent w-16 px-2 text-center text-dark-green font-bold' />
                  </TextField>
                </Cell>
              ))}
            </Row>
          )
        })}
        <Row className='border-solid border-t-2 border-primary-gray'>
          <Cell className='font-bold text-center'>Total</Cell>
          <Cell className='border-solid border-l-2 border-primary-gray'></Cell>
          <Cell className='border-solid border-l-2 border-primary-gray'></Cell>
          <Cell className='border-solid border-l-2 border-primary-gray'></Cell>
          <Cell className='border-solid border-l-2 border-primary-gray'></Cell>
        </Row>
      </TableBody>
    </Table>
  )
}
import { Button, Cell, Column, Row, Table, TableBody, TableHeader, TextField, Label, Input } from 'react-aria-components'
import { TScorecard } from '@/scorecards/golf'

const ScorecardRows = ({ scorecard, onAddScore }: { scorecard: TScorecard, onAddScore: (e: React.ChangeEvent<HTMLInputElement>, hole: number, player: number) => void }) => {
  return (
    <>
      { scorecard.map((row: number[], rowIndex: number) => {
        const hole = rowIndex+1
        return (
          <Row key={`hole${hole}`} className='border-solid border-t-2 border-primary-gray'>
            {row.map((col: number, i: number) => {
              if (i === 0) {
                return (
                  <Cell key={`hole${hole}scores`} className='text-center'>{col}</Cell>
                )
              }
              
              return (
                <Cell key={`'hole${hole}player${i}score`} className='border-solid border-l-2 border-primary-gray'>
                  <TextField>
                    <Label hidden>{`player score for hole ${row[0]}`}</Label>
                    <Input 
                      inputMode='numeric' 
                      className='bg-transparent w-16 px-2 text-center text-dark-green'
                      value={col || ''}
                      onChange={(e) => onAddScore(e,hole,i)}
                    />
                  </TextField>
                </Cell>
              )
            })}
          </Row>
        )
      })}
    </>
  )
}

export default ScorecardRows

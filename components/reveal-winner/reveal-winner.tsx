'use client'

import { Button } from 'react-aria-components'
import { Dialog } from '@headlessui/react'
import { TrophyIcon } from '@heroicons/react/24/outline'
import { useState } from 'react'

export default function RevealWinner(
  { players, totals, onClose, gameName = 'golf' }: { players: string[], totals: number[], onClose?: () => void, gameName?: string }
) {
  const [isOpen, setIsOpen] = useState(false)

  const playerScores = players.map((player, i) => {
    return {
      name: player,
      score: totals[i],
    }
  })

  if (gameName === 'golf')
    playerScores.sort((a, b) => (a.score > b.score ? 1 : -1))
  else if (gameName = 'yahtzee')
    playerScores.sort((a, b) => (a.score < b.score ? 1 : -1))


  const close = () => {
    if (onClose) onClose()
    setIsOpen(false)
  }

  const hasScores = playerScores.reduce((total, p) => total += p.score || 0, 0) > 0
  const tiedWinners = playerScores.filter(p => p.score === playerScores[0].score)

  return (
    <>
      <Button onPress={() => setIsOpen(true)} className='inline-block bg-dark-green text-white py-1 px-3 font-bold rounded-md mr-3'>Reveal winner</Button>

      {isOpen && (<div className='bg-black/70 fixed z-20 top-0 left-0 w-full h-full' aria-hidden="true" />)}

      <Dialog open={isOpen} onClose={() => setIsOpen(false)} className='fixed z-30 inset-0 flex items-center justify-center'>
        <Dialog.Panel className='bg-light-green p-4 rounded-2xl flex flex-col items-center '>
          {hasScores && (
            <>
              <Dialog.Title className='text-3xl font-bold'>And the {tiedWinners.length > 1 ? 'winners are!' : 'winner is!'}</Dialog.Title>
              <TrophyIcon className='w-20 h-20 mt-4 mb-4 animate-wiggle' />
              <ol className='mb-4 flex flex-col items-center'>
                {playerScores.map((player, i) => {
                  let classnames = ''

                  if (i === 0 || tiedWinners.includes(player)) classnames = 'text-2xl font-bold mb-2'

                  return (
                    <li key={player.name + player.score} className={classnames}>
                      {player.name + ' with ' + player.score + 'p'}
                    </li>
                  )
                })}
              </ol>
            </>
          )}
          {!hasScores && (
            <>
              <Dialog.Title className='text-3xl font-bold'>Cant find any scores</Dialog.Title>
              <Dialog.Description className='p-4'>
                You need to add some scores to the board to calculate who won.
              </Dialog.Description>
            </>
          )}
          <div>
            <Button onPress={() => close()} className='bg-accent-gray text-white py-1 px-3 font-bold rounded-md'>Close</Button>
          </div>
        </Dialog.Panel>
      </Dialog>
    </>
  )
}

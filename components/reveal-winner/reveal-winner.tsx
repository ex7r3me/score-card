'use client'

import { useState } from 'react'
import { Dialog } from '@headlessui/react'
import { TrophyIcon } from '@heroicons/react/24/outline'
import { Button } from 'react-aria-components'

export default function RevealWinner(
  { players, totals, onClose }: { players: string[], totals: number[], onClose?: () => void }
) {
  const [isOpen, setIsOpen] = useState(false)

  const playerScores = players.map((player, i) => {
    return {
      name: player,
      score: totals[i],
    }
  })
  playerScores.sort((a, b) => (a.score > b.score ? 1 : -1))

  const close = () => {
    if (onClose) onClose()
    setIsOpen(false)
  }

  return (
    <>
      <Button onPress={() => setIsOpen(true)} className='inline-block bg-dark-green text-white py-1 px-3 font-bold rounded-md mr-3'>Reveal winner</Button>
      
      { isOpen && (<div className='bg-black/70 fixed z-20 top-0 left-0 w-full h-full' aria-hidden="true" />)}

      <Dialog open={isOpen} onClose={() => setIsOpen(false)} className='fixed z-30 inset-0 flex items-center justify-center'>
        <Dialog.Panel className='bg-light-green p-4 rounded-2xl flex flex-col items-center '>
          <Dialog.Title className='text-3xl font-bold'>And the winner is!</Dialog.Title>
          <TrophyIcon className='w-20 h-20 mt-2 mb-2' />
          <ol className='mb-4 flex flex-col items-center'>
            { playerScores.map((player, i) => {
              let classnames = ''
              if (i === 0) classnames = 'text-3xl font-bold'
              return (
                <li key={player.name+player.score}className={classnames}>
                  {player.name + ' ' + player.score  + 'p'}
                </li>
              )
            })}
          </ol>
          <div>
            <Button onPress={() => close()} className='bg-accent-gray text-white py-1 px-3 font-bold rounded-md'>Close</Button>
          </div>
        </Dialog.Panel>
      </Dialog>
    </>
  )
}
'use client'

import { useState } from 'react'
import { Dialog } from '@headlessui/react'
import { TrashIcon } from '@heroicons/react/24/outline'

export default function VerificationDialog({ onAccept }: { onAccept: () => void }) {
  const [isOpen, setIsOpen] = useState(false)

  const handleSelection = (accept: boolean) => {
      if (accept) onAccept()

      setIsOpen(false)
  }

  return (
    <>
      <button onClick={() => setIsOpen(true)} className='inline-block bg-accent-gray text-white py-1 px-3 font-bold rounded-md' aria-label='clear board'>
        <TrashIcon aria-hidden="true" focusable='false' className='w-6 h-6 text-white' />
      </button>
      { isOpen && (<div className='bg-black/70 fixed z-20 top-0 left-0 w-full h-full' aria-hidden="true" />)}
      <Dialog open={isOpen} onClose={() => setIsOpen(false)} className='fixed z-30 inset-0 flex items-center justify-center'>
        <Dialog.Panel className='bg-light-green p-4 rounded-2xl flex flex-col items-center '>
          <Dialog.Title className='text-3xl font-bold'>Clear the board?</Dialog.Title>
          <Dialog.Description className='p-4'>
            Are you sure you want to clear the board?
          </Dialog.Description>
          <div>
            <button onClick={() => handleSelection(true)} className='bg-dark-green text-white py-1 px-3 font-bold rounded-md mr-3'>Yes</button>
            <button onClick={() => handleSelection(false)} className='bg-accent-gray text-white py-1 px-3 font-bold rounded-md'>No</button>
          </div>
        </Dialog.Panel>
      </Dialog>
    </>
  )
}

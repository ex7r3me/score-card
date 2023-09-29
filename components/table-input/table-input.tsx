'use client'

import { Input, InputProps, Label, TextField } from 'react-aria-components'
import { JSX, RefAttributes } from 'react';

export default function TableInput(props: JSX.IntrinsicAttributes & InputProps & RefAttributes<HTMLInputElement>) {

  return (
    <TextField>
      <Input {...{...props, value: props.value || ''}} className='w-16 px-2 font-bold text-center bg-transparent text-dark-green' />
    </TextField>
  )
}

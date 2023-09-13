'use client'

import { JSX, RefAttributes, useState } from 'react';
import { TextField, Label, Input, InputProps } from 'react-aria-components'

export default function TableInput(props: JSX.IntrinsicAttributes & InputProps & RefAttributes<HTMLInputElement>) {
  const [overlay, setOverlay] = useState(false);

  return (
    <TextField>
      <Label hidden>player score for hole </Label>
      <Input {...props} className='w-16 px-2 font-bold text-center bg-transparent text-dark-green' />
    </TextField>

  );
}

'use client'

import { ClassAttributes, InputHTMLAttributes, JSX, useState } from 'react';

export default function TableInput(props: JSX.IntrinsicAttributes & ClassAttributes<HTMLInputElement> & InputHTMLAttributes<HTMLInputElement>) {
  const [overlay, setOverlay] = useState(false);

  return (
    <input {...props} className="w-12 bg-transparent"/>
  );
}

'use client'

import { useContext, useState } from 'react';

import Link from "next/link";
import MainMenu from "../main-menu/main-menu";
import { ThemeContext } from '@/context/theme-context';
import { Button } from 'react-aria-components';

export default function Navigation() {
  const [overlay, setOverlay] = useState(false);
  const { theme, setTheme } = useContext(ThemeContext)

  return (
    <div className='fixed inset-0 z-30 h-3'>
      {overlay && <div className="transition-opacity bg-gray-500 bg-opacity-75"></div>}
      <nav role="navigation" className="fixed w-full z-10 flex items-center align-middle h-14 bg-primary-gray">
        <MainMenu onToggle={() => {setOverlay(!overlay)}}/>
        <Link
          href="/"
          className="inline-block m-auto text-base font-bold uppercase text-beige"
        >
          Scorecard
        </Link>
        <div>
          { theme === 'light'
            ? <Button onPress={() => setTheme('dark')}>dark</Button>
            : <Button onPress={() => setTheme('light')}>Light</Button>
          }
        </div>
      </nav>
    </div>
  );
}

'use client'

import { useContext, useState } from 'react';

import Link from "next/link";
import MainMenu from "../main-menu/main-menu";
import { ThemeContext } from '@/context/theme-context';
import { Button } from 'react-aria-components';
import { MoonIcon, SunIcon } from '@heroicons/react/24/solid'

export default function Navigation() {
  const [overlay, setOverlay] = useState(false);
  const { theme, toggleTheme } = useContext(ThemeContext)

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
            ? (<Button onPress={toggleTheme} className='p-1 mr-3 text-white rounded-md bg-accent-gray'>
                <MoonIcon className='w-8 h-8' />
              </Button>)
            : (<Button onPress={toggleTheme} className='p-1 mr-3 text-white rounded-md bg-accent-gray'>
                <SunIcon className='w-8 h-8' />
              </Button>)
          }
        </div>
      </nav>
    </div>
  );
}

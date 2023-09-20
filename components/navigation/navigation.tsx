'use client'

import { useState } from 'react';

import Link from "next/link";
import MainMenu from "../main-menu/main-menu";

export default function Navigation() {
  const [overlay, setOverlay] = useState(false);

  return (
    <div>
      {overlay && <div className="fixed inset-0 z-10 transition-opacity bg-gray-500 bg-opacity-75"></div>}
      <nav role="navigation" className="fixed w-full z-10 flex items-center align-middle h-14 bg-primary-gray">
        <MainMenu onToggle={() => {setOverlay(!overlay)}}/>
        <Link
          href="/"
          className="inline-block m-auto text-base font-bold uppercase text-beige"
        >
          Scorecard
        </Link>
      </nav>
    </div>
  );
}

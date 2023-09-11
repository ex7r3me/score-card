
'use client'
import { Menu, Transition } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid'
import Link from 'next/link';

export default function MainMenu() {
  return (
    <Menu as="div" className="absolute" >
      <Menu.Button className="p-1 ml-3 text-white rounded-md bg-accent-gray">
        {({ open }) => (
          open ? <XMarkIcon className="w-8 h-8" /> : <Bars3Icon className="w-8 h-8" />
        )}

      </Menu.Button>
      <Transition
        enter="transition duration-100 ease-out"
        enterFrom="transform scale-95 opacity-0"
        enterTo="transform scale-100 opacity-100"
        leave="transition duration-75 ease-out"
        leaveFrom="transform scale-100 opacity-100"
        leaveTo="transform scale-95 opacity-0"
      >

      <Menu.Items className="absolute left-0 z-10 w-56 bg-primary-gray">
        <Menu.Item>
          <Link
            className={`flex pl-3 items-center w-full px-2 py-2 text-sm text-white ui-active:bg-blue-500`}
            href="/"
          >
            Home
          </Link>
        </Menu.Item>
        <Menu.Item >
          <Link
            className={`flex pl-3 items-center w-full px-2 py-2 text-sm  text-white ui-active:bg-blue-500`}
            href="/golf"
          >
            Golf
          </Link>
        </Menu.Item>
        <Menu.Item>
          <Link
            className={`flex pl-3 items-center w-full px-2 py-2 text-sm text-white  ui-active:bg-blue-500`}
            href="/yahtzee"
          >
            Yahtzee
          </Link>
        </Menu.Item>
        <Menu.Item >
          <Link
            className={`flex pl-3 items-center w-full px-2 py-2 text-sm text-white  ui-active:bg-blue-500`}
            href="/about"
          >
            About
          </Link>
        </Menu.Item>
      </Menu.Items>
      </Transition>
    </Menu>
  )
}

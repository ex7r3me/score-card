
'use client'
import { Menu } from '@headlessui/react'

export default function MainMenu() {
  return (
    <Menu as="div" className="relative inline-block text-left" >
      <Menu.Button>Menu</Menu.Button>
      <Menu.Items className="absolute left-0 w-56 mt-2 origin-top-right bg-white divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
        <Menu.Item>
          {({ active }) => (
            <a
              className={`flex items-center w-full px-2 py-2 text-sm rounded-md group ${active && 'bg-blue-500'}`}
              href="/"
            >
              Home
            </a>
          )}
        </Menu.Item>
        <Menu.Item >
          {({ active }) => (
            <a
              className={`flex items-center w-full px-2 py-2 text-sm rounded-md group ${active && 'bg-blue-500'}`}
              href="/golf"
            >
              Golf
            </a>
          )}
        </Menu.Item>
        <Menu.Item>
          {({ active }) => (
            <a
              className={`flex items-center w-full px-2 py-2 text-sm rounded-md group ${active && 'bg-blue-500'}`}
              href="/yahtzee"
            >
              Yahtzee
            </a>
          )}
        </Menu.Item>
        <Menu.Item >
          {({ active }) => (
            <a
              className={`flex items-center w-full px-2 py-2 text-sm rounded-md group ${active && 'bg-blue-500'}`}
              href="/about"
            >
              About
            </a>
          )}
        </Menu.Item>
      </Menu.Items>
    </Menu>
  )
}

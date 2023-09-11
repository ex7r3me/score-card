
'use client'
import { Menu } from '@headlessui/react'

export default function MainMenu() {
  return (
    <Menu as="div" className="relative inline-block text-left" >
      <Menu.Button className="pl-5 text-white" >Menu</Menu.Button>
      <Menu.Items className="absolute left-0 w-56 mt-2 origin-top-right bg-primary-gray ">
        <Menu.Item>
          {({ active }) => (
            <a
              className={`flex pl-5 items-center w-full px-2 py-2 text-sm text-white ${active && 'bg-blue-500'}`}
              href="/"
            >
              Home
            </a>
          )}
        </Menu.Item>
        <Menu.Item >
          {({ active }) => (
            <a
              className={`flex pl-5 items-center w-full px-2 py-2 text-sm  text-white ${active && 'bg-blue-500'}`}
              href="/golf"
            >
              Golf
            </a>
          )}
        </Menu.Item>
        <Menu.Item>
          {({ active }) => (
            <a
              className={`flex pl-5 items-center w-full px-2 py-2 text-sm text-white ${active && 'bg-blue-500'}`}
              href="/yahtzee"
            >
              Yahtzee
            </a>
          )}
        </Menu.Item>
        <Menu.Item >
          {({ active }) => (
            <a
              className={`flex pl-5 items-center w-full px-2 py-2 text-sm text-white ${active && 'bg-blue-500'}`}
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

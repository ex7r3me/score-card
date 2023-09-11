
'use client'
import { Menu } from '@headlessui/react'
import { Bars3Icon } from '@heroicons/react/24/solid'

export default function MainMenu() {
  return (
    <Menu as="div" className="absolute" >
      <Menu.Button className="pt-2 pl-2 text-white" ><Bars3Icon className="w-8 h-8" /></Menu.Button>
      <Menu.Items className="absolute left-0 w-56 bg-primary-gray ">
        <Menu.Item>
          {({ active }) => (
            <a
              className={`flex pl-3 items-center w-full px-2 py-2 text-sm text-white ui-active:bg-blue-500`}
              href="/"
            >
              Home
            </a>
          )}
        </Menu.Item>
        <Menu.Item >
          {({ active }) => (
            <a
              className={`flex pl-3 items-center w-full px-2 py-2 text-sm  text-white ui-active:bg-blue-500`}
              href="/golf"
            >
              Golf
            </a>
          )}
        </Menu.Item>
        <Menu.Item>
          {({ active }) => (
            <a
              className={`flex pl-3 items-center w-full px-2 py-2 text-sm text-white  ui-active:bg-blue-500`}
              href="/yahtzee"
            >
              Yahtzee
            </a>
          )}
        </Menu.Item>
        <Menu.Item >
          {({ active }) => (
            <a
              className={`flex pl-3 items-center w-full px-2 py-2 text-sm text-white  ui-active:bg-blue-500`}
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

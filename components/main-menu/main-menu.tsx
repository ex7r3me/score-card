import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid'
import { Menu, Transition } from '@headlessui/react'
import Link from 'next/link';

interface MainMenuProps {
  onToggle?: () => void;
}

export default function MainMenu({ onToggle }: MainMenuProps) {
  return (
    <Menu as="div" className="absolute" >
      {({ open }) => (
        <>
          { open && (<div className='bg-black/70 fixed top-14 left-0 w-full h-full' aria-hidden="true" />)}
          <Menu.Button className="relative z-10 p-1 ml-3 text-white rounded-md bg-accent-gray" >
            { open ? <XMarkIcon className="w-8 h-8" /> : <Bars3Icon className="w-8 h-8" /> }
          </Menu.Button>
          <Transition
            enter="transition duration-100 ease-out"
            enterFrom="transform scale-95 opacity-0"
            enterTo="transform scale-100 opacity-100"
            leave="transition duration-75 ease-out"
            leaveFrom="transform scale-100 opacity-100"
            leaveTo="transform scale-95 opacity-0"
          >
            <Menu.Items className="absolute top-0 left-0 z-10 w-56 pt-5 pb-5 mt-1 bg-primary-gray rounded-br-md">
              <Menu.Item >
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
        </>
      )}
    </Menu>
  )
}

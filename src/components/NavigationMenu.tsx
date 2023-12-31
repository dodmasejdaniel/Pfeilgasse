"use client"
import React, { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { Bars4Icon } from "@heroicons/react/24/solid"
import Link from 'next/link'

type Props = {}


const links = [
    {
        text: "Profile",
        href: "/profile"
    },

    {
        text: "Show Bookings",
        href: "/bookings"
    },
    {
        text: "Book",
        href: "/book"
    },

]
function NavigationMenu({ }: Props) {
    return (
        <Menu as="div" className="relative inline-block text-left">
            <div>
                <Menu.Button className="inline-flex w-full justify-center rounded-full  bg-opacity-20 p-2 text-sm font-medium text-white hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
                    <Bars4Icon
                        className="h-5 w-5 text-slate-700 hover:text-slate-900"
                        aria-hidden="true"
                    />
                </Menu.Button>
            </div>
            <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
            >
                <Menu.Items className="absolute flex flex-col mt-2 w-56 origin-top-left divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <>
                        {links.map((link) => (
                            <Menu.Item key={link.href} className="p-2">
                                {({ active }) => (
                                    <Link href={link.href}>
                                        {link.text}
                                    </Link>
                                )}
                            </Menu.Item>
                        ))}
                    </>
                    <Menu.Item>
                        {({ active }) => (
                            <button className='text-red-500 font-semibold text-left p-2'>
                                Log out
                            </button>
                        )}
                    </Menu.Item>

                    <Menu.Item>
                        {({ active }) => (
                            <div className='p-2'>
                                <button>DE</button> | <button>EN</button>
                            </div>
                        )}
                    </Menu.Item>

                </Menu.Items>
            </Transition>
        </Menu>
    )
}

export default NavigationMenu
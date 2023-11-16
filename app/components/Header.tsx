'use client'

import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import { RxHamburgerMenu } from "react-icons/rx";

interface HeaderList {
    id: number;
    name: string;
    url: string;
}

export const Header = () => {
    const headerlist = [
        {
            id: 1,
            name: 'NEW',
            url: '/'
        },
        {
            id: 2,
            name: 'SHOP',
            url: '/shop'
        },
        {
            id: 3,
            name: 'CART',
            url: '/cart'
        }
    ]
    return (
        <div>
            <header>
                <nav className="  px-4 lg:px-6 py-10 text-black flex justify-between fixed top-0 w-full">
                    <Image src="/shoeNext.png" alt="logo" width={100} height={100} />
                    <ul className="flex gap-x-16 align-middle">
                        {headerlist.map((headerlist: HeaderList) => (
                            <li key={headerlist.id} className='hidden  hover:text-yellow-400 text-white text-[13px] p-4 active:text-yellow-400  lg:block md:block'>
                                <Link href={headerlist.url}>
                                    <h2 className="">{headerlist.name}</h2>
                                </Link>
                            </li>
                        ))}
                        <div className='text-white text-5xl cursor-pointer'>
                            <RxHamburgerMenu />
                        </div>
                    </ul>
                </nav>
            </header>
        </div>
    )
}

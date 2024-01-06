import React from 'react'
import { AppleIcon, MenuIcon } from 'lucide-react'
import Link from 'next/link'

export default function page() {
    return (
        <header className="flex justify-between items-center p-6">
            <AppleIcon className="text-white w-8 h-8" />
            <nav className="flex space-x-4">
                <Link className="block" href="/">
                    NEW
                </Link>
                <Link className="block" href="/shop">
                    SHOP
                </Link>
                <Link className="block" href="addtocart">
                    CART
                </Link>
                <MenuIcon className="text-white w-6 h-6" />
            </nav>
        </header>
    )
}

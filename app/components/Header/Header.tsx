'use client'
import * as React from "react";
import { useRef } from "react";
import Image from 'next/image';
import Link from 'next/link';
import { motion, useCycle } from 'framer-motion';
import { useDimensions } from './use-dimensions';
import { Navigation } from "./Navigation";

interface HeaderList {
    id: number;
    name: string;
    url: string;
}

interface SidebarVariants {
    open: (height?: number) => { clipPath: string; transition: { type: string; stiffness: number; restDelta: number } };
    closed: { clipPath: string; transition: { delay: number; type: string; stiffness: number; damping: number } };
}

export const Header: React.FC = () => {
    const [isOpen, toggleOpen] = useCycle(false, true);
    const containerRef = useRef<HTMLDivElement>(null);
    const { height } = useDimensions(containerRef);

    const Path = (props: any) => (
        <motion.path
            fill="transparent"
            strokeWidth="3"
            stroke="#fff"
            strokeLinecap="round"
            {...props}
        />
    );

    const headerlist: HeaderList[] = [
        {
            id: 1,
            name: 'NEW',
            url: '/',
        },
        {
            id: 2,
            name: 'SHOP',
            url: '/shop',
        },
        {
            id: 3,
            name: 'CART',
            url: '/cart',
        },
    ];

    const sidebar: SidebarVariants = {
        open: (height = 1000) => ({
            clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
            transition: {
                type: 'spring',
                stiffness: 20,
                restDelta: 2,
            },
        }),
        closed: {
            clipPath: 'circle(0px at 0px 0px)',
            transition: {
                delay: 0.5,
                type: 'spring',
                stiffness: 400,
                damping: 40,
            },
        },
    };

    return (
        <div>
            <header>
                <nav className="px-4 lg:px-6 py-10 text-black flex justify-between fixed top-0 w-full ">
                    <Image src="/shoeNext.png" alt="logo" width={100} height={100} />
                    <ul className="flex gap-x-16 align-middle">
                        {headerlist.map((headerItem: HeaderList) => (
                            <li key={headerItem.id} className="hidden hover:text-primary text-white text-[13px] p-4 active:text-primary lg:block md:block transition-all ease-in-out duration-500">
                                <Link href={headerItem.url}>
                                    <h2>{headerItem.name}</h2>
                                </Link>
                            </li>
                        ))}
                        <div className="text-white text-5xl cursor-pointer">
                            <motion.nav
                                initial={false}
                                animate={isOpen ? 'open' : 'closed'}
                                custom={height}
                                ref={containerRef}
                            >
                                <Navigation />
                                <motion.div className="absolute top-0 left-0 bottom-0 right-0 w-[300px] h-[100vh] bg-white bg-primary text-#fff" variants={sidebar} />
                                <button onClick={() => toggleOpen()}>
                                    <svg width="35" height="35" viewBox="0 0 23 23">
                                        <Path
                                            variants={{
                                                closed: { d: "M 2 2.5 L 20 2.5" },
                                                open: { d: "M 3 16.5 L 17 2.5" }
                                            }}
                                        />
                                        <Path
                                            d="M 2 9.423 L 20 9.423"
                                            variants={{
                                                closed: { opacity: 1 },
                                                open: { opacity: 0 }
                                            }}
                                            transition={{ duration: 0.1 }}
                                        />
                                        <Path
                                            variants={{
                                                closed: { d: "M 2 16.346 L 20 16.346" },
                                                open: { d: "M 3 2.5 L 17 16.346" }
                                            }}
                                        />
                                    </svg>
                                </button>
                            </motion.nav>
                        </div>
                    </ul>
                </nav>
            </header>
        </div>
    );
};

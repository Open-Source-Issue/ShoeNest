import * as React from "react";
import { motion } from "framer-motion";
import { MenuItem } from "./MenuItem";

interface HeaderList {
  id: number;
  name: string;
  url: string;
}

const variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 }
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 }
  }
};

export const Navigation = () => (
  <motion.ul className="p-[25px] absolute top-[100px] width-[230px] left-0 z-10" variants={variants}>
    {headerlist.map(i => (
      <MenuItem i={i} key={i.id} />
    ))}            
  </motion.ul>
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


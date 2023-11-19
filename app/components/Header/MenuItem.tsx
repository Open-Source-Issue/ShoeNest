import * as React from "react";
import { motion } from "framer-motion";
import Link from 'next/link';



const variants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 }
    }
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 }
    }
  }
};

const colors = ["#FF008C", "#D309E1", "#9C1AFF", "#7700FF", "#4400FF"];

export const MenuItem = ({i}) => {
  const style = { border: `2px solid ${colors[i]}` };
  return (
    <motion.li className="list-none mb-[20px] flex align-middle cursor-pointer"
      variants={variants}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
     <h2 className="text-white font-normal text-[22px]">{i.name}</h2>
        {/* <div className="w-[40px] h-[40px] rounded-md flex-[40px ] mr-[20px]" style={style} /> */}
        {/* <div className="rounded-sm w-[200px] h-[20px] flex-1" style={style} /> */}
    </motion.li>
  );
};

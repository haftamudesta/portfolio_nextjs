"use client"
import { motion } from 'framer-motion';

const MenuItem = ({
        children, index, href
}: {
        children:  React.ReactNode,
        index: number,
        href: string,
}) => {
  return (
        <motion.a
        initial={{opacity:0,y:-40}}
        animate={{opacity:1,y:0}}
        whileHover={{scale:1.05}}
        whileTap={{scale:0.95}}
        transition={{
                delay:index*0.5,
                duration:0.3,
                ease:"easeInOut"
        }}
        href={href}
        className="relative overflow-hidden px-2 py-1"
        >
          <span className="text-white font-bold hover:text-blue-600">{children}</span>
        </motion.a>
  )
}

export default MenuItem

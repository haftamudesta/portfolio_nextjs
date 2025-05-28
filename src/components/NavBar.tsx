"use client"
import { motion } from 'framer-motion';
import MenuItem from './MenuItem';
import { useState } from 'react';
import { XMarkIcon, Bars3Icon } from '@heroicons/react/16/solid';


const navLinks = [
  { name: "about me", href: "#about" },
  { name: "skills", href: "#skills" },
  { name: "portfolio", href: "#main-works" },
  { name: "contacts", href: "#main_contact" },
];
export const NavBar = () => {
        const [isOpenMenu, setIsOpenMenu] = useState(false);
      
        return (
          <>
          <div className='fixed w-full max-w-[100vw] z-50 top-0 right-0 left-0'>
            <motion.nav
              className=" bg-gradient-to-r from-blue-800 px-4 to-blue-950 text-white shadow-lg"
              id='navbar'
            >
              <div className="flex items-center justify-between max-w-7xl  px-4 py-3 ">
               
                <div className="flex items-center gap-8">
                  <div className="relative h-8 w-8 rounded-full overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-red-400 animate-spin [mask-image:linear-gradient(transparent,white)]">
                    <div className="absolute inset-[2px] bg-background rounded-full flex items-center justify-center">
                  <span className="font-bold bg-gradient-to-r from-blue-500 to-red-400 bg-clip-text text-transparent">HD</span>
                </div>
              </div>
            </div>
            <span className="font-semibold text-white/90 group-hover:text-blue-500 transition-colors">Haftamu Desta</span>
          </div>
          <div className="hidden sm:flex items-center gap-8">
            <div className="flex items-center gap-6 bg-white/10 px-4 py-2 rounded-full border border-white/5 shadow-lg shadow-indigo-500/20 text-xl font-bold capitalize">
              {navLinks.map((item, i) => (
                <MenuItem key={item.name} index={i} href={item.href}>{item.name}</MenuItem>
              ))}
            </div>
          </div>
          <button 
            className='sm:hidden z-50 p-2 rounded-lg bg-white/10 hover:bg-blue-400 transition-colors'
            onClick={() => setIsOpenMenu(!isOpenMenu)}
          >
            {isOpenMenu ? (
              <XMarkIcon className='h-6 w-6 text-white' />
            ) : (
              <Bars3Icon className='h-6 w-6 text-white' />
            )}
          </button>
        </div>
      </motion.nav>
      {isOpenMenu && (
      <motion.div
          initial={{ opacity: 0, x: -400 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -400 }}
          transition={{ duration: 0.3 }}
          className='sm:hidden inset-x-0 z-40 top-16 pt-24 bg-blue-900/95 backdrop-blur-sm'
        >
        <div className="flex flex-col px-4 space-y-4">
            {navLinks.map((item, i) => (
              <a
                key={i}
                href={item.href}
                onClick={() => setIsOpenMenu(false)}
                className='block px-4 py-3 text-white/90 hover:text-white hover:bg-white/10 rounded-lg transition-colors capitalize font-bold text-lg'
              >
                {item.name}
              </a>
            ))}
          </div>
        </motion.div>
      )}
    </div>
    <div className="h-16"></div>
    </>
    );
};

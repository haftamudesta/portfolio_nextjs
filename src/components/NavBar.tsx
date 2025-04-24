"use client"
import { motion } from 'framer-motion';
import MenuItem from './MenuItem';
import { useState } from 'react';
import { XMarkIcon } from '@heroicons/react/16/solid';
import { Bars3Icon } from '@heroicons/react/16/solid';

const navLinks=[
        {
                name:"about me",
                href:"#about",
        },
        {
                name:"skills",
                href:"#skills",
        },
        {
                name:"portfolio",
                href:"#main-works",
        },
        {
                name:"contacts",
                href:"#main_contact",
        },
];


export const NavBar = () => {
        const [isOpenMenu,setIsOpenMenu]=useState(false)
  return (
    <motion.nav
     className="fixed w-full z-50 bg-linear-45 from-blue-800 to-blue-950 transition-all duration-300 ease-out text-white"
     id='navbar'
    >
        <div className="flex max-w-7xl mx-auto px-6 py-3 items-center justify-between">
        <div className="flex items-center gap-8">
        <div className="relative h-8 w-8 rounded-full overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-red-400 animate-spin [mask-image:linear-gradient(transparent,white)]">
                        <div className="absolute inset-[2px] bg-background rounded-full flex items-center justify-center">
                                <span className="font-bold bg-gradient-to-r from-blue-500 to-red-400 bg-clip-text text-transparent">HD</span>
                        </div>
                </div>
        </div>
        <span className="font-semibold text-content/90 group-hover:text-blue-500 transition-colors">Haftamu Desta</span>
        </div>
        <div className="hidden md:flex items-center gap-6">
                <div className="flex items-center gap-6 bg-background/20 px-4 py-2 rounded-full border border-white/5 shadow-lg shadow-indigo-500 text-xl font-bold capitalize">
                       {navLinks.map((item,i)=>(
                        <MenuItem key={item.name} index={i} href={item.href}>{item.name}</MenuItem>
                       ))}
                </div>
        </div>
        <button className='md:hidden p-2 rounded-lg bg-white/5 hover:bg-blue-400'
        onClick={()=>setIsOpenMenu(!isOpenMenu)}
        >
                {isOpenMenu?(
                        <XMarkIcon className='h-6 w-6 text-white/80' />
                ):(
                        <Bars3Icon className='h-6 w-6 text-white/80' />
                )
                }
        </button>
        </div>
        {isOpenMenu &&(
                <motion.div
                initial={{opacity:0,x:-400}}
                animate={{opacity:1,x:0}}
                transition={{duration:0.5}}
                className='md:hidden mt-4 mb-4 space-y-4 bg-teal-600 w-[200px]'
                >
                        {navLinks.map((item,i)=>(
                                <a key={i} href={item.href}
                                onClick={()=>setIsOpenMenu(false)}
                                className='block px-4 py-2 text-white/80 hover:text-indigo-900 hover:bg-white/10 rounded-lg transition-colors capitalize font-extrabold'
                                >
                                        {item.name}
                                </a>
                        ))}

                </motion.div>
        )}
    </motion.nav>
  )
}


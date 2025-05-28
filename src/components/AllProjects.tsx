"use client"

import Link from 'next/link';
import {useState} from 'react';
import { motion } from "framer-motion";
import { moreProjects } from "@/data/Data";
import Image from "next/image";
import { ArrowTurnRightUpIcon } from "@heroicons/react/16/solid";



const AllProjects = () => {
        const [allProjexts,setAllProjects]=useState(false)
  return (
    <section className='relative'id='main-works'>
        <div className="max-w-7xl py-8 mx-auto">
                <motion.div
                initial={{opacity:0,y:50}}
                whileInView={{opacity:1,y:0}}
                transition={{duration:0.8}}
                className="flex flex-col items-center mb-6"
                >
                        <h1 className="text-white text-3xl md:text-5xl font-black text-center mb-4">More Projects Completed</h1>
                        <div className="flex items-center justify-center w-40 h-2 bg-gradient-to-r from-blue-600 to-pink-600 mb-12"/>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 ">
                                {moreProjects.map((project,index)=>(
                                        <motion.div key={index}
                                        initial={{opacity:0,y:100}}
                                        whileInView={{opacity:1,y:0}}
                                        transition={{
                                                duration:0.6,
                                                delay:index*0.3
                                        }}
                                        whileHover={{
                                                y:-10
                                        }}
                                        className="group relative h-[700px] rounded-4xl overflow-hidden bg-gray-400 border border-white/80 cursor-pointer"
                                        >
                                                <motion.div
                                                whileHover={{scale:1.2}}
                                                transition={{duration:0.1}}
                                                className="h-[250px] relative"
                                                >
                                                        <Image src={project.image} alt={project.title}
                                                        fill
                                                        sizes="(max-width:768px),100vw,33vw"
                                                        className="object-cover" 
                                                        quality={85} 
                                                        priority 
                                                        
                                                        />
                                                       
                                                </motion.div>
                                                <motion.div
                                                transition={{duration:0.3}}
                                                className="h-[400px] p-6 bg-gray-950"
                                                >
                                                        <div className="flex justify-between items-start mb-6 group/title">
                                                        <h1 className="text-3xl text-teal-400 font-bold">
                                                                {project.title}
                                                        </h1>
                                                        <ArrowTurnRightUpIcon className="h-6 w-6 text-white/80 group-hover/title:text-blue-500 transition-colors duration-300" />
                                                        </div>
                                                        <p className="text-white font-bold mb-4">
                                                                {project.description}
                                                        </p>
                                                        <div className="flex flex-wrap gap-4">
                                                        {project.technoloy.map((tech,i)=>(
                                                        <span key={i}
                                                        className="flex px-2 py-1 rounded-full bg-white/40 text-white text-sm border border-white/60 gap-1 text-start"
                                                        >
                                                                <tech.iconName/>
                                                                <span>{tech.name}</span>
                                                        </span>
                                                        ))}
                                                        </div>
                                                       <div className='mt-auto'>
                                                       <div className="mt-8 bg-linear-45 from-teal-500 to-teal-800 hover:bg-teal-100 text-white text-3xl rounded-lg font-bold w-full py-2 cursor-pointer transition-colors duration-200">
                                                       <Link
                                                        href={project.href}
                                                        className="block w-full h-full text-center"
                                                        aria-label={`View ${project.title} on GitHub`}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        >    
                                                                Check on GitHub   
                                                        </Link>
                                                       </div>
                                                       </div>
                                                </motion.div>
                                        </motion.div>
                                ))}
                        </div>
                </motion.div>
                <motion.div
                initial={{opacity:0,y:100}}
                whileInView={{opacity:1,y:0}}
                transition={{duration:0.3,delay:0.4}}
                className="flex justify-center mt-20 relative z-5"
                >
                        <button 
                        onClick={()=>setAllProjects(!allProjexts)}
                        className="relative px-6 py-2 rounded-full bg-gray-900 border border-white hover:border-blue-300"
                        >
                                <span className="text-white font-bold relative z-[1] cursor-pointer">
                                        View All Projects
                                </span>
                                <div className="absolute insent-0 rounded-full bg-gradient-to-r from-blue-700/80 to-purple-500/90 opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer" />
                        </button>
                </motion.div>
        </div>
        <div>
                {allProjexts&&(
                        <AllProjects />
                        
                )}
        </div>
    </section>
  )
}

export default AllProjects
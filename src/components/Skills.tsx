"use Client"

import { skills } from "@/data/Data"
import { motion } from "framer-motion"
import { FaArrowTurnDown } from "react-icons/fa6";

const Skills = () => {
  return (
       
        <main className='relative'id='skills'>
        <div className="max-w-7xl py-8 mx-auto">
                <motion.div
                initial={{opacity:0,x:200}}
                whileInView={{opacity:1,x:0}}
                transition={{duration:0.9}}
                 className="flex flex-col items-center mb-6"
                >
                        <h1 className="text-white text-3xl md:text-5xl font-black text-center mb-4">My Skills</h1>
                        <div className="w-40 h-2 bg-gradient-to-r from-blue-600 to-pink-600 mb-12 text-center"/>
                </motion.div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                {skills.map((skill,index)=>(
                        <motion.div key={index}
                        initial={{opacity:0,x:-200}}
                        whileInView={{opacity:1,x:0}}
                        transition={{
                                duration:0.6,
                                delay:index*0.3
                                }}
                        whileHover={{
                                y:-30
                        }}
                        className="group relative h-[300px] rounded-4xl overflow-hidden bg-linear-45 from-blue-950 to-blue-800 border border-white/80 cursor-pointer text-white"
                        >
                                <motion.div
                                whileHover={{scale:1.2}}
                                transition={{duration:0.1}}
                                className="relative"
                                >
                                        <motion.div className="flex items-center justify-center gap-8">
                                                <h1 className="text-white py-8">{skill.skillCategory}
                                                </h1>
                                                <FaArrowTurnDown className="text-teal-300 font-size-[40px]"/>
                                        </motion.div> 
                                </motion.div>
                                <div className="flex flex-wrap gap-4">
                                {skill.technologies.map((tech,i)=>{
                                        
                                        return (
                                        <motion.div
                                        initial={{opacity:0,y:100}}
                                        whileInView={{opacity:1,y:0}}
                                        transition={{
                                                duration:0.6,
                                                delay:i*0.5
                                                }}
                                        whileHover={{
                                                y:-20
                                        }}
                                        key={i}
                                        >
                                                <div className="flex flex-wrap items-center border-2 border-gray-500 rounded-full gap-2 px-2 py-1 hover:bg-indigo-700 dark:hover:bg-gray-800 transition-colors duration-200">
                                                        <tech.iconName
                                                        className={`${tech.color} text-xl font-bold`}/>
                                                        <p className={`font-semibold`}>
                                                                {tech.name}
                                                        </p>
                                                </div>

                                        </motion.div>
                                )})}
                                </div>

                        </motion.div>
                ))}
              </div>                          
    </div>
    </main>
  )
}
export default Skills
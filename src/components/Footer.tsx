import { motion } from "framer-motion"
import Link from "next/link"
import { BsGithub } from "react-icons/bs";
import { BsFacebook } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
const Footer = () => {
  return (
    
    <motion.footer 
    initial={{opacity:0,x:-300}}
    whileInView={{opacity:1,x:0}}
    transition={{duration:1.8}}
    className="border-t border-b border-gray-700 bg-gray-400/30"
    >
        <div className="max-w-7xl py-16 mx-auto">
        <div className="flex items-center justify-center gap-4">
        <a href="https://github.com/haftamudesta" className="main_footer-icon">
          <BsGithub />
        </a>
        <a href="https://www.linkedin.com/in/haftamudesta"
        className="main_footer-icon"
        >
           <BsLinkedin />
        </a>
        <a
        href="https://www.facebook.com/haftamudesta"
        className="main_footer-icon"
        >
          <BsFacebook />
        </a>
     </div>
        </div>
        <Link href='#hero'
        className="cursor-pointer"
        >
        <div className="flex items-center justify-center">
        <div className='relative flex items-center w-[120px] aspect-square
         group:'>
              <motion.div
              initial={{scale:0.95}}
              animate={{scale:0.8}}
              transition={{
                duration:2,
                repeat:Infinity,
                repeatType:"mirror"
              }}
              className='absolute inset-0 rounded-3xl bg-gradient-to-r from-blue-800/40 via-purple-500/40 to-red-300/40 opacity-50'
              />
              <motion.div
                          animate={{y:[0,10,0]}}
                          transition={{
                            duration:6,
                            repeat:Infinity,
                            ease:"easeInOut"
                          }}
                          className='relative w-full aspect-square rounded-3xl overflow-hidden border border-white/80 bg-blue-600/20 backdrop-blur-md flex justify-center cursor-pointer'
                          >
                              <button
                              className='scale-125 group-hover:scale-100 transition-transform duration-700 rounded-full text-teal-400 font-bold z-50 px-2px'
                              >
                                Back To Top
                              </button>     
              </motion.div>
        </div>
        </div>
        </Link>
        <motion.p 
        initial={{opacity:0.5,x:"100vw"}}
        whileInView={{opacity:1,x:"-100vw"}}
        transition={{
                duration:12,
                repeat:Infinity,
                delay:1.2,
                type: "spring", 
                stiffness: 50, 
        }}
        className="text-white font-bold flex items-center justify-center mt-6 mb-8">
        ©{new Date().getFullYear()} Haftamu Desta. All rights reserved
      </motion.p>
    </motion.footer>
    
  )
}

export default Footer

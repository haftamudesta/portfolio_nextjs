import {motion, useScroll, useTransform} from "framer-motion"
import Image from 'next/image'
import { Button } from './Button'
import  {MovingParticleCanvas} from '@/hooks/MovingEffects';
import Link from "next/link";

const HeroSection = () => {
  const {scrollY}=useScroll();
  const y=useTransform(scrollY,[0,500],[0,100])
  return (
    <section className='min-h-screen relative overflow-hidden bg-black'
    id='about'
    >
      <MovingParticleCanvas />
      <div className="max-h-7xl mx-auto px-6 py-32">
        <div className="flex flex-col-reverse lg:flex-row gap-16">
          <motion.div 
          initial={{opacity:0,x:-100}}
          whileInView={{opacity:1,x:1}}
          transition={{
            duration:1,
            ease:"easeOut"
          }}
          className="relative group lg:w-2/3">
            <motion.h1
            initial={{opacity:0,y:20}}
            whileInView={{opacity:1,y:0}}
            transition={{
              duration:0.8,
              delay:0.5
            }}
             className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-blue-800 via-purple-500 to-red-300 bg-clip-text text-transparent mb-6">
              Full Stack
              <br />
              <motion.span
             initial={{opacity:0,y:20}}
             whileInView={{opacity:1,y:0}}
             transition={{
               duration:0.8,
               delay:0.9}}
               className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-blue-800 via-purple-500 to-red-300 bg-clip-text text-transparent mb-6"
             >
              Web Developer
             </motion.span>
             </motion.h1>
             <motion.p
             initial={{opacity:0,y:20}}
             whileInView={{opacity:1,y:0}}
             transition={{
               duration:0.8,
               delay:1.2}}
               className='text-xl text-white/60 mb-6 mt-2'
             >
              I am not Only Full Stack Web Developer but also Electrical Engineer,Specialized in <span className="text-teal-600 font-bold underline">MERN STACK</span> ,<span className="text-teal-600 font-bold underline">PERN STACK</span> ,<span className="text-teal-600 font-bold underline">RUBY on RAILS</span>  and<span className="text-teal-600 font-bold underline ml-3">MICROSERVICES.</span> 
             </motion.p>
             <div className='flex gap-2 md:gap-6 items-center'>
             <motion.div
             initial={{opacity:0,y:20}}
             whileInView={{opacity:1,y:0}}
             transition={{
               duration:0.8,
               delay:1.3}}
               whileHover={{scale:1.08,transition:{duration:0.3}}}
               className='text-xl px-2 py-1 overflow-hidden md:px-6 md:py-4  rounded-lg bg-blue-500/40 border-white/20 hover:bg-blue-500 transition-all'
             >
              <Link href="#main-works" className='text-white/80 hover:text-white font-bold'>Explore My Works</Link>
             </motion.div>
             <Link href="#main_contact"><Button>Contact Me</Button></Link>
             </div>
          </motion.div>
          <motion.div
          initial={{opacity:0,y:100}}
          animate={{opacity:1,y:0}}
          transition={{
            duration:1.1,
            delay:0.6,ease:"easeOut"}}
            style={{y}}
            className='lg:w-1/3 relative'
          >
            <div className='relative w-full aspect-square group:'>
              <motion.div
              initial={{scale:0.95}}
              animate={{scale:1.2}}
              transition={{
                duration:2,
                repeat:Infinity,
                repeatType:"mirror"
              }}
              className='absolute inset-0 rounded-3xl bg-gradient-to-r from-blue-800/40 via-purple-500/40 to-red-300/40 opacity-50'
              />
            <motion.div
            animate={{y:[0,-20,0]}}
            transition={{
              duration:6,
              repeat:Infinity,
              ease:"easeInOut"
            }}
            className='relative w-full aspect-square rounded-3xl overflow-hidden border border-white/80 bg-blue-600/20 backdrop-blur-md'
            >
              <Image src="/haftamu.jpg" alt='haftamu'
              fill
              className='object-cover scale-125 group-hover:scale-100 transition-transform duration-700'
              sizes="(max-width: 768px) 100vw, 50vw" 
              quality={85} 
              priority 
               />
               <div className='absolute inset-0 bg-gradient-to-t from-black/60 to-transparent' />
               <motion.div
               initial={{opacity:0}}
               animate={{opacity:1}}
               transition={{
                delay:0.6
               }}
               className='absolute bottom-8 left-8'
               >
                <div className='text-2xl font-bold text-white'>
                  From
                  <motion.span
                  animate={{backgroundPosition:['0% 50%','100% 50%']}}
                  transition={{
                    duration:3,
                    repeat:Infinity,
                    repeatType:"mirror"
                  }}
                  style={{
                    backgroundSize:"200%,200%"
                  }}
                  className='block bg-gradient-to-r from-blue-600 to-pink-500 bg-clip-text text-transparent'
                  >
                    Ethiopia
                  </motion.span>
                </div>
               </motion.div>
            </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
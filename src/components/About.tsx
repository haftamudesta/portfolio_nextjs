import { motion } from "framer-motion"
import Stats from "./Stats"
import PersonalInfo from "./PersonalInfo"
//import cv from "/Resume.pdf"
import { FaDownload } from "react-icons/fa";
import styles from "./About.module.css"

const About = () => {
  return (
    <motion.div
    initial={{opacity:0,y:100}}
    whileInView={{opacity:1,y:0}}
    transition={{duration:0.8}}
    className="mt-12 p-12"
    id="about"
    >
        <motion.h1 
        initial={{
                opacity:0,
                x:-100,
            }}
            whileInView={{
              opacity:1,
              x:0,
              color:'#f18e12',
              transition:{
                type:'spring',
                dumping:12,
                stiffness:200,
                repeat:Infinity
              }
            }}
          
        className="text-center">
              About <span>Me</span>
        </motion.h1>
        <div className={styles.about__container}>
                <motion.div
                className={styles.about__info}
                >
                        <PersonalInfo/>
                        <a href="/Resume.pdf" download className={styles.download_button} >
                        Download CV{' '} 
                        <span className={styles.butto__icon}>
                                <FaDownload/>
                        </span>
                        </a>
                </motion.div>
                <motion.div
                className={`${styles.about__stats} sm:w-[200px]`}
                >
                        <Stats />
                </motion.div>
        
        </div>
    </motion.div>
  )
}

export default About

import { easeInOut, motion } from "framer-motion"

export const Button = ({children}:{
        children:React.ReactNode
}) => {
  return (
        <motion.div className=" text-2xl px-3 py-1 md:ml-16 mt-6 md:px-4 md:py-2 rounded-full md:text-4xl text-white bg-sky-500"
        animate={{
          scale:[1,1.2,1],
          backgroundColor:["#3b82f6","6Ba5fA","#3b82f6"],
        }}
        transition={{duration:0.8,ease:easeInOut,repeat:Infinity}}
        whileTap={{backgroundColor:'crimson'}}
        drag
        dragConstraints={{
          top:-50,
          left:-50,
          bottom:50,
          right:50
        }}
        >
          {children}
        </motion.div>
  )
}
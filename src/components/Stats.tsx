import { stats } from "@/data/Data";
import parse from 'html-react-parser';
import { motion } from "framer-motion"

const Stats = () => {
  return (
    <motion.main
    className ="flex flex-col md:justify-center md:items-center"
    >
        {stats.map(({number,title},index)=>{
            return (
                <div className="border-2 border-gray-400 mb-4 w-[250px] md:w-[350px] h-[200px] md:h-[150px] md:pl-4" key={index}>
                    <button className="p-4  text-pink-300 rounded-full font-bold font-size-[50px] border border-pink-400 border-r-red-700 border-l-slate-700 mt-2">{number}</button>
                    <p className="text-white">{parse(title)}</p>
                </div>
            )
        })}
    </motion.main>
  )
}

export default Stats
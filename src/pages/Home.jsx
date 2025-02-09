import { motion } from "framer-motion";
export function Home() {
        
   return (
   <div className="name">
      <h1 className="underline" >Zahkiera Foster</h1>

      <motion.h4
         className="welcome"
         initial={{ opacity: 0, y: -20 }}
         animate={{ opacity: 1, y: 0 }}
         transition={{ delay: 1.2, duration: 0.6 }}
      >
         Welcome to my Portfolio
      </motion.h4>
   </div>
   )

}
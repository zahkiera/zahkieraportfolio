import "./Experience.css"
import { motion } from 'framer-motion'
export function Experience() {

    return (
        <>
        <div className="title">
            <h2 className="fade-in">Education & Experience</h2>            
        </div>
      <div className="ex-container"></div>
        <div className="center-1">
            <div className="list-wrapper">
                <h3>Florida Polytechnic University</h3>
                <li>3.83 GPA</li>
                <li>Provost List Spring 2023</li>
                <li>President's List Fall 2023, Fall 2024</li>
            </div>
        </div>

        <div className="center-2">
            <div className="list-wrapper">
                <h3>Mary's Little Lambs Enrichment Center</h3>
                <li>Assistant Director</li>
            </div>
        </div>

        <div className="center-3">
            <div className="list-wrapper">
                <h3>Polk State College</h3>
                <li>Associates of Arts 2020</li>
                <li>Phi Theta Kappa Member</li>
            </div>
        </div>

        <motion.span
        className="material-symbols-outlined pos1"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        school
      </motion.span>

      <motion.span
        className="material-symbols-outlined pos2"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.6 }}
      >
        work
      </motion.span>

      <motion.span
        className="material-symbols-outlined pos3"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.6 }}
      >
        school
      </motion.span>


        <motion.div
        className="circle move-circ1"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.8, duration: 0.6 }}
      ></motion.div>

      <motion.div
        className="circle move-circ2"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1, duration: 0.6 }}
      ></motion.div>

      <motion.div
        className="circle move-circ3"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
      ></motion.div>

    <motion.div
        className="line1"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.8, duration: 0.6 }}
      ></motion.div>

    <motion.div
        className="line2"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1.0, duration: 0.6 }}
      ></motion.div>

<motion.div
        className="date1"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
      >2017 - 2020</motion.div>
      <motion.div
        className="date2"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1.0, duration: 0.6 }}
      >2019 - Present</motion.div>
      <motion.div
        className="date3"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.8, duration: 0.6 }}
      >2022 - Present</motion.div>




        </>
        

    )
}
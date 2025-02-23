import './Portfolio.css'
import { motion } from 'framer-motion'



export function Portfolio() {
    return (
        <>
        <div className="title">
            <h2 className="fade-in">Portfolio</h2>
        </div>
        <div className='port-container'>
        <div className="image-container">
        <div className="image-item">
        <img src="https://miro.medium.com/v2/resize:fit:1400/1*NP1e-SPxHILfBDSueWGxNQ.png" />
        <h4>Audio Analysis</h4>

       <a href="https://github.com/zahkiera/SPIDAM" target="_blank">Github</a>
       
    </div>
    <div className="image-item">
        <img src="https://www.teacherease.com/images/redesign_images/onlinegradebook/online-gradebook_1.png" />
        <h4>Grade Query</h4>
        <a href="https://github.com/zahkiera/gradequery" target="_blank">Github</a>
    </div>
    <div className="image-item">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXQ6TjjZlNL1X6yug3xJcOzMNx2K2hByEH9g&s" />
        <h4>Infix Calculator</h4>
        <a href="https://github.com/zahkiera/InfixPostfix" target="_blank">Github</a>
    </div>
    <div className="image-item">
        <img src="https://assets.datamation.com/uploads/2023/06/dm-top-database-challenges-696x457.png" />
        <h4>Database Management System</h4>
        <a href="https://drive.google.com/file/d/1xXTf9WTRrFZLhI6ntKyRhfzZ6eraMzsB/view?usp=sharing" target="_blank">Powerpoint</a>
        </div>
</div>
</div>

<motion.div
        className="underline2"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.2, duration: 0.6 }}
      ></motion.div>

        <h2 className='skill'>Skills & Coursework</h2>
        <ul className='list'>
        <li>Algorithms</li>
        <li>C</li>
        <li>C++</li>
        <li>CSS</li>
        <li>Data Structures</li>
        <li>Git</li>
        <li>Google Analytics</li>
        <li>HTML</li>
        <li>Java</li>
        <li>Javascript</li>
        <li>Linux</li>
        <li>OOP</li>
        <li>Python</li>
        <li>React</li>
        <li>SQL</li>
        </ul>

    <a className='link' href="https://drive.google.com/file/d/1wtuhelwptcgJGhWKZWEcvcAJo0FP16mo/view?usp=sharing" target="_blank">Check out my Resume</a>
    </>
    )
}
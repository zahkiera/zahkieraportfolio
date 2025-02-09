import "./Header.css";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export function Header() {
  return (
    <div className="Header">
      {/* Left Navigation */}
      <ul>
        <motion.li
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          <Link to="/experience">Experience</Link>
        </motion.li>
        <motion.li
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          <Link to="/portfolio">Portfolio</Link>
        </motion.li>
      </ul>

      {/* Center Logo */}
      <motion.div
        className="logo"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        <h3>
          <Link to="/">Zf</Link>
        </h3>
      </motion.div>

      {/* Right Navigation*/}
      <ul>
        <motion.li
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          <Link to="/about-me">About Me</Link>
        </motion.li>
        <motion.li
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.6 }}
        >
          <Link to="/connect">Connect</Link>
        </motion.li>
      </ul>
    </div>
  );
}

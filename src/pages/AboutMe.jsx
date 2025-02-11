import "./AboutMe.css";
import { motion } from "framer-motion";

export function AboutMe() {
  return (
    <>
      <div className="title">
        <h2 className="fade-in">About Me</h2>
      </div>

      {/* Wrap image and text in a container */}
      <div className="about-container">
        <img
          src="https://app.joinhandshake.com/user_profile_photos/46302926?size=profile"
          alt="Zahkiera"
          className="profile-img"
        />

        <p className="abtme">
          Hello and welcome to my portfolio! My name is Zahkiera Foster and I am a software engineer studying at Florida Polytechnic University. My interests include artificial intelligence, web development, and data analysis. I am currently conducting undergraduate research on AI and its implications in Early Learning. In my free time, I love to bake and sell homemade goods, read, and garden!
        </p>
      </div>

      <motion.div
        className="udl"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.2, duration: 0.6 }}
      ></motion.div>
    </>
  );
}

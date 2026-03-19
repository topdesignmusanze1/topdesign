import Reveal from "../components/Reveal";
import { motion } from "framer-motion";
import "../../public/styles/About.css"

function About() {
  return (

    <motion.div
      className="about"
      initial={{ opacity: 0, y: 60 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
    >
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        About Top Design
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.6 }}
      >
        Top Design is a creative and technical company offering design,
        manufacturing, and specialized installation services.
      </motion.p>
    </motion.div>
  );
}

export default About;
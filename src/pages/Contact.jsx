import Reveal from "../components/Reveal";
import "../../public/styles/Contact.css"
import {motion} from "framer-motion"

function Contact() {
  return (

    <motion.div 
    initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.6 }}
    className="contact">

      <Reveal>
        <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.6 }}
        >Contact Us</motion.h1>
      </Reveal>

      <Reveal>
        <motion.form
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.6 }}
        >

          <input placeholder="Name" />
          <input placeholder="Email" />
          <textarea placeholder="Message"></textarea>

          <button>Send Message</button>

        </motion.form>
      </Reveal>

    </motion.div>
  );
}

export default Contact;
import Reveal from "../components/Reveal";
import "../../public/styles/Contact.css"
import {motion} from "framer-motion"
import {Link} from "react-router-dom";

function Contact() {
  return (
    

    <motion.div 
    initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.6 }}
    className="contact">


      <Reveal>
        <motion.div className="contactus">

          <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.6 }}
        >
          Contact Us
        </motion.h1>

        </motion.div>
        
      </Reveal>


<motion.div className="contactPage">


  <Reveal>
    <motion.div className="phoneNum">
      <img src="/assets/call2.png"/>
      <motion.h3>Call us</motion.h3>
      <motion.p>Need immediate assistance? Our team is ready to help you with any inquiries or support.</motion.p>
      <motion.p><Link to="tel:+250736350000">0736350000</Link></motion.p>
    </motion.div>
  </Reveal>

  <Reveal>
    <motion.div className="whatsappNum">
      <img src="/assets/whatsapp2.png"/>
      <motion.h3>WhatsApp us</motion.h3>
      <motion.p>Prefer chatting? Reach out to us on WhatsApp for quick responses and personalized guidance.</motion.p>
      <motion.p>WhatsApp us on <Link to="https://wa.me/250736350000">Here</Link></motion.p>
    </motion.div>
  </Reveal>

  <Reveal>
    <motion.div className="emailNum">
      <img src="/assets/mail1.png"/>
      <motion.h3>Write to us</motion.h3>
      <motion.p>For detailed questions or business inquiries, send us an email and we’ll get back to you shortly.</motion.p>
      <motion.p><Link to="mailto:topdesign@example.com">topdesign@example.com</Link></motion.p>
    </motion.div>
  </Reveal>

</motion.div>
     

    </motion.div>
  );
}

export default Contact;
import Reveal from "../components/Reveal";
import "../../public/styles/Services.css"
import { motion } from "framer-motion";

function Services() {
  const services = [
    "Graphic Design",
    "Metallic Design",
    "Branding",
    "Clothing Sewing",
    "Lightning Protection Installation"
  ];

  return (
    
    <motion.div
      className="services"
      initial={{ opacity: 0, y: 60 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
    >
      <Reveal>
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        
        Our Services
      </motion.h1>
      </Reveal>
<Reveal>
  <motion.ul>
  {services.map((service, i) => (
        <motion.li
        className=""
          key={i}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 + i * 0.1, duration: 0.6 }}
        >
          {service}
        </motion.li >
      ))}
</motion.ul>
  </Reveal>      

      
    </motion.div>
  );
}

export default Services;
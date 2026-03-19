import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import "../../public/styles/HomeServices.css";

function HomeServices(){

  const services = [

    {
      title: "Specialized Electrical Installation",
      desc: "Lightning protection systems for safety.",
      icon: "⚡"
    }
    ,
    {
      title: "Graphic Design",
      desc: "Modern and creative visuals for your brand.",
      icon: "🎨"
    },
    {
      title: "Branding",
      desc: "Build a strong identity that stands out.",
      icon: "🏷️"
    },
    {
      title: "Sewing",
      desc: "High-quality custom clothing services.",
      icon: "🧵"
    },
    
  ];

  return(
    <section className="homeServices">

      <motion.div
        className="servicesHeader"
        initial={{opacity:0, y:40}}
        whileInView={{opacity:1, y:0}}
        transition={{duration:0.6}}
      >
        <h2>Our Services</h2>
        <p>We provide creative, technical, and professional solutions tailored to your needs.</p>
      </motion.div>

      <div className="servicesGrid">
        {services.map((service, index)=>(
          <motion.div
            className="serviceCard"
            key={index}
            initial={{opacity:0, y:60}}
            whileInView={{opacity:1, y:0}}
            transition={{duration:0.5, delay:index * 0.2}}
          >

            <div className="icon">{service.icon}</div>

            <h3>{service.title}</h3>

            <p>{service.desc}</p>

          </motion.div>
        ))}
      </div>

      <motion.div
        className="servicesBtn"
        initial={{opacity:0}}
        whileInView={{opacity:1}}
        transition={{delay:0.6}}
      >
        <Link to="/services">View All Services</Link>
      </motion.div>

    </section>
  );
}

export default HomeServices;
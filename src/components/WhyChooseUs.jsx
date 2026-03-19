import { motion } from "framer-motion";
import "../../public/styles/WhyChooseUs.css";


import { Link } from "react-router-dom";


function WhyChooseUs(){

  const reasons = [
    { title: "Professional Quality", icon: "⭐" },
    { title: "Reliable Service", icon: "⏱️" },
    { title: "Affordable Pricing", icon: "💰" },
    { title: "Customer Satisfaction", icon: "😊" }
  ];

  return(
    <section className="why">

      <motion.div
        className="whyHeader"
        initial={{opacity:0, y:40}}
        whileInView={{opacity:1, y:0}}
        transition={{duration:0.6}}
      >
        <h2>Why Choose Us</h2>
        <p>Trusted solutions. Professional results.</p>
      </motion.div>

      <div className="whyGrid">

        {reasons.map((item, index)=>(
          <motion.div
            className="whyCard"
            key={index}
            initial={{opacity:0, y:50}}
            whileInView={{opacity:1, y:0}}
            transition={{duration:0.4, delay:index * 0.15}}
          >

            <div className="whyIcon">{item.icon}</div>
            <h3>{item.title}</h3>

          </motion.div>
        ))}

      </div>

      {/* CTA BUTTON */}
      <motion.div
        className="whyBtn"
        initial={{opacity:0}}
        whileInView={{opacity:1}}
        transition={{delay:0.5}}
      >
        <Link to="/contact">Get Started</Link>
      </motion.div>

    </section>
  );
}

export default WhyChooseUs;
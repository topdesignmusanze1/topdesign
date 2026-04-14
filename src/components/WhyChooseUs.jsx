import { motion } from "framer-motion";
import "../../public/styles/WhyChooseUs.css";
import Whatsapp from "./Whatsapp";
import { LanguageContext } from "../components/LanguageContext";
import {useContext} from "react"



import { Link } from "react-router-dom";


function WhyChooseUs(){
  const {lang} = useContext(LanguageContext);

  const reasons = [
    { title: lang==="eng"? "Professional Quality" : "Dukora ibintu biramba", icon: "⭐" },
    { title: lang==="eng" ? "Reliable Service" : "Turi abo kwizerwa", icon: "⏱️" },
    { title: lang==="eng" ? "Affordable Pricing" : "Ntabwo duhenda", icon: "💰" },
    { title: lang==="eng" ? "Customer Satisfaction" : "Dukora ibyo wifuza byose", icon: "😊" }
  ];

  return(
    <section className="why">

      <motion.div
        className="whyHeader"
        initial={{opacity:0, y:40}}
        whileInView={{opacity:1, y:0}}
        transition={{duration:0.6}}
      >
        <h2>{lang==="eng" ? "Why Choose Us" : "Turi amahitamo meza"}</h2>
        <p>{lang==="eng" ? "Trusted solutions. Professional results." : "Dukora ibintu byizewe kandi biramba."}</p>
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
       <Link to="https://wa.me/250736350000">
           {lang==="eng"? "Get started" : "Tuvugishe"} 
            </Link>
      </motion.div>

    </section>
  );
}

export default WhyChooseUs;
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import "../../public/styles/HomeServices.css";
import { LanguageContext } from "../components/LanguageContext";
import {useContext} from "react"

function HomeServices(){

  const {lang}=useContext(LanguageContext);

  const services = [
  

    {
      title: lang==="eng" ? "Specialized Electrical Installation" : "Installation z'amashanyarazi.",
      desc: lang==="eng" ? "Lightning protection systems for safety." : "Dukora installation ya system z'imirindankuba",
      icon: "⚡"
    }
    ,
    {
      title: "Graphic Design",
      desc: lang==="eng" ? "Modern and creative visuals for your brand.": "Graphic design isa neza kandi igezweho",
      icon: "🎨"
    },
    {
      title: "Branding",
      desc: lang==="eng" ? "Build a strong identity that stands out." : "Tumenyekanisha ibyo ukora biyuze muri branding" ,
      icon: "🏷️"
    },
    {
      title: lang==="en" ? "Sewing" : "Ubudozi",
      desc: lang==="en" ? "High-quality school uniforms production services." : "Tudoda imyenda y'ishuri ya siporo ikomeye kandi isa neza",
      icon: "🧵"
    },

     {
      title: "Metallic design",
      desc: lang==="eng" ? "Metallic stylish for Exterior and interior of a building." : "Dukesha iwawe dukoresheje metallic design.",
      icon: "✒"
    }
    
  ];

  return(
    <section className="homeServices">

      <motion.div
        className="servicesHeader"
        initial={{opacity:0, y:40}}
        whileInView={{opacity:1, y:0}}
        transition={{duration:0.6}}
      >
        <h2>{lang==="eng" ? "Our Services" : "Ibyo dukora"}</h2>
        <p>{lang==="eng" ?"We provide creative, technical, and professional solutions tailored to your needs." : "Tugukorera ibihuje n'ibyo wifuza tukanarushaho"}</p>
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
        <Link to="/services">{lang==="eng" ? "View Details" : "Reba ibyo dukora byose"}</Link>
      </motion.div>

    </section>
  );
}

export default HomeServices;
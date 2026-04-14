import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import "../../public/styles/Metrics.css";
import { LanguageContext } from "../components/LanguageContext";
import {useContext} from "react"

function Metrics() {

  const {lang} = useContext(LanguageContext);

  const metrics = [
    { value: "1000+", label:lang==="eng" ? "Projects Completed" : "Imishinga tumaze gukora" },
    { value: "98%", label: lang==="eng" ? "Client Satisfaction" : "Abo dukorera baba bishimye" },
    { value: "12+", label: lang==="eng" ? "Years of Experience" : "Imyaka y'uburambe"},
    { value: "5+", label: lang==="eng" ? "Services Offered" : "Serivise dutanga"},
  ];

  return (
    <section className="metrics">

      <motion.div
        className="metricsHeader"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h2>{lang==="eng" ? "Our Achievements" : "Turi abanyabigwi"}</h2>
        <p>{lang==="eng" ? "Proven results and services you can trust." : "Imibare ntibeshya."}</p>
      </motion.div>

      <div className="metricsGrid">
        {metrics.map((item, index) => (
          <motion.div
            className="metricCard"
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <h3>{item.value}</h3>
            <p>{item.label}</p>
          </motion.div>
        ))}
      </div>

      <motion.div
        className="metricsBtn"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        <Link to="/services">{lang==="eng" ? "View Our Work" : "Reba ibyo dukora"}</Link>
      </motion.div>

    </section>
  );
}

export default Metrics;
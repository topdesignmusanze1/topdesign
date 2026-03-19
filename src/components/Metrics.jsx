import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import "../../public/styles/Metrics.css";

function Metrics() {

  const metrics = [
    { value: "120+", label: "Projects Completed" },
    { value: "95%", label: "Client Satisfaction" },
    { value: "8+", label: "Years of Experience" },
    { value: "4", label: "Services Offered" },
  ];

  return (
    <section className="metrics">

      <motion.div
        className="metricsHeader"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h2>Our Achievements</h2>
        <p>Proven results and services you can trust.</p>
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
        <Link to="/services">View Our Work</Link>
      </motion.div>

    </section>
  );
}

export default Metrics;
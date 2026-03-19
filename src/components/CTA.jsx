import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import "../../public/styles/CTA.css";

function CTA(){

  const text = "From design and branding to sewing and electrical protection, we deliver solutions you can trust.";

  const highlightWords = ["design", "branding", "sewing", "electrical"];

  return(
    <section className="cta">

      <motion.div
        className="ctaContent"
        initial={{opacity:0, y:40}}
        whileInView={{opacity:1, y:0}}
        transition={{duration:0.6}}
        viewport={{ once: true }}
      >

        <h2>Ready to Start Your Project?</h2>

        {/* Animated Text */}
        <motion.p
          className="ctaText"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.05
              }
            }
          }}
        >
          {text.split(" ").map((word, index) => {

            const cleanWord = word.replace(",", "");

            return (
              <motion.span
                key={index}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 }
                }}
                transition={{ duration: 0.4 }}
                className={highlightWords.includes(cleanWord) ? "highlight" : ""}
              >
                {word}&nbsp;
              </motion.span>
            );
          })}
        </motion.p>

        <Link to="/contact" className="ctaBtn">
          Request a Quote
        </Link>

      </motion.div>

    </section>
  );
}

export default CTA;
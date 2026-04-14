import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import "../../public/styles/CTA.css";
import { LanguageContext } from "../components/LanguageContext";
import {useContext} from "react"

function CTA(){

  const {lang} = useContext(LanguageContext);

  const text = lang==="eng" ? "From graphic design and branding to sewing, lightning protection and metallic design for building exterior and interior, we deliver solutions you can trust." : "Ibyo dukora byose byaba graphic design, printing na branding, ubudozi, installation y'imirindankuba na metallic design tugukorera ibintu byizewe.";

  const highlightWords = ["design","graphic", "lightning", "branding", "sewing", "electrical", "metallic", "y'imirindankuba", "ubudozi", "printing"];

  return(
    <section className="cta">

      <motion.div
        className="ctaContent"
        initial={{opacity:0, y:40}}
        whileInView={{opacity:1, y:0}}
        transition={{duration:0.6}}
        viewport={{ once: true }}
      >

        <h2>{lang ==="eng" ? "Ready to Start Your Project?" : "Witeguye gukorana natwe?"}</h2>

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

        <Link to="https://wa.me/250736350000" className="ctaBtn">
          {lang==="eng" ? "Request a Quote" : "Tuvugishe"}
        </Link>

      </motion.div>

    </section>
  );
}

export default CTA;
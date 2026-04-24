import Reveal from "../components/Reveal";
import "../../public/styles/Contact.css";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { LanguageContext } from "../components/LanguageContext";
import { useContext } from "react";
import { Helmet } from "react-helmet-async";

function Contact() {
  const { lang } = useContext(LanguageContext);

  const imagePath = lang === "eng" ? "/assets/contact.png" : "/assets/tuvugishe2.png";
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.4, duration: 0.6 }}
      className="contact"
    >
      <Helmet>
        {lang === "eng" ? (
          <>
            <title>Top Design – Contact Us</title>
             <link rel="icon" type="image/png" href="/favicon.png" />

            <meta name="description" content="Reach Top Design for flyers, banners, logos, branding, printing, metallic design, and lightning protection services."/>
            <link rel="alternate" hreflang="en" href="https://www.topdesign.tech/en/contact" />
            <link rel="alternate" hreflang="rw" href="https://www.topdesign.tech/rw/contact" />
          </>
        ) : (
          <>
            <title>Top Design – Tuvugishe</title>
            <meta name="description" content="Tuvugishe muri Top Design ku bijyanye na flyers, banners, logos, branding, graphic design, metallic design, umurindankuba no gucura impfunguzo"/>
            
            <link rel="alternate" hreflang="rw" href="https://www.topdesign.tech/rw/contact" />
            <link rel="alternate" hreflang="en" href="https://www.topdesign.tech/en/contact" />
          </>
        )}
      </Helmet>

      <Reveal>
        <motion.div className="contactus" style={{ backgroundImage: `url(${imagePath})` }}>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          ></motion.h1>
        </motion.div>
      </Reveal>

      <motion.div className="contactPage">
        <motion.div className="phoneNum boxCont">
          <img src="/assets/call2.png" />
          <motion.h3>{lang === "eng" ? "Call us" : "Duhamagare"}</motion.h3>
          <motion.p>
            {lang === "eng"
              ? "Need immediate assistance? Our team is ready to help you with any inquiries or support"
              : "Niba wifuza ubufasha bwihuse duhamagare kandi twiteguye kugufasha"}
            .
          </motion.p>
          <motion.p>
            <Link to="tel:+250736350000">0736350000</Link>
          </motion.p>
        </motion.div>

        <motion.div className="whatsappNum boxCont">
          <img src="/assets/whatsapp2.png" />
          <motion.h3>{lang === "eng" ? "WhatsApp us" : "Tuvugishe kuri WhatsApp"}</motion.h3>
          <motion.p>
            {lang === "eng"
              ? "Prefer chatting? Reach out to us on WhatsApp for quick responses and personalized guidance."
              : "Dushobora no kuvugana duchatinga kuri WhatsApp kandi turagusubiza byihuse ndetse bihuje n'ibyo wifuza."}
          </motion.p>
          <motion.p>
            {lang === "eng" ? "WhatsApp us on" : "Kanda"}{" "}
            <Link to="https://wa.me/250736350000">{lang === "eng" ? "Here" : "Hano"}</Link>
          </motion.p>
        </motion.div>

        <motion.div className="emailNum boxCont">
          <img src="/assets/mail1.png" />
          <motion.h3>{lang === "eng" ? "Write to us" : "Twandikire"}</motion.h3>
          <motion.p>
            {lang === "eng"
              ? "For detailed questions or business inquiries, send us an email and we’ll get back to you shortly."
              : "Niba wifuza kutwandikira mu buryo burambuye ku mishinga twagukorera, twoherereze ubutumwa kuri imeyiri yacu kandi tuzagusubiza bidatinze."}
          </motion.p>
          <motion.p>
            <Link to="mailto:topdesign85@gmail.com">topdesign85@gmail.com</Link>
          </motion.p>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

export default Contact;

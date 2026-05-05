import Reveal from "../components/Reveal";
import Whatsapp from "../components/Whatsapp";
import "../../public/styles/Home.css";
import HeroCarousel from "../components/HeroCarousel";
import HomeServices from "../components/HomeServices";
import WhyChooseUs from "../components/WhyChooseUs";
import Portfolio from "../components/Portfolio";
import CTA from "../components/CTA";
import Metrics from "../components/Metrics";
import { LanguageContext } from "../components/LanguageContext";
import { useContext } from "react";

import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

function Home() {
  const { lang } = useContext(LanguageContext);

  return (
    <div className="home">
      <Helmet>
        {lang === "eng" ? (
          <>
            <title>Top Design – Graphic design, metallic design, branding and printing.</title>
              <link rel="icon" type="image/png" href="/favicon.png" />
              <link rel="canonical" href="https://www.topdesign.tech/" />


<meta name="Top design, Top, in Top design we do Graphic design, Printing & Branding, Metallic design, Lightning protection installation and spotswear school uniforms manufacturing"/>            

            <link rel="alternate" hreflang="en" href="https://www.topdesign.tech/en" />
            <link rel="alternate" hreflang="rw" href="https://www.topdesign.tech/rw" />
          </>
        ) : (
          <>
            <title>Top Design – Graphic design, metallic design, Branding na Printing.</title>
            
<meta name="Top design, Top, muri Top design dukora Graphic design, Printing na Branding, Metallic design, dukora installation y'imirindankuba, tunadoda imyenda y'ishuri ya siporo"/>            

            <meta
              name="description"
              content="Dukora graphic design, metallic design, printing na branding, tudoda imyenda y'ishuri ya siporo, tugakora na installation y'imirindankuba."
            />
            <link rel="alternate" hreflang="rw" href="https://www.topdesign.tech/rw" />
            <link rel="alternate" hreflang="en" href="https://www.topdesign.tech/en" />
          </>
        )}
      </Helmet>

      {/* Hero Carousel */}
      <div>
        <HeroCarousel />
      </div>

      {/* Example section after hero */}
      <motion.div
        className="homeIntro"
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <h2>{lang === "eng" ? "Welcome to Top Design" : "Ikaze muri Top Design"}</h2>
        <p>
          Top Design —{" "}
          {lang === "eng"
            ? "Rooted in Rwanda, shaping safe, stylish, and sustainable solutions with creativity you can trust"
            : "Turi ubukombe kandi turi igisobanuro cy'ubuziranenge, ubwiza, kuramba kandi turizewe mu byo dukora byose."}
        </p>
      </motion.div>

      <HomeServices />
      <WhyChooseUs />
      <Metrics />
      <CTA />
    </div>
  );
}

export default Home;

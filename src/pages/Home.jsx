import Reveal from "../components/Reveal";
import Whatsapp from "../components/Whatsapp";
import "../../public/styles/Home.css"
import HeroCarousel from "../components/HeroCarousel";
import HomeServices from "../components/HomeServices";
import WhyChooseUs from "../components/WhyChooseUs";
import Portfolio from "../components/Portfolio";
import CTA from "../components/CTA"
import Metrics from "../components/Metrics";
import { LanguageContext } from "../components/LanguageContext";
import {useContext} from "react"


import {motion} from "framer-motion"
import {Swiper, SwiperSlide} from "swiper/react";
import {Autoplay} from "swiper/modules";

function Home() {
  const {lang}=useContext(LanguageContext);
  return (

    <div className="home">

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

        <h2>{lang==="eng"? "Welcome to Top Design" : "Ikaze muri Top Design"}</h2>

        <p>
Top Design — {lang==="eng" ? "Rooted in Rwanda, shaping safe, stylish, and sustainable solutions with creativity you can trust" : "Turi ubukombe kandi turi igisobanuro cy'ubuziranenge, ubwiza, kuramba kandi turizewe mu byo dukora byose."}</p>

      </motion.div>

      <HomeServices/>

     

      <WhyChooseUs/>
      <Metrics/>
       <CTA/>


    </div>

  );
;
}

export default Home;
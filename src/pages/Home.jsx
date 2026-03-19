import Reveal from "../components/Reveal";
import "../../public/styles/Home.css"
import HeroCarousel from "../components/HeroCarousel";
import HomeServices from "../components/HomeServices";
import WhyChooseUs from "../components/WhyChooseUs";
import Portfolio from "../components/Portfolio";
import CTA from "../components/CTA"
import Metrics from "../components/Metrics";


import {motion} from "framer-motion"
import {Swiper, SwiperSlide} from "swiper/react";
import {Autoplay} from "swiper/modules";

function Home() {
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

        <h2>Welcome to Top Design</h2>

        <p>
          We provide professional services in graphic design, branding, sewing and lightning protection installation.
        </p>

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
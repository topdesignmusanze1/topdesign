import Reveal from "../components/Reveal";
import "../../public/styles/Services.css";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import CTA from "../components/CTA";
import { LanguageContext } from "../components/LanguageContext";
import { useContext } from "react";

import { div } from "framer-motion/client";
import { Helmet } from "react-helmet-async";

function Services({ Language }) {
  const { lang } = useContext(LanguageContext);
  const imagePath = lang === "eng" ? "/assets/services.png" : "/assets/IbyoDukora.png";

  const services = [
    {
      title: "Graphic Design",
      services: ["Banners", "Stamps", "Logo", "Flyers", "Business cards", "badges"],
      images: [
        "/assets/Design/badges.png",
        "/assets/Design/banner.png",
        "/assets/Design/Billboard.png",
        "/assets/Design/cards.png",
        "/assets/Design/facturier.png",
        "/assets/Design/flyers.png",
        "/assets/Design/logos.png",
        "/assets/Design/pullups.png",
        "/assets/Design/stamps.png",
      ],
    },
    {
      title: "Printing & Branding",
      services: ["Banners", "Stamps", "Logo", "Flyers", "Stickers"],
      images: [
        "/assets/branding and printing/formats.png",
        "/assets/branding and printing/clothesPrint.png",
        "/assets/branding and printing/Keys.png",
        "/assets/branding and printing/Branding.png",
      ],
    },
    {
      title: "Clothing Sewing",
      services: ["structuring", "styling"],
      images: ["/assets/sportswear/Sportswear.png"],
    },
    {
      title: "Lightning Protection Installation",
      services: ["sportswear manufacturing"],
      images: [
        "/assets/LPs/Copper.png",
        "/assets/LPs/Earlystreamer.png",
        "/assets/LPs/faraday.png",
        "/assets/LPs/Installation.png",
      ],
    },
    {
      title: "Metallic Design",
      services: [""],
      images: ["/assets/metallic/metallic.png", "/assets/metallic/ExteriorStylish.png"],
    },
  ];

  const servicesKin = [
    {
      title: "Graphic Design",
      services: ["Banners", "Stamps", "Logo", "Flyers", "Business cards", "badges"],
      images: [
        "/assets/DesignKin/Badges1.png",
        "/assets/DesignKin/ibyapa1.png",
        "/assets/DesignKin/Billboard1.png",
        "/assets/DesignKin/cards1.png",
        "/assets/DesignKin/facturier2.png",
        "/assets/DesignKin/flyer.png",
        "/assets/DesignKin/kashe1.png",
        "/assets/DesignKin/Logo1.png",
        "/assets/DesignKin/pullup1.png",
      ],
    },
    {
      title: "Printing & Branding",
      services: ["Banners", "Stamps", "Logo", "Flyers", "Stickers"],
      images: [
        "/assets/BrandingKin/branding1.png",
        "/assets/BrandingKin/DTF1.png",
        "/assets/BrandingKin/Imyenda1.png",
        "/assets/BrandingKin/Keys1.png",
      ],
    },
    {
      title: "Clothing Sewing",
      services: ["structuring", "styling"],
      images: ["/assets/sportswearKin/sportwear1.png"],
    },
    {
      title: "Lightning Protection Installation",
      services: ["sportswear manufacturing"],
      images: [
        "/assets/LpsKin/installation3.png",
        "/assets/LpsKin/Early1.png",
        "/assets/LpsKin/Iron1.png",
      ],
    },
    {
      title: "Metallic Design",
      services: [""],
      images: ["/assets/metallicKin/metallic2.png", "/assets/metallicKin/metallic3.png"],
    },
  ];

  return (
    <motion.div
      className="serviceShort"
      initial={{ opacity: 0, y: 60 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
    >
      <Helmet>
        {lang === "eng" ? (
          <>
            <title>Top Design – Our Services</title>
              <link rel="icon" type="image/png" href="/favicon.png" />

            <meta name="description" content="we make banners, we make flyers, we make badges, we make business cards, we make facturier, we make stamps, we make logos, we make pull-ups, writing on clothes, we make ad brand keys, we brand your business, we make sportswear uniforms, we install lightning rods, and lightning protection, we make metallic structures"/>
            <meta
              name="description"
              content="Explore our branding, flyer design, printing, lightning protection, and metallic design."
            />
            <link rel="alternate" hreflang="en" href="https://www.topdesign.tech/en/services" />
            <link rel="alternate" hreflang="rw" href="https://www.topdesign.tech/rw/services" />
          </>
        ) : (
          <>
            <title>Top Design – Serivisi zacu</title>
            <meta name="description" content="dukora banners, dukora flyers, dukora badges, dukora business cards, dukora facturier, dukora logo, dukora kashe, dukora pull-ups, twandika ku myenda, dukora tukanabrandinga imfunguzo, tubrandinga aho ukorera, tudoda imyenda y'ishuri ya siporo, dukora installation y'imirindankuba, dukora metallic design."/>

            <meta
              name="description"
              content="Reba serivisi zacu za graphic design, printing, branding, installation y’imirindankuba, metallic design ndetse no kudoda imyenda."
            />
            <link rel="alternate" hreflang="rw" href="https://www.topdesign.tech/rw/services" />
            <link rel="alternate" hreflang="en" href="https://www.topdesign.tech/en/services" />
          </>
        )}
      </Helmet>

      <Reveal>
        <motion.div className="serHero" style={{ backgroundImage: `url(${imagePath})` }}>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          ></motion.h1>
        </motion.div>

        <motion.p className="servicesHero">
          {lang === "eng"
            ? "We do Designing, Printing and branding, Lightning protection and Exterior metallic stylish."
            : "Dukora Graphic Design, Printing na Branding, Installation y'imirindankuba, Metallic design ndetse tunadoda imyenda y'ishuri ya siporo."}
        </motion.p>
      </Reveal>


  <div className="designingCont">
    <div className="sideBar">
      <a href="#graphic" className="serviceHero">Graphic design</a>
      <button class="btnSer"><a href="https://wa.me/250736350000"  style={{ color: "#2563eb",
    textDecoration:" none",
    fontWeight: "bolder"}}>{lang==="eng" ? "Contact us":"Tuvugishe"}</a></button>
    </div>

   <div className="content" id="graphic">
    {lang==="eng"?services[0].images.map((image,index)=>{
return <img key={index} src={image} alt="service's image"/>
    }): servicesKin[0].images.map((image,index)=>{
      return <img key={index} src={image} alt="service's image"/>
    })}

   </div>
  
</div>



<hr />



<div className="sewingCont">

  <div className="sideBar">
    <a href="#sewing" className="serviceHero">{lang==="eng" ? "Printing & Branding" : "Printing na Branding"}</a>
      <button class="btnSer"><a href="https://wa.me/250736350000" style={{ color: "#2563eb",
    textDecoration:" none",
    fontWeight: "bolder"}}>{lang==="eng" ? "Contact us":"Tuvugishe"}</a></button>
    </div>

   <div className="content" id="sewing">
     {lang==="eng"?services[1].images.map((image,index)=>{
return <img key={index} src={image} alt="service's image"/>
    }): servicesKin[1].images.map((image,index)=>{
      return <img key={index} src={image} alt="service's image"/>
    })}
   </div>

</div>



<hr />



<div className="printingCont">
  <div className="sideBar">
<a href="#printing" className="serviceHero">{lang==="eng" ? "School uniforms sewing" : "Kudoda imyenda y'ishuri"}</a>
      <button class="btnSer"><a href="https://wa.me/250736350000" style={{ color: "#2563eb",
    textDecoration:" none",
    fontWeight: "bolder"}}>{lang==="eng" ? "Contact us":"Tuvugishe"}</a></button>

    </div>

   <div className="content"  id="printing">
     {lang==="eng"?services[2].images.map((image,index)=>{
return <img key={index} src={image} alt="service's image"/>
    }): servicesKin[2].images.map((image,index)=>{
      return <img key={index} src={image} alt="service's image"/>
    })}
   </div>

</div>



<hr />



<div className="lightningCont">

  <div className="sideBar">
<a href="#lightning" className="serviceHero">{lang==="eng" ? "Lightning Protection Installation" : "Imirindankuba"} </a>
      <button class="btnSer"><a href="https://wa.me/250736350000" style={{ color: "#2563eb",
    textDecoration:" none",
    fontWeight: "bolder"}}>{lang==="eng" ? "Contact us":"Tuvugishe"}</a></button>
    </div>

   <div className="content" id="lightning">
     {lang==="eng"?services[3].images.map((image,index)=>{
return <img key={index} src={image} alt="service's image"/>
    }): servicesKin[3].images.map((image,index)=>{
      return <img key={index} src={image} alt="service's image"/>
    })}
   </div>

</div>



<hr />



<div className="metalCont">

  <div className="sideBar">
<a href="#metallic"  className="serviceHero">Metallic design</a>
      <button class="btnSer"><a href="https://wa.me/250736350000" style={{ color: "#2563eb",
    textDecoration:" none",
    fontWeight: "bolder"}}>{lang==="eng" ? "Contact us":"Tuvugishe"}</a></button>
    </div>

   <div className="content" id="metallic">
     {lang==="eng"?services[4].images.map((image,index)=>{
return <img key={index} src={image} alt="service's image"/>
    }): servicesKin[4].images.map((image,index)=>{
      return <img key={index} src={image} alt="service's image"/>
    })}
   </div>

</div>

<motion.div className="ctaEnd">
        <CTA />
      </motion.div>
    </motion.div>
  );
}

export default Services;
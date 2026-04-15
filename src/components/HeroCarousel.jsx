




import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { motion } from "framer-motion";
import {Link} from "react-router-dom";
import { LanguageContext } from "../components/LanguageContext";
import {useContext} from "react"
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "../../public/styles/HeroCarousel.css";


function HeroCarousel() {

  const {lang} = useContext(LanguageContext);

const slides = [

{
image: "/assets/lightning.png",
title: lang==="eng"?"Lightning Protection Installation":"Installation y'umurindankuba",
text: lang==="eng" ? "Protect your home and electrical systems with professional lightning protection installation.": "Rinda ibyawe n'abawe inkuba ukoresheje umurindankuba. Tunagukorera installation y'umurindankuba"
},

{
image: "/assets/graphic.png",
title: lang==="eng" ? "Creative Graphic Design" : "Graphic Design y'umwimerere",
text: lang==="eng" ? "Professional graphic design that communicates your message and strengthens your brand." :"Tugukorera Design nziza ituma abantu bamenya ibyo ukora n'aho ubikorera."
},

{
image: "/assets/branding.png",
title: lang==="eng" ? "Your Printing & Branding Partner" : "Printing na Branding",
text: lang==="eng" ? "We deliver bold prints and smart branding solutions to help your business stand out—indoors, outdoors, and everywhere in between." : "Dufite icapiro ry'ibyapa byose kandi tunagukorera branding y'aho ukorera ndetse n'iy'ibikoresho byawe."
},

{
image: "/assets/Sewing.png",
title: lang==="eng" ? "Professional school uniforms sewing" : "Kudoda imyambaro y'ishuri ya siporo",
text: lang==="eng" ? "High-quality sewing services for school uniforms clothing production." : "Tudoda imyenda y'ishuri ya siporo ikomeye kandi isa neza."
},

{
image:"/assets/Metallic1.png",
title: "Metallic design",
text: lang==="eng" ? "Style with strength. Style with metal." : "Dukoresha igisobanuro cy'imbaraga - icyuma - tugataka iwawe."
},

];

return (

<Swiper
modules={[Autoplay, Pagination, Navigation]}
 autoplay={{
    delay: 6000,
    disableOnInteraction: false,
    pauseOnMouseEnter: true
  }}
loop={true}
pagination={{ clickable: true }}
// navigation
className="heroSwiper"
>

{slides.map((slide,index)=>(

<SwiperSlide key={index}>

<div
className="heroSlide"
style={{ backgroundImage:`url(${slide.image})`}}
>

  </div>

<div className="heroContent">

<motion.div
className="heroInner"
initial={{opacity:0,x:100}}
animate={{opacity:1,x:0}}
transition={{duration:0.8}}
>

<h1>{slide.title}</h1>

<p>{slide.text}</p>

<button className="heroBtn">
  <a className="buttonLink" href="../Services">{ lang==="eng" ? "Explore Services" : "Reba ibyo dukora"}</a>

</button>

<button className="heroBtnContact">
<a className="buttonLink" href="https://wa.me/25073635000">{lang==="eng" ? "Contact us" : "Tuvugishe"}</a>
</button>

</motion.div>

</div>



</SwiperSlide>

))}

</Swiper>

);

}

export default HeroCarousel;
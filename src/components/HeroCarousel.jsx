




import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { motion } from "framer-motion";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "../../public/styles/HeroCarousel.css";


function HeroCarousel() {

const slides = [

{
image: "/assets/lightning.png",
title: "Lightning Protection Installation",
text: "Protect your home and electrical systems with professional lightning protection installation."
},

{
image: "/assets/graphic.png",
title: "Creative Graphic Design",
text: "Professional graphic design that communicates your message and strengthens your brand."
},

{
image: "/assets/branding.png",
title: "Your Printing & Branding Partner",
text: "We deliver bold prints and smart branding solutions to help your business stand out—indoors, outdoors, and everywhere in between.."
},

{
image: "/images/sewing.jpg",
title: "Professional Sewing",
text: "High-quality sewing services for custom clothing and textile production."
}

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
navigation
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
Explore Services
</button>

</motion.div>

</div>



</SwiperSlide>

))}

</Swiper>

);

}

export default HeroCarousel;
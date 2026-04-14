import Reveal from "../components/Reveal";
import { motion } from "framer-motion";
import "../../public/styles/About.css"
import { LanguageContext } from "../components/LanguageContext";
import {useContext} from "react";
import {Link} from "react-router-dom";

function About() {

  const {lang}=useContext(LanguageContext);

  const text=[, ]
  return (

    <motion.div
      className="about"
      initial={{ opacity: 0, y: 60 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
    >
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        {lang==="eng" ? "About Us" : "Abo turi bo."}
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.6 }}
      >
        {lang==="eng" ? `At Top Design, creativity meets technical expertise. 
        We specialize in graphic design, printing, branding, and uniforms. 
        Our team also delivers metallic structures and lightning protection. 
        For over 8 years, we have completed 120+ successful projects. 
        With 98% client satisfaction, trust is at the heart of our work. 
        We serve businesses, schools, individuals, and construction projects. 
        Our designs make schools professional, businesses more visible, 
        and buildings safe yet stylish.Guided by innovation, sustainability, 
        honesty, quality, and reliability.We stand out through versatility and a 
        commitment to excellence.Rooted in Rwanda, we embrace innovation while 
        growing into new markets.`: `Muri Top Design, guhanga bihura n'ubuhanga bwa tekiniki; 
        dufite ubuhanga bwo gukora graphic design, printing na branding, Kudoda 
        imyambaro y’ishuri ya siporo, gukora installation y’imirindankuba no gukora 
        metallic design irimbisha i wawe.
        Mu myaka irenga 12, tumaze gukora imishinga irenga 1000 kandi abo twakoreye 
        bishimye ku kigero cya 98%. Gukora ibintu byizewe nibyo shingiro ryimirimo 
        yacu.
        Dukorana n’ibigo binini by’ubucuruzi, amashuri, abantu ku giti cyabo, n'imishinga 
        yo kubaka. 
        Tubakorera bituma ibikorwa byanyu bigaragara kinyamwuga, ubucuruzi bwanyu 
        bukamenyekana, kandi n’inyubako yawe ikaba ifite umutekano kandi ikeye. 
        Duharanira guhanga udushya gukora ibintu biramba, kuba inyangamugayo, gukora 
        ibintu byizewe kandi ntiduhenda Turi ubukombe mu Rwanda, kandi dukomeje no 
        kwaguka no kuyandi masoko.
`}
      </motion.p>


      <motion.button className="heroBtn">
        <Link to="/Services">{lang==="eng" ? "Check our services" : "Reba ibyo dukora"}</Link>
      </motion.button>

       <motion.button  className="heroBtnContact">

        <Link to="https://wa.me/250736350000">{lang==="eng" ? "Contact us" : "Tuvugishe"}</Link>
        
       </motion.button>
    </motion.div>
  );
}

export default About;
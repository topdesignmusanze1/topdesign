import "../../public/styles/Footer.css";
import {Link} from "react-router-dom";
import { LanguageContext } from "../components/LanguageContext";
import {useContext} from "react"



function Footer() {

   const {lang}=useContext(LanguageContext);
  return (
    <footer className="footer">
      <div className="footer-container">
        
        {/* Company Info */}
        <div className="footer-section company">
          <h3>Top Design</h3>
          <p>{lang==="eng" ? `Innovation, sustainability, and reliability in every project.`:`Turangwa no guhanga udushya, dukora ibintu biramba kandi turi abizerwa`}</p>
          <p>© 2026 Top Design. {lang==="eng" ? `All rights reserved` : `Uburenganzira bwose bwihariwe n'umwanditsi`}.</p>
        </div>

        {/* Services */}
        <div className="footer-section">
          <h4>{lang==="eng" ? `Services`: `Ibyo dukora`} </h4>
          <ul>
            <li>Graphic Design</li>
            <li>{lang==="eng" ? `Printing & Branding` : `Printing na Branding`}</li>
            <li>{lang==="eng" ? `Lightning Protection Installation` : `Installation y'imirindankuba`}</li>
            <li>{lang==="eng" ? `School sportswear`: `Imyambaro y'ishuri ya siporo`}</li>
            <li>Metallic design</li>
          </ul>
        </div>

        {/* Contact */}
        <div className="footer-section">
          <h4>{lang==="eng" ? `Contact`: `Tuvugishe`}</h4>
          <p>Musanze, Rwanda</p> 
          <p><Link to="tel: +250736350000" style={{textDecoration: "none", color:"#fff"}}>{lang==="eng" ? `Call us`: `Duhamagare`}:+250736350000</Link></p>
          <p>
            <Link to="https://wa.me/250736350000" className="whatsapp-link" >
              {lang==="eng" ? `Chart on WhatsApp`: `Twandikire kuri WhatsApp`}
            </Link>
          </p>
          <p className="footEmail">Email: <a href="mailto:topdesign85@gmail.com">topdesign85@gmail.com</a></p>
        </div>

        {/* Social Links */}
        <div className="footer-section">
          <h4>{lang==="eng" ? `Follow`: `Dukurikire`}</h4>
          <div className="social-links">
          <a href="https://www.facebook.com/profile.php?id=61567609555845"><img src="/assets/SocialSvg/facebook.svg" className="socialNmae"/></a>  
            <a href="https://www.instagram.com/topdesign_rwanda"><img src="/assets/SocialSvg/instagram.svg" className="socialNmae"/></a>
            <a href="https://www.tiktok.com/@topdesign_one"><img src="/assets/SocialSvg/tiktok.svg" className="socialNmae"/></a>
            <a href="https://www.youtube.com/channel/UC_TAj7cwXRDLxBdH_MmeyyQ" ><img style={{backgroundColor:"#fff"}} src="/assets/SocialSvg/youtube.svg" className="socialNmae"/></a>

          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
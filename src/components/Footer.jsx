import "../../public/styles/Footer.css";
import {Link} from "react-router-dom";


function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        
        {/* Company Info */}
        <div className="footer-section company">
          <h3>Top Design</h3>
          <p>Innovation, sustainability, and reliability in every project.</p>
          <p>© 2026 Top Design. All rights reserved.</p>
        </div>

        {/* Services */}
        <div className="footer-section">
          <h4>Services</h4>
          <ul>
            <li>Graphic Design & Branding</li>
            <li>School Uniforms & Printing</li>
            <li>Lightning Protection Installation</li>
            <li>Metallic Structures</li>
          </ul>
        </div>

        {/* Contact */}
        <div className="footer-section">
          <h4>Contact</h4>
          <p>Musanze, Rwanda</p> 
          <p><Link to="tel: +250736350000" style={{textDecoration: "none", color:"#fff"}}>Call us:+250736350000</Link></p>
          <p>
            <Link to="https://wa.me/250736350000" className="whatsapp-link" >
              Chat on WhatsApp
            </Link>
          </p>
          <p className="footEmail">Email: <a href="mailto:topdesign85@gmail.com">topdesign85@gmail.com</a></p>
        </div>

        {/* Social Links */}
        <div className="footer-section">
          <h4>Follow Us</h4>
          <div className="social-links">
          <a href="https://www.facebook.com/profile.php?id=61567609555845"><img src="/assets/SocialSvg/facebook.svg" className="socialNmae"/></a>  
            <a href="https://www.instagram.com/topdesign_rwanda"><img src="/assets/SocialSvg/instagram.svg" className="socialNmae"/></a>
            <a href="https://www.tiktok.com/@topdesign_rwanda"><img src="/assets/SocialSvg/tiktok.svg" className="socialNmae"/></a>
            <a href="https://www.youtube.com/channel/UC_TAj7cwXRDLxBdH_MmeyyQ"><img src="/assets/SocialSvg/youtube.svg" className="socialNmae"/></a>

          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
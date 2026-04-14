import { Link, NavLink } from "react-router-dom";
import "../../public/styles/Navbar.css";
import {useContext,useState} from "react";
import { LanguageContext} from "../components/LanguageContext";


function Navbar({English, Kinyarwanda}) {

const [menu, setMenu]=useState(false)
const {engHandler,kinHandler}=useContext(LanguageContext);
const {lang}=useContext(LanguageContext);

  function menuToggler(){
    setMenu(prevMenu => !prevMenu)
  }
 
  return (
    <nav className="navbar">

      <div className="humberger" onClick={menuToggler}>
        <hr />
        <hr />
        <hr />
      </div>
      <h2><span className="name1">Top</span> Design</h2>

      <div className={menu ? " links" : "view links"}>
  <NavLink to="/" className={({ isActive }) => isActive ? "active linkItem" : "linkItem"} onClick={menuToggler}>{lang==="eng"?"HOME":"AHABANZA"}</NavLink>
  <NavLink to="/about" className={({ isActive }) => isActive ? "active linkItem" : "linkItem"} onClick={menuToggler}>{lang==="eng"?"ABOUT US":"ABO TURIBO"}</NavLink>
  <NavLink to="/services" className={({ isActive }) => isActive ? "active linkItem" : "linkItem"} onClick={menuToggler}>{lang==="eng"?"SERVICES":"IBYO DUKORA"}</NavLink>
  <NavLink to="/contact" className= {({ isActive }) => isActive ? "active linkItem" : "linkItem"} onClick={menuToggler}>{lang==="eng"?"CONTACT US":"TUVUGISHE"}</NavLink>
</div>


<div class="langPar">
 <select onChange={(e) => {
  if (e.target.value === "Eng") engHandler();
  else kinHandler();
}}>
  <option value="Kin">Kinyarwanda</option>
  <option value="Eng">English</option>
</select>
</div>

    </nav>
  );
}

export default Navbar;
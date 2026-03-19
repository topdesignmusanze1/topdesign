import { Link, NavLink } from "react-router-dom";
import "../../public/styles/Navbar.css";

function Navbar() {

 
  return (
    <nav className="navbar">

      <h2><span className="name1">Top</span> Design</h2>

      <div className="links">
  <NavLink to="/" className={({ isActive }) => isActive ? "active" : ""}>Home</NavLink>
  <NavLink to="/about" className={({ isActive }) => isActive ? "active" : ""}>About</NavLink>
  <NavLink to="/services" className={({ isActive }) => isActive ? "active" : ""}>Services</NavLink>
  <NavLink to="/contact" className={({ isActive }) => isActive ? "active" : ""}>Contact</NavLink>
</div>

    </nav>
  );
}

export default Navbar;
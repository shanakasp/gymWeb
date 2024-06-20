import { useState } from "react";
import "./Header.scss";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setMenuOpen(false);
    }
  };

  return (
    <div className="header">
      <div className="menu-icon" onClick={toggleMenu}>
        ☰
      </div>
      <ul className={menuOpen ? "open" : ""}>
        <li onClick={() => scrollToSection("home")}>Home</li>
        <li onClick={() => scrollToSection("services")}>Services</li>
        <li onClick={() => scrollToSection("diet-plans")}>Diet Plans</li>
        <li onClick={() => scrollToSection("weight-training")}>
          Weight Training
        </li>
        <li onClick={() => scrollToSection("prices")}>Prices</li>
        <li onClick={() => scrollToSection("about-us")}>About Us</li>
      </ul>
    </div>
  );
};

export default Header;

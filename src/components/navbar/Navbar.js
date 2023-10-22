import React, {useState} from 'react'
import './Navbar.css';
 import { SiAnaconda } from 'react-icons/si';
 import { AiOutlineBars } from 'react-icons/ai';
 import { RiCloseLine } from 'react-icons/ri';
import Button from '../UI/button/Button';


const Navbar = () => {

    const [showMenu, setShowMenu] = useState(false);

    const toggleMenu = () => {
        setShowMenu(!showMenu);
    }

  return (
    <nav className="container navbar">
      <div className="logo">
        <SiAnaconda color="#fff" size={33} />
        <p className="logo-text">
          Social<span>X</span>
        </p>
      </div>
      <menu>
        <ul className="nav-links" id={showMenu ? "nav-links-mobile" : "nav-links-mobile-hide"}>
          <li>
            <a href="#" onClick={toggleMenu}>Home</a>
          </li>
          <li>
            <a href="#features" onClick={toggleMenu}>Features</a>
          </li>
          <li>
            <a href="#download" onClick={toggleMenu}>Download</a>
          </li>
          <li>
            <a href="#subscribe" onClick={toggleMenu}>Subscribe</a>
          </li>
           <li onClick={toggleMenu}>
            <Button text={"Learn more"} btnClass={"btn btn-dark"} href={"#faq"}/>
          </li> 
        </ul>
      </menu>

      <div className="menu-icons" onClick={toggleMenu}>
        {showMenu ? (
          <RiCloseLine color="#fff" size={32} style={{ border: '0.3px solid #fff', borderRadius: '50% 50%', padding: '2px', position: 'fixed', top: "2.5rem", right: "3rem"}} />
        ) : (
          <AiOutlineBars color="#fff" size={27} />
        )}
      </div>
    </nav>
  );
}

export default Navbar

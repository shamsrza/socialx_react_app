import React from 'react';
import "./Footer.css";
import { SiAnaconda } from 'react-icons/si';


const Footer = () => {
  return (
    <footer id="footer">
      <div className="container footer">
        <div className="footer-logo-rights">
            <div className="footer-logo">
                <SiAnaconda color="#fff" size={33} />
                <p className="footer-logo-text">
                  Social<span>X</span>
                </p>
            </div>
            <p className="u-text-small u-text-light">
              © 2023 SocialX. All Rights Reserved.
            </p>
        </div>

            <div className="footer-menu">
              <ul>
                <li><a href="#" className='u-text-small u-text-light'>Terms of Use</a></li>
                <li><a href="#" className='u-text-small u-text-light'>Privacy Notice</a></li>
                <li><a href="#" className='u-text-small u-text-light'>Cookie Notice</a></li>
                <li><a href="#" className='u-text-small u-text-light'>Contact</a></li>
              </ul>
            </div>
      </div>
    </footer>
  )
}

export default Footer

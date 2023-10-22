import React from 'react'
import "./Subscribe.css";
import { TiSocialGooglePlus } from "react-icons/ti";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import {subscribeBg } from '../../assets/subscribe-bg.png';
import { IconContext } from "react-icons";


const Subscribe = () => {
  return (
    <section id="subscribe">
      <div className="container subscribe">
        <h2 className='u-title-h2 u-text-light'>Subscribe now</h2>
        <form>
          <div className="form-control">
            <input type="text" placeholder='Enter your email...'/>
            <button>Subscribe</button>
          </div>
        </form>
        <IconContext.Provider value={{size: "15", color: "#fff"}}>
            <div className="social-icons">
              <div className="social-icon">
                <TiSocialGooglePlus/>
              </div>
              <div className="social-icon">
                <FaFacebookF/>
              </div>
              <div className="social-icon">
                <FaTwitter/>
              </div>
              <div className="social-icon">
                <FaInstagram/>
              </div>
            </div>
        </IconContext.Provider>

      </div>
    </section>
  )
}

export default Subscribe

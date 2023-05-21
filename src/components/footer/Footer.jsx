import React from "react";
import "./footer.css";
import {FaFacebookF} from 'react-icons/fa'
import {BsInstagram} from 'react-icons/bs'
import {ImLinkedin} from 'react-icons/im'
const Footer = () => {
  return (
    <footer>
      <ul className="permalinks">
        <a href="#" className="footer__logo">
          RAKESH
        </a>
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="experience">Experience</a>
        </li>
        <li>
          <a href="services">Services</a>
        </li>
        <li>
          <a href="portfolio">Portfolio</a>
        </li>
        <li>
          <a href="testimonials">Testimonials</a>
        </li>
        <li>
          <a href="contact">Contact</a>
        </li>
      </ul>

    <div className="footer__socials">
      <a href="https://facebook.com"><FaFacebookF/></a>
      <a href="https://instagram.com"><BsInstagram/></a>
      <a href="https://linkedin.com"><ImLinkedin /></a>
    </div>

    <div className="footer__copyright">
      <small>&copy; Rakesh Shah. All rights reserved.</small>
    </div>

    </footer>
  );
};

export default Footer;

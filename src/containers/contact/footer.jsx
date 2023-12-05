import React from "react";
import "./footer.scss";
import { FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaCopyright } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <div class="bottom-container">
      <a
        class="footer-link"
        href="https://wa.me/qr/SMG4B4IOQ5AGC1">
        <FaWhatsapp />
      </a>
      <a
        class="footer-link"
        href="https://twitter.com/hasanzada_zahra?t=9d6UC9W6_jQxNcS4nrdbwQ&s=35">
        <FaTwitter />
      </a>
      <a
        class="footer-link"
        href="https://www.linkedin.com/in/zahra-hasanzadeh-06a3a1254?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">
        <FaLinkedin />
      </a>
      <a class="footer-link" href="https://github.com/zahraHasanzada">
        <FaGithub />
      </a>
      <p class="copy-right">
        <FaCopyright className="copy_right"/> Designed by Zahra Hasanzada 
      </p>
    </div>
  );
};

export default Footer;